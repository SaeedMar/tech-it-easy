export function formatTvSizes(tv) {
    return tv.availableSizes.map(size => {
        const sizeInCm = Math.round(size * 2.54);
        return `${size} inch (${sizeInCm} cm)`;
    }).join(' | ');
}

