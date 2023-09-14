import { createContext, useContext, useState } from "react"; 

type ShoppingCartProviderProps = {
    children: React.ReactNode;
}

type ShoppingCartContextProps = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
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
    const [cartItem, setCartItem] = useState<CartItem[]>([]);

    function getItemQuantity(id: number) {
        return cartItem.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItem(prevState => {
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
        setCartItem(prevState => {
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
        setCartItem(prevState => {
            return prevState.filter(item => item.id !== id);
        });
    }

    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </ShoppingCartContext.Provider>
    );
}