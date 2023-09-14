import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import { SVELTE_CLOUDINARY_ANALYTICS_ID, SVELTE_CLOUDINARY_VERSION, SVELTE_VERSION } from '../constants/analytics.js';
/**
 * Generates the Cloudinary url for the assets
 * based on the configuration passed to the function
 * @returns string
*/
export function getCldImageUrl(options, config, analytics) {
    return constructCloudinaryUrl({
        options,
        config: Object.assign({
            cloud: {
                cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME
            }
        }, config),
        analytics: Object.assign({
            sdkCode: SVELTE_CLOUDINARY_ANALYTICS_ID,
            sdkSemver: SVELTE_CLOUDINARY_VERSION,
            techVersion: SVELTE_VERSION,
            product: 'B'
        }, analytics)
    });
}
