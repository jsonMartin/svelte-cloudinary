/**
 * pollForProcessingImage
 */
export async function pollForProcessingImage(options) {
    const { src } = options;
    try {
        await new Promise((resolve, reject) => {
            fetch(src).then(res => {
                if (!res.ok) {
                    reject(res);
                    return;
                }
                resolve(res);
            });
        });
    }
    catch (e) {
        if (e.status === 423) {
            return await pollForProcessingImage(options);
        }
        return false;
    }
    return true;
}
