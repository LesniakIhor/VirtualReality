export const splitByChar = (text, char) => {
    if (!text || !char) return [];

    return text.split(char);
}