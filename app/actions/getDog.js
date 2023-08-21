export async function getDogs(id) {
    const response = await fetch(`http://10.10.21.200:1337/api/dogs/${id}`)
 
    return response.json()
}