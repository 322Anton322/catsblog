export async function getAllDogs2() {
    const res = await  fetch('http://10.10.21.200:1337/api/dogs', { next: { revalidate: 20, tags: ['collection'] } }).then(response => response.json())
    return res
}