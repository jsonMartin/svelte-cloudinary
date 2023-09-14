<script>import CldUploadWidget from "./CldUploadWidget.svelte";
import { invariant } from "../util.js";
const { uploadPreset, signatureEndpoint, onError, onUpload, options, onOpen, onClose, ...buttonProps } = $$props;
let baseProps = {
    onClose,
    onOpen,
    options,
    onUpload,
    onError,
    uploadPreset,
    signatureEndpoint
};
delete buttonProps["$$slots"];
delete buttonProps["$$scope"];
</script>

<CldUploadWidget {...baseProps} let:open let:isLoading>
	<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}>
		<slot>Upload</slot>
	</button>
</CldUploadWidget>
