<script context="module">"use strict";
</script>

<script>import { parseUrl } from "@cloudinary-util/util";
import { loadCloudinary } from "../util.js";
import { onMount } from "svelte";
const idRef = Math.ceil(Math.random() * 1e5);
const { autoPlay = "never", colors, controls = true, fontFace, height, id, logo = true, loop = false, muted = false, onDataLoad, onError, onMetadataLoad, onPause, onPlay, onEnded, src, transformation, version = "1.9.4", quality = "auto", width } = $$props;
const playerTransformations = Array.isArray(transformation) ? transformation : [transformation];
let publicId = src;
if (publicId.startsWith("http")) {
    try {
        const parts = parseUrl(src);
        if (typeof parts?.publicId === "string") {
            publicId = parts?.publicId;
        }
    }
    catch (e) {
    }
}
playerTransformations.unshift({
    quality
});
let cloudinaryRef;
let videoRef;
let playerRef;
const playerId = id || `player-${publicId.replace("/", "-")}-${idRef}`;
let playerClassName = "cld-video-player cld-fluid";
if ($$props.class) {
    playerClassName = `${playerClassName} ${$$props.class}`;
}
const events = {
    error: onError,
    loadeddata: onDataLoad,
    loadedmetadata: onMetadataLoad,
    pause: onPause,
    play: onPlay,
    ended: onEnded
};
function handleEvent(event) {
    const activeEvent = events[event.type];
    if (typeof activeEvent === "function") {
        activeEvent(getPlayerRefs());
    }
}
function handleOnLoad() {
    if ("cloudinary" in window) {
        cloudinaryRef = window.cloudinary;
        let logoOptions = {};
        if (typeof logo === "boolean") {
            logoOptions.showLogo = logo;
        }
        else if (typeof logo === "object") {
            logoOptions = {
                ...logoOptions,
                showLogo: true,
                logoImageUrl: logo.imageUrl,
                logoOnclickUrl: logo.onClickUrl
            };
        }
        let playerOptions = {
            autoplayMode: autoPlay,
            cloud_name: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
            controls,
            fontFace: fontFace || "",
            loop,
            muted,
            publicId,
            secure: true,
            transformation: playerTransformations,
            ...logoOptions
        };
        if (typeof colors === "object") {
            playerOptions.colors = colors;
        }
        playerRef = cloudinaryRef.videoPlayer(videoRef, playerOptions);
        Object.keys(events).forEach((key) => {
            if (typeof events[key] === "function") {
                playerRef?.on(key, handleEvent);
            }
        });
    }
}
function getPlayerRefs() {
    return {
        player: playerRef,
        video: videoRef
    };
}
function onLoadError(e) {
    console.error(`Failed to load Cloudinary Video Player: ${e.message}`);
}
onMount(() => {
    if (!window.cloudinary?.videoPlayer) {
        return loadCloudinary({ type: "video", onLoad: handleOnLoad, onError: onLoadError });
    }
    return handleOnLoad();
});
</script>

<svelte:head>
	<link
		href={`https://unpkg.com/cloudinary-video-player@${version}/dist/cld-video-player.min.css`}
		rel="stylesheet"
	/>
</svelte:head>

<div style="width:100%;aspect-ratio:{$$props.width} / {$$props.height}">
	<video bind:this={videoRef} id={playerId} class={playerClassName} {width} {height}>
		<track kind="captions" />
	</video>
</div>
