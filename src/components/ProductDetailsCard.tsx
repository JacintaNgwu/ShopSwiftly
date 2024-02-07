import { FaArrowRight } from "react-icons/fa";

interface propsType {
    name: string;
    count: string;
    price: String
    description: string;
}

const ProductDetailsCard: React.FC<propsType> = ({ name, count,price, description }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 rounded-lg">
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
                <p className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">{price}</p>
                <p className="font-medium text-xl">{description}</p>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-3 cursor-pointer">
                    Shop Now <FaArrowRight />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDetailsCard