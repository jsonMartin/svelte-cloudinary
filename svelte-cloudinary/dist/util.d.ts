/**
 * triggerOnIdle
 * @see MDN Polyfill https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js#L7-L24
 */
/// <reference types="node" />
export declare function triggerOnIdle(callback: any): number | NodeJS.Timeout;
export declare function invariant(condition: boolean, message?: string): void;
export declare function loadCloudinary({ type, onLoad, onError }: {
    type: 'video' | 'widget';
    onLoad: () => void;
    onError: (error: any) => void;
}): void;
