const url = "http://localhost:1337";
const fetchProducts = async () => {
  const newUrl = url + "/products";
  const res = await fetch(newUrl);
  const data = await res.json();
  console.log(data);
  const products = data;

  return products;
};

export default fetchProducts;
