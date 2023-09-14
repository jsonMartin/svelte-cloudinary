<script>import { onMount } from "svelte";
import { triggerOnIdle, loadCloudinary } from "../util.js";
const { uploadPreset, signatureEndpoint, onError, onUpload, options, onOpen, onClose } = $$props;
let cloudinary;
let widget;
const signed = !!signatureEndpoint;
const WIDGET_WATCHED_EVENTS = ["success", "display-changed"];
let isLoading = true;
const uploadOptions = {
    cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
    uploadPreset: uploadPreset || import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    apiKey: import.meta.env.VITE_PUBLIC_CLOUDINARY_API_KEY,
    ...options
};
if (signed) {
    uploadOptions.uploadSignature = generateSignature;
    if (!uploadOptions.apiKey) {
        console.warn(`Missing dependency: Signed Upload requires an API key`);
    }
}
function handleOnLoad() {
    isLoading = false;
    if (!cloudinary) {
        cloudinary = window.cloudinary;
    }
    triggerOnIdle(() => {
        if (!widget) {
            widget = createWidget();
        }
    });
}
function generateSignature(callback, paramsToSign) {
    if (typeof signatureEndpoint === "undefined") {
        throw Error("Failed to generate signature: signatureEndpoint undefined.");
    }
    fetch(signatureEndpoint, {
        method: "POST",
        body: JSON.stringify({
            paramsToSign
        })
    }).then((r) => r.json()).then(({ signature }) => {
        callback(signature);
    });
}
function createWidget() {
    const resultCallback = (uploadError, uploadResult) => {
        if (uploadError != null) {
            handleError(uploadError);
        }
        if (WIDGET_WATCHED_EVENTS.includes(uploadResult?.event)) {
            handleResults(uploadResult);
        }
    };
    return cloudinary?.createUploadWidget(uploadOptions, resultCallback);
}
function open() {
    if (!widget) {
        widget = createWidget();
    }
    widget?.open();
    if (typeof onOpen === "function") {
        onOpen(widget);
    }
}
function onLoadingError() {
    console.error(`Failed to load Cloudinary Upload Widget`);
}
function handleResults(results) {
    if (results != null) {
        const isSuccess = results.event === "success";
        const isClosed = results.event === "display-changed" && results.info === "hidden";
        if (isSuccess && typeof onUpload === "function") {
            onUpload(results, widget);
        }
        if (isClosed && typeof onClose === "function") {
            onClose(widget);
        }
    }
}
function handleError(error) {
    if (error && typeof onError === "function") {
        onError(error, widget);
    }
}
onMount(() => {
    if (!window.cloudinary?.createUploadWidget) {
        return loadCloudinary({ onLoad: handleOnLoad, onError: handleError });
    }
    return handleOnLoad();
});
</script>


<slot {open} {widget} {cloudinary} {isLoading} data-testid="slot"/>

