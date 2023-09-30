import './CartItem.scss'
import { useShoppingCart } from "../../context/ShoppingCartContext"
import storeItems from "../../data/items.json"
import FormatCurrency from '../../utilities/FormatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity} : CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null ) return null;
  return (
    <div className="cart-item">
        <div className="left">
            <img src={item.imgUrl} alt="" />
            <div className="title">
                <div className="name">
                    {item.name}{quantity > 1 && <span className="quantity">x{quantity}</span>}
                </div>
                <div className="price">
                    {FormatCurrency(item.price)}
                </div>
            </div>
        </div>
        <div className="right">
            <div className="amount">
                {FormatCurrency(item.price * quantity)}
            </div>
            <div className="btn" onClick={() => removeFromCart(item.id) }>&times;</div>
        </div>
      
    </div>
  )
}

export default CartItem
