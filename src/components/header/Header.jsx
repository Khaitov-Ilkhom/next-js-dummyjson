"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo-head.png"
import {Badge} from "antd";
import {useSelector} from "react-redux";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {AiFillProduct} from "react-icons/ai";


const Header = () => {
  const {cart} = useSelector(state => state.addCart);
  const {likedProducts} = useSelector(state => state.like);
  return (
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-2 min-h-[60px] bg-gray-200 mb-4">
        <div>
          <Link href="/"><Image width={60} height={60} src={logo} alt="Logo"/></Link>
        </div>
        <div>
          Search
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4 px-6">
            <li><Link href="/liked-products"><Badge count={likedProducts.length}>{likedProducts.length > 0 ?
                <FaHeart className="text-red-600 text-[30px]"/> :
                <FaRegHeart className="text-red-600 text-[30px]"/>}</Badge></Link></li>
            <li><Link href="/carts"><Badge count={cart.length}><AiFillProduct className="text-[32px]"/></Badge></Link>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default Header
