import { useContext, useState} from "react";
import { Cart } from '../cart/cart';
import { ShoppingCartOutlined } from '@ant-design/icons';
import CartContext from "../../context/CartContext";

const Dropdownd = () => {
  const { cartItems } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true) 
  };
  return (
    <div>
      <div className="py-10 flex-2">

        <div className="dropdown relative">
          <div>
          <button onClick={toggleNav} className="py-2 px-2 ">
          <ShoppingCartOutlined style={{
                color: "black",
                fontSize: '35px'
              }} />
          </button>
          
          <span
              className=" absolute bottom-0 right-0 mb-0.5 text-xs px-1 font-medium bg-black  text-white rounded "
            >
            {cartItems?.length}
            </span>
          </div>
          <ul className={`origin-top-right absolute right-0 mt-2 w-80 p-5 shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? 'hidden' : ''} text-gray-700 pt-1`}>
          <Cart onClick={
            toggleNav
          }/>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dropdownd;