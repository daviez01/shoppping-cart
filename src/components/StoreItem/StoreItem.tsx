import './StoreItem.scss'
import formatCurrency from '../../utilities/FormatCurrency'

type StoreItemsProps = {
    id: number;
    price: number;
    name: string;
    imgUrl: string;
}

const StoreItem = ({ id, price, name, imgUrl }: StoreItemsProps) => {
  const quantity = 0
  return (
    <div className="card">
        <img src={imgUrl} alt="" />
        <div className="card-body">
          <div className="title">
            <span className='name'>{name}</span>
            <span className='price'>{formatCurrency(price)}</span>
          </div>
          <div className='container'>
            { quantity === 1 ? <button className='btn add'> + Add to Cart</button> :
            <div className='qty'>
                <div className='quantity'>
                  <button className='btn'>-</button>
                  <span>{quantity}</span> Added to Cart
                  <button className='btn'>+</button>
                </div>
                <button className="btn remove">Remove from Cart</button>
            </div>
            }
          </div>
        </div>
      
    </div>
  )
}

export default StoreItem
