import { createContext, useContext, useState } from "react"; 
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

type ShoppingCartProviderProps = {
    children: React.ReactNode;
}

type ShoppingCartContextProps = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

type CartItem = {
    id: number;
    quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

    const openCart = () => setIsOpen(true);

    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItems(prevState => {
            if (prevState.find(item => item.id === id) == null){
                return [...prevState, { id, quantity: 1 }];
            } else {
                return prevState.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(prevState => {
            if (prevState.find(item => item.id === id)?.quantity === 1){
                return prevState.filter(item => item.id !== id);
            } else {
                return prevState.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems(prevState => {
            return prevState.filter(item => item.id !== id);
        });
    }

    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, openCart, closeCart, cartItems }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
    );
}