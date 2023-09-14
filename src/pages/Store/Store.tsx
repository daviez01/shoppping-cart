import './Store.scss'
import StoreItem from '../../components/StoreItem/StoreItem'
import storeItems from '../../data/items.json'


const Store = () => {
  return (
    <div className='store'>
      <h1>STORE</h1>
      <div className="container">
        {storeItems.map(item => (
        <div className='items' key={item.id}>
          <StoreItem {...item} />
        </div>))}
      </div>
    </div>
  )
}

export default Store
