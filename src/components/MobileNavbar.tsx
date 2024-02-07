import { FaUser, FaShoppingCart } from "react-icons/fa";
import CartCount from "./CartCount";
import { IoMenu } from "react-icons/io5";

const MobileNavbar = () => {
    return(
        <div className="sticky top-0 bg-white z-10">
            <div className="container p-8 lg:hidden">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <IoMenu size={20} />
                    </div>
                    <h1 className="text-2xl">ShopSwiftly</h1>
                    <div className="flex gap-4 text-[20px]">
                    <FaUser />
                    </div>
                    <div className="relative cursor-pointer text-[20px]">
                    <FaShoppingCart />
                    <CartCount size="w-[15px] h-[15px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar