import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [products, setproducts] = useState([]);

    const addToCart = (id, productName, price, image) => {
        setproducts((prevState) => [...prevState, { id, productName, price, image }]);

    };

    const deleteCartById = (id) => {
        const newCart = [...products];
        let index = newCart.findIndex(el => el.id === id);

        newCart.splice(index, 1);

        setproducts([...newCart]);
    }

    const deleteCart = () => {
        setproducts([]);
    }

    return (
        <CartContext.Provider value={{ products, setproducts, addToCart, deleteCart, deleteCartById }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;