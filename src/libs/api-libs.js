export const getMangaResponse = async (resource, query) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}/${resource}?${query}`);
    const manga = await response.json();
    return manga;
}
