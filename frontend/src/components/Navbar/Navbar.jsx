import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

function Navbar() {
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  const navigate =useNavigate()
  return (

    <div className="max-w-[1080px] mx-auto flex justify-between items-center py-8">
      <div  className="text-3xl font-bold">
        <Link to="/">
        <h2>Shopping Cart</h2>
        </Link>
        
      </div>

      <ul className="">
        <li className="flex">
          <Link className="mx-4 flex gap-1 items-center" to="/cart">
            <BsFillCartFill className="text-lg" />
            <h3 className="font-bold">cart</h3>
            <span className="cartlogo_badge">{totalProducts}</span>
          </Link>

          <Link className="font-bold" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
