export const useDarkMode = (isDark : boolean)  => {
    return {
        isDark : useState("isDarkMode", () =>
            window.matchMedia("(prefers-color-scheme: dark)").matches),
    }
};