import './StoreItem.scss'
import formatCurrency from '../../utilities/FormatCurrency'
import { useShoppingCart } from '../../context/ShoppingCartContext'


type StoreItemsProps = {
    id: number;
    price: number;
    name: string;
    imgUrl: string;
}

const StoreItem = ({ id, price, name, imgUrl }: StoreItemsProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="card">
        <img src={imgUrl} alt="" />
        <div className="card-body">
          <div className="title">
            <span className='name'>{name}</span>
            <span className='price'>{formatCurrency(price)}</span>
          </div>
          <div className='container'>
            { quantity === 0 ? <button className='btn add' onClick={() => increaseCartQuantity(id)}> + Add to Cart</button> :
            <div className='qty'>
                <div className='quantity'>
                  <button className='btn' onClick={() => decreaseCartQuantity(id)}>-</button>
                  <span>{quantity}</span> Added to Cart
                  <button className='btn' onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <button className="btn remove" onClick={() => removeFromCart(id)}>Remove from Cart</button>
            </div>
            }
          </div>
        </div>
      
    </div>
  )
}

export default StoreItem
