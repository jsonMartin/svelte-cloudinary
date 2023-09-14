/**
 * triggerOnIdle
 * @see MDN Polyfill https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js#L7-L24
 */
export function triggerOnIdle(callback) {
    if (window && 'requestIdleCallback' in window) {
        return requestIdleCallback(callback);
    }
    return setTimeout(() => callback(), 1);
}
export function invariant(condition, message) {
    if (condition) {
        return;
    }
    throw Error(message);
}
export function loadCloudinary({ type = 'widget', onLoad, onError }) {
    const script = document.createElement('script');
    if (type === 'widget') {
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    }
    else {
        script.src = `https://unpkg.com/cloudinary-video-player@1.9.4/dist/cld-video-player.min.js`;
    }
    document.body.appendChild(script);
    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);
}
