export async function getCats(id) {
    const response = await fetch(`http://10.10.21.200:1337/api/cats/${id}`)
 
    return response.json()
}