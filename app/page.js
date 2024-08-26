import FetchData from "@/src/utils/fetchData";
import RenderProduct from "@/src/components/render-product/RenderProduct";

const Home = async () => {

  const products = await FetchData("https://dummyjson.com/products")
  console.log(products)
  return (
    <div>
      <div className="my-5">
        <h2 className="text-[28px] font-semibold text-center pb-4">All products</h2>
        <RenderProduct data={products} />
      </div>
    </div>
  );
}

export default Home;
