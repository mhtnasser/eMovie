export async function checkStatus (response) {
    if (response.status >= 200 && response.status <300) {
        return  response.json();
    } else {
        throw  await response.json();
    }
}