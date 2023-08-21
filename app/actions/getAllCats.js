export async function getAllCats() {
    const res = await fetch('http://10.10.21.200:1337/api/cats').then(response => response.json())
    return res
}