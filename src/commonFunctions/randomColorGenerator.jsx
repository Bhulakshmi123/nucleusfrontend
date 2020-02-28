const randomHeaderColorGenerator = () => {
    let selectedColorNumber = Math.floor(Math.random() * Math.floor(3));
    if (selectedColorNumber === 0) {
        return 'bg-bluefuchsia';
    }
    if (selectedColorNumber === 1) {
        return 'bg-bluefuchsia';
    }
    if (selectedColorNumber === 2) {
        return 'bg-bluefuchsia';
    }
}
export { randomHeaderColorGenerator }