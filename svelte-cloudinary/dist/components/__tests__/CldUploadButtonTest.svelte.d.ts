/** @typedef {typeof __propDef.props}  CldUploadButtonTestProps */
/** @typedef {typeof __propDef.events}  CldUploadButtonTestEvents */
/** @typedef {typeof __propDef.slots}  CldUploadButtonTestSlots */
export default class CldUploadButtonTest extends SvelteComponentTyped<{
    uploadPreset: any;
    signatureEndpoint: any;
    onError: any;
    onUpload: any;
    onOpen: any;
    onClose: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CldUploadButtonTestProps = typeof __propDef.props;
export type CldUploadButtonTestEvents = typeof __propDef.events;
export type CldUploadButtonTestSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        uploadPreset: any;
        signatureEndpoint: any;
        onError: any;
        onUpload: any;
        onOpen: any;
        onClose: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
