const path = 'https://fakestoreapi.com/products'

export const fetchProducts = async() => {
  const response = await fetch(path)
  return response.json()
}