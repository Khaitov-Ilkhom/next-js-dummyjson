import Image from "next/image";
import RenderRating from "@/src/components/rating/RenderRating";
import {useState} from "react";

const ProductDetails = ({product}) => {
  const [showClass, setShowClass] = useState(false);
  if (!product) {
    return <p className="text-center text-gray-500">Mahsulot topilmadi</p>;
  }

  const toggleShowClass = () => {
    setShowClass(!showClass);
  }
  return (
      <div>
        <div
            className="w-full flex justify-center items-start gap-6 p-5 border bg-gray-200 rounded-2xl mt-[20px] shadow-2xl">
          <div className="shadow-lg rounded-xl">
            <Image priority src={product.thumbnail} alt={product.title} width={400} height={400}/>
          </div>
          <div className="w-[400px]">
            <p className="py-2 text-[28px] font-semibold">{product.title}</p>
            <div className="w-full flex justify-between items-center py-2">
              <RenderRating rate={product?.rating}/>
              <div className="flex items-center gap-4">
                <div className=" flex items-center gap-3">
                  <div
                      className="text-red-500 text-2xl font-bold font-['Lato'] leading-[31.20px]">${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</div>
                  <div
                      className="text-zinc-500 text-lg font-normal font-['Lato'] line-through leading-[27px]">${product.price}</div>
                </div>
                <div className="px-2 py-px bg-red-500 rounded gap-2.5 inline-flex">
                  <div
                      className="text-white text-lg font-bold font-['Lato'] leading-relaxed">-{product.discountPercentage}%
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="py-2"><strong>Minimum Order Quantity</strong>: {product.minimumOrderQuantity}</p>
              <p className=""><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p className="py-2"><strong>Brand:</strong> {product.brand}</p>
              <p className="capitalize"><strong>Category:</strong> {product.category}</p>
              <p className="py-2"><strong>Stock:</strong> {product.stock}</p>
              <p className="font-medium">{product.description}</p>
              <div className="mt-4 flex justify-between items-center gap-4">
                <span onClick={() => toggleShowClass()}
                      className="underline  ">( {product.reviews.length} reviews )</span>
                <button
                    className="px-6 bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-500 focus:outline-none focus:ring-3 focus:ring-slate-400 focus:ring-opacity-50">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden mt-5">
          <div style={{
            transform: showClass ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.5s ease"
          }}
               className="bg-gray-200 mb-6 overflow-hidden rounded-lg ">

            <div className="px-6 py-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4  ">
                Customer Reviews
              </h3>

              <div className="flex items-center justify-between px-10 mt-8">
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="border-r border-l border-gray-400 px-12 mb-4 ">
                          <div className="flex items-center mb-2">
                               <span className="text-yellow-500">
                          {"★".repeat(review.rating)}
                        </span>
                            <span className="text-gray-600 ml-2 text-sm">
                          {review.reviewerName}
                        </span>
                          </div>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <p className="text-gray-500 text-xs">
                            Reviewed on {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
export default ProductDetails