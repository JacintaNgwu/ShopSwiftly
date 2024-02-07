import { ReactNode, createContext, useContext, useState } from "react"

interface ICart {
    product: any [];
    addToCart: (cart: any) => void;
}

const Cart = createContext<ICart>({
    product: [],
    addToCart: () => {},
});

interface ICartProvider {
    children: ReactNode;
}

export const CartProvider = ({ children }: ICartProvider) => {
    const [product, setProduct] = useState<any>([]);

    const addToCart = (cart: any) => {
        setProduct((prevCart: any) => [...prevCart, cart])
    };

    return (
        <Cart.Provider value={{ product, addToCart }}>
        {children}
        </Cart.Provider>
    );
};

export const useCart = () => {
    const context = useContext(Cart);
    return context
}