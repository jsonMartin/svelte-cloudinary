import { SvelteComponentTyped } from "svelte";
import type { CldUploadWidgetProps } from './CldUploadWidgetTypes.ts';
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CldUploadWidgetProps = typeof __propDef.props;
export type CldUploadWidgetEvents = typeof __propDef.events;
export type CldUploadWidgetSlots = typeof __propDef.slots;
export default class CldUploadWidget extends SvelteComponentTyped<CldUploadWidgetProps, CldUploadWidgetEvents, CldUploadWidgetSlots> {
}
export {};
