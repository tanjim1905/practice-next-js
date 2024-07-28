import Link from "next/link";

const getAllProducts = async () => {
  try {
    const allProducts = await fetch("https://dummyjson.com/products");
    const res = await allProducts.json();
    return res.products;
  } catch (error) {
    throw new Error(error);
  }
};

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div>
      <h1>This is Products page.</h1>
      <ul>
        {products.map((product) => (
          <li>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
