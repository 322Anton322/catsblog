export async function getAllDogs() {
    const res = await  fetch('http://10.10.21.200:1337/api/dogs', ).then(response => response.json())
    return res
}