export default async function fetchServicesList() {
    const response = await fetch(import.meta.env.VITE_APP_SERVICES_URL)
    return await response.json();
}