"use client"

import Image from "next/image";
import RenderRating from "@/src/components/rating/RenderRating";
import Link from "next/link";
import {useState} from "react";

const RenderProduct = ({data}) => {
  const [productQuantity, setProductQuantity] = useState(8);
  return (
      <div>
        <div className="grid grid-cols-4 max-w-[1200px] mx-auto gap-4">
          {
              data && data?.products.slice(0, productQuantity).map(product =>
                  <div key={product.id} className="shadow-xl rounded-2xl overflow-hidden">
                    <div className="">
                      <Image className='bg-black w-full' width={200} priority height={200}
                             src={product.thumbnail} alt={product.title}/>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold line-clamp-1">{product.title}</p>
                      <div className="flex justify-between items-center py-2">
                        <RenderRating rate={product?.rating}/>
                        <p>${product.price}</p>
                      </div>
                      <p className="line-clamp-2 pt-2">{product.description}</p>
                      <div className="w-full flex text-center mt-2">
                        <Link href={`/products/${product.id}`} className="w-full text-white border border-slate-600 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 hover:ring-2 ring-slate-300">View
                          More</Link>
                      </div>
                    </div>
                  </div>
              )
          }
        </div>
        <div className="w-full my-6 text-center">
          <button
              className="px-8 bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              onClick={() => setProductQuantity(productQuantity + 4)}>Show More
          </button>
        </div>
      </div>
  )
}
export default RenderProduct
