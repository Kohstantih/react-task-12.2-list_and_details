export default async function fetchServiceDetails(id: string) {
    const response = await fetch(`${import.meta.env.VITE_APP_SERVICES_URL}/${id}`)
    return await response.json();
}