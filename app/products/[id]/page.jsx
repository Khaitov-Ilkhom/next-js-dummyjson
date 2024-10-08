"use client"

import ProductDetails from "@/src/components/product-details/ProductDetails";
import fetchData from "@/src/utils/fetchData";
import notFound from "@/app/not-found";

const Page = async ({params}) => {
  const product = await fetchData(`https://dummyjson.com/products/${params.id}`);
  if (!product) {
    notFound()
  }
  return (
      <div className="max-w-[1000px] mx-auto flex justify-center items-center">
        <ProductDetails product={product}/>
      </div>
  )
}
export default Page
