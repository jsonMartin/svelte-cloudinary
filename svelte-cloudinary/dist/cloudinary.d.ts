/**
 * pollForProcessingImage
 */
export interface PollForProcessingImageOptions {
    src: string;
}
export declare function pollForProcessingImage(options: PollForProcessingImageOptions): Promise<boolean>;
