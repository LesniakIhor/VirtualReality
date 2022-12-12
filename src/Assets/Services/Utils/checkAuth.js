export const checkAuth = () => {
    return JSON.parse(localStorage.getItem("user"));
}