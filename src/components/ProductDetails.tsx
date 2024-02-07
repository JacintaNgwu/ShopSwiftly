import ProductDetailsCard from "./ProductDetailsCard"

const data =[
    {
        id: 0,
        name: "T Shirt",
        count: "5 Products",
        price: "$20.00",
        description: "Made with quality materials and attention to detail, our T-shirts are built to last, ensuring long-lasting comfort and durability. From classic crew necks to trendy graphic prints, there's something for every style and occasion in our collection.",
    },
    {
        id: 1,
        name: "Shoe",
        count: "9 Products",
        price: "$100.00",
        description: "Step into sophistication and style with our latest collection of men's shoes.Whether you're stepping into the boardroom or hitting the town, our shoes offer unparalleled comfort and style to elevate any occasion.",
    },
    {
        id: 2,
        name: "Gown",
        count: "6 Products",
        price: "$130.00",
        description: "Crafted from luxurious fabrics and adorned with intricate details, our gowns are designed to captivate attention and leave a lasting impression. Whether you're attending a red-carpet event, a wedding, or a special occasion, our gowns are sure to elevate your look with their impeccable craftsmanship and flawless silhouette.",
    },
   
    {
        id: 3,
        name: "Handbag",
        count: "4 Products",
        price: "$70.00",
        description: "Crafted from premium materials and meticulously crafted to perfection, our handbags exude luxury and elegance. Elevate your everyday look with our sophisticated handbags and make a statement of refined style wherever you go.",
    },
    {
        id: 4,
        name: "Snickers",
        count: "8 Products",
        price: "$60.00",
        description: "Crafted from high-quality materials and engineered for durability, our sneakers are built to withstand the demands of your active lifestyle. Whether you're hitting the gym, exploring the city, or simply running errands, our sneakers provide superior comfort and support every step of the way.",
    },
    {
        id: 5,
        name: "Sunglass",
        count: "3 Products",
        price: "$30.00",
        description: "Shade your eyes in style with our exclusive collection of unisex sunglasses. Designed to elevate your look while protecting your eyes from the sun's harsh rays, each pair embodies sophistication and timeless elegance.",
    }
]

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {data.map((el) => (
             <ProductDetailsCard
                key={el.id}
                name={el.name}
                count={el.count}
                price={el.price}
                description={el.description}
             />
             ))}
    </div>
  )
}

export default ProductDetails