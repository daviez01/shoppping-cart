
type StoreItemsProps = {
    id: number;
    price: number;
    name: string;
    imgURL: string;
}

const StoreItems = ({ id, price, name, imgURL }: StoreItemsProps) => {
  return (
    <div className="card">
        <img src={imgURL} alt="" />
        <div className="title">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      
    </div>
  )
}

export default StoreItems
