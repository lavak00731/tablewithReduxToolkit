const getProducts = async (limit:number, skip:number) =>{
    console.log(`https://dummyjson.com/products?limit=${limit}&skip=${skip * limit}`)
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        if(response.ok) {
            const rawResponse = await response;
            const list = await rawResponse.json();
            return list.products;
        }     
    } catch (error) {
        console.log(error)
    }
}
export default getProducts;