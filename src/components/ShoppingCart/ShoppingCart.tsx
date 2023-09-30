import './ShoppingCart.scss'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../CartItem/CartItem';
import storeItems from '../../data/items.json';
import FormatCurrency from '../../utilities/FormatCurrency';

type ShoppingCartProps = {
    isOpen: boolean;
}

function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
        {isOpen && 
        <div className="cart-container">
          <div className='heading'>
            <h1>Cart</h1>
            <div className='btn' onClick={closeCart}>&times;</div>
          </div>
          <div className="body">   
            {cartItems.map(item => (
              <CartItem key={item.id} {...item}/>
            ))}
            <div className="total">
              TOTAL : {" "}
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(item => item.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          </div>
        </div>
         }  
    </>
  )
}

export default ShoppingCart
