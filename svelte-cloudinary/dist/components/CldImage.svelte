<script>import { getTransformations } from "@cloudinary-util/util";
import { transformationPlugins } from "@cloudinary-util/url-loader";
import { Image } from "@unpic/svelte";
import { getCldImageUrl } from "../helpers/getCldImageUrl.js";
const CLD_OPTIONS = ["config", "deliveryType", "preserveTransformations"];
$: ({ alt, src, width, height, config } = $$props);
transformationPlugins.forEach(({ props = [] }) => {
    props.forEach((prop) => {
        if (CLD_OPTIONS.includes(prop)) {
            throw new Error(`Option ${prop} already exists!`);
        }
        CLD_OPTIONS.push(prop);
    });
});
$: imageProps = {
    alt,
    src,
    width: typeof width === "string" ? parseInt(width) : width,
    height: typeof height === "string" ? parseInt(height) : height
};
$: if (imageProps) {
    Object.keys($$props).filter((key) => !CLD_OPTIONS.includes(key)).forEach((key) => {
        imageProps[key] = $$props[key];
    });
}
const cldOptions = {};
CLD_OPTIONS.forEach((key) => {
    if ($$props[key]) {
        cldOptions[key] = $$props[key] || void 0;
    }
});
if ($$props.preserveTransformations) {
    try {
        const transformations = getTransformations(imageProps.src).map((t) => t.join(","));
        cldOptions.rawTransformations = [
            ...transformations.flat(),
            ...$$props.rawTransformations || []
        ];
    }
    catch (e) {
        console.warn(`Failed to preserve transformations: ${e.message}`);
    }
}
</script>

{#if imageProps.src}
	<Image
		{...imageProps}
		cdn="cloudinary"
		transformer={({ width }) => {
			const options = {
				...imageProps,
				...cldOptions,
				// Without, get a "never" type error on options.width
				width: imageProps.width
			};

			options.width = typeof options.width === 'string' ? parseInt(options.width) : options.width;
			options.height =
				typeof options.height === 'string' ? parseInt(options.height) : options.height;

			// The transformer options are used to create dynamic sizing when working with responsive images
			// so these should override the default options collected from the props alone if
			// the results are different.

			if (
				typeof width === 'number' &&
				typeof options.width === 'number' &&
				width !== options.width
			) {
				options.widthResize = width;
			}
			return getCldImageUrl(options, config);
		}}
	/>
{/if}
