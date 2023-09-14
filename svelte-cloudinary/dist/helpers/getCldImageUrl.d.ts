import type { ImageOptions, ConfigOptions, AnalyticsOptions } from '@cloudinary-util/url-loader';
/**
 * getCldImage
 */
export interface GetCldImageUrlOptions extends ImageOptions {
}
export interface GetCldImageUrlConfig extends ConfigOptions {
}
export interface GetCldImageUrlAnalytics extends AnalyticsOptions {
}
export interface GetCldImageUrl {
    options: GetCldImageUrlOptions;
    config?: GetCldImageUrlConfig;
    analytics?: GetCldImageUrlAnalytics;
}
/**
 * Generates the Cloudinary url for the assets
 * based on the configuration passed to the function
 * @returns string
*/
export declare function getCldImageUrl(options: ImageOptions, config?: ConfigOptions, analytics?: AnalyticsOptions): string;
