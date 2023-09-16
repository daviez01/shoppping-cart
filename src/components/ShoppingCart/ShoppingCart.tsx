type ShoppingCartProps = {
    isOpen: boolean;
    toggleCart: () => void;
    }

function ShoppingCart({ isOpen, toggleCart }: ShoppingCartProps) {
  return (
    <div onClick={toggleCart}>
        {isOpen && 
        
        
        }  
    </div>
  )
}

export default ShoppingCart
