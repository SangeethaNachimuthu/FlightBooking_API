const BASE_URL = "http://localhost:8080/api/flights";

export async function getAllFlights() {
    const response = await fetch(BASE_URL);
    return response.json();
}