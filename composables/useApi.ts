export const useApi = <T>(endpoint: string, options = {}) => {
    const config = useRuntimeConfig();
    const url = `${config.public.apiBase}${endpoint}.json`;

    console.log('url', url)

   return useFetch(url, options);
};