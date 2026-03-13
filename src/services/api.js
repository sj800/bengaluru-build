// Example API service
export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error');
  return response.json();
}
