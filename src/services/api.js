const BASE_URL = "https://api.carbonintensity.org.uk";
export const PUBLIC_URL = "https://carbonintensity.org.uk/";

async function fetchFromAPI(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getNationalIntensity() {
  const json = await fetchFromAPI("/intensity");
  console.log("API Response:", json);
  return json.data[0];
}

export async function getRegionalIntensity() {
  const json = await fetchFromAPI("/regional");
  console.log("API Response:", json);
  return json.data[0].regions;
}