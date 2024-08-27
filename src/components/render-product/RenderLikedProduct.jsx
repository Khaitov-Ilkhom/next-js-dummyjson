"use client"

import {useDispatch, useSelector} from "react-redux";
import {addToLiked} from "@/src/lib/slice/LikeSlice";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import Image from "next/image";
import RenderRating from "@/src/components/rating/RenderRating";
import Link from "next/link";

const RenderLikedProduct = () => {
  const {likedProducts} = useSelector((state) => state.like);
  const dispatch = useDispatch();

  const isProductLiked = (id) => {
    return likedProducts?.some(product => product.id === id)

  };

  const handleLike = (product) => {
    dispatch(addToLiked(product));
  }

  return (
      <div>
        <div className="grid grid-cols-4 max-w-[1200px] mx-auto gap-4">
          {
            likedProducts.map(product =>
                  <div key={product.id} className="shadow-xl rounded-2xl overflow-hidden">
                    <div className="p-4 flex items-center justify-center flex-col bg-black w-full">
                      <div className=" w-full flex justify-between items-center gap-2 px-2">
                        <span onClick={() => handleLike(product)} className="product-like text-red-500  text-3xl">
                           {
                             isProductLiked(product.id) ? <AiFillHeart className="text-red-500 text-2xl"/> :
                                 <AiOutlineHeart className="text-red-500 text-2xl"/>
                           }
                        </span>
                      </div>
                      <Image
                          priority
                          src={product.thumbnail}
                          alt={product.title}
                          width={300}
                          height={200}
                          className=" object-cover  "
                      />
                    </div>

                    <div className="p-4">
                      <p className="font-semibold line-clamp-1">{product.title}</p>
                      <div className="flex justify-between items-center py-2">
                        <RenderRating rate={product?.rating}/>
                        <p>${product.price}</p>
                      </div>
                      <p className="line-clamp-2 pt-2">{product.description}</p>
                      <div className="w-full flex text-center mt-2">
                        <Link href={`/products/${product.id}`}
                              className="w-full text-white border border-slate-600 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 hover:ring-2 ring-slate-300">View
                          More</Link>
                      </div>
                    </div>
                  </div>
              )
          }
        </div>
      </div>
  )
}
export default RenderLikedProduct
