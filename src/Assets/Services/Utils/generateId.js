export const GenerateID = () => {
    const randomGen32 = new Uint32Array(1);

    window.crypto.getRandomValues(randomGen32);

    return (performance.now().toString(36) + Array.from(randomGen32).map(s => s.toString(36)).join("")).replace(/\./g, "");
}