export function schermGrotte(tv) {
    if (!tv.availableSizes || tv.availableSizes.length === 0) {
        return '';
    }

    return tv.availableSizes.map(size => {
        const sizeInCm = Math.round(size * 2.54);
        return `${size} inches (${sizeInCm} cm)`;
    }).join(' | ');
}