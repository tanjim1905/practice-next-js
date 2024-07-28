const getSingleProduct = async (productId) => {
  try {
    const allProducts = await fetch(
      `https://dummyjson.com/products/${productId}`
    );
    const res = await allProducts.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const Product = async ({ params }) => {
  const { productId } = params;
  const product = await getSingleProduct(productId);
  return (
    <div>
      <h1>{product?.id}</h1>
      <h1>{product?.title}</h1>
      <h1>{product?.description}</h1>
    </div>
  );
};
export default Product;
