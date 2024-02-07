import { FaUser, FaShoppingCart } from "react-icons/fa";
import CartCount from "./CartCount";

const Navbar = (setShowCart: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">ShopSwiftly</h1>
                <ul className="flex justify-between items-center gap-8">
                <li className="text-2xl font-medium">ProductList</li>
                <li className="text-2xl font-medium">ProductDetails</li>
                </ul>
                <div className="flex gap-4">
                    <div className="icon_wrapper">
                    <FaUser />
                    </div>
                    <div className="icon_wrapper relative cursor-pointer" onClick={() => setShowCart(true)}>
                    <FaShoppingCart />
                    <CartCount size="w-[25px] h-[25px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar