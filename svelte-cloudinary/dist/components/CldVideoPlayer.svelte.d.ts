import { SvelteComponentTyped } from "svelte";
import type { HTMLVideoAttributes } from 'svelte/elements';
import type { CloudinaryVideoPlayer, CloudinaryVideoPlayerOptions, CloudinaryVideoPlayerOptionsColors, CloudinaryVideoPlayerOptionsLogo } from '../../types/player';
export type CldVideoPlayerProps = Pick<CloudinaryVideoPlayerOptions, 'colors' | 'controls' | 'fontFace' | 'loop' | 'muted' | 'transformation'> & {
    autoPlay?: string;
    height: string | number;
    id?: string;
    logo?: boolean | CldVideoPlayerPropsLogo;
    onDataLoad?: Function;
    onError?: Function;
    onMetadataLoad?: Function;
    onPause?: Function;
    onPlay?: Function;
    onEnded?: Function;
    playerRef?: CloudinaryVideoPlayer | null;
    src: string;
    version?: string;
    videoRef?: HTMLVideoElement | null;
    quality?: string | number;
    width: string | number;
} & Pick<HTMLVideoAttributes, 'class'>;
export interface CldVideoPlayerPropsColors extends CloudinaryVideoPlayerOptionsColors {
}
export interface CldVideoPlayerPropsLogo {
    imageUrl?: CloudinaryVideoPlayerOptionsLogo['logoImageUrl'];
    logo?: boolean;
    onClickUrl?: CloudinaryVideoPlayerOptionsLogo['logoOnclickUrl'];
}
declare const __propDef: {
    props: {
        colors?: CloudinaryVideoPlayerOptionsColors | undefined;
        controls?: boolean | undefined;
        fontFace?: string | undefined;
        loop?: boolean | undefined;
        muted?: boolean | undefined;
        transformation?: object | object[] | undefined;
        autoPlay?: string | undefined;
        height: string | number;
        id?: string | undefined;
        logo?: boolean | CldVideoPlayerPropsLogo | undefined;
        onDataLoad?: Function | undefined;
        onError?: Function | undefined;
        onMetadataLoad?: Function | undefined;
        onPause?: Function | undefined;
        onPlay?: Function | undefined;
        onEnded?: Function | undefined;
        playerRef?: CloudinaryVideoPlayer | null | undefined;
        src: string;
        version?: string | undefined;
        videoRef?: HTMLVideoElement | null | undefined;
        quality?: string | number | undefined;
        width: string | number;
        class?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CldVideoPlayerProps = typeof __propDef.props;
export type CldVideoPlayerEvents = typeof __propDef.events;
export type CldVideoPlayerSlots = typeof __propDef.slots;
export default class CldVideoPlayer extends SvelteComponentTyped<CldVideoPlayerProps, CldVideoPlayerEvents, CldVideoPlayerSlots> {
}
export {};
