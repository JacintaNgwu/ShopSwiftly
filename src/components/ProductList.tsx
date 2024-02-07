import { AiOutlineShopping } from "react-icons/ai";

const ProductList = () => {
    
  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/T shirt.avif" alt="T-shirt" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">T-SHIRT</h2>
                        <p className="text-2x1 hidden sm:block">100% Original T-Shirt</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$20.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/shoe.jpg" alt="Shoe" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">Office Shoe</h2>
                        <p className="text-2x1 hidden sm:block">100% Men Quality Shoe</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$100.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/gown.jpg" alt="Gown" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">Vintage Gown</h2>
                        <p className="text-2x1 hidden sm:block">Ladies Fashionable Wear</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$130.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/handbag.webp" alt="Bag" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">Handbag</h2>
                        <p className="text-2x1 hidden sm:block">Premium Handbag</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$70.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/Snickers.jpg" alt="Shoe" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">Snickers</h2>
                        <p className="text-2x1 hidden sm:block">100% Quality Snickers</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$60.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src="/Unisex Sunglass.jpg" alt="Sunglass" />
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[40%] translate-y-[50%] sm:space-y-2">
                        <h2 className="text-4x1 sm:text-4x1 md:text-6x1 font-bold">Sunglass</h2>
                        <p className="text-2x1 hidden sm:block">Quality is Top Knotch</p>
                        <div className="font-medium text-red-600 text-2x1 sm:text-4x1 pb-4 sm:pb-8">$30.00</div>
                        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`}>Details</button>
                        <button className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[30px] h-[30px] rounded-full grid place-items-center cursor-pointer">
                        <AiOutlineShopping />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList