import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { userAction } from '../../store/userSlice';
import { bagActions } from '../../store/bagSlice';
function Navbar() {

  const email=useSelector((store)=>store.user.email);

  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleLogout = () => {
    if (confirm("Confirm Logout")) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      dispatch(userAction.setUserState(null));
      dispatch(bagActions.clearCart())
      navigate("/login");
    }
  };

  return (
<div class="dropdown-center" >
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100px",backgroundColor:"grey"}}>
    Home
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/men">Men</Link></li>
    <li><Link class="dropdown-item" to="/woman">Women</Link></li>
    <li><Link class="dropdown-item" to="/kids">Kids</Link></li>
    <li><Link class="dropdown-item" to="/homeandliving">Home & Living</Link></li>
    <li><Link class="dropdown-item" to="/beauty">Beauty</Link></li>

    {email===null ? <li><Link class="dropdown-item" to="/login">Login</Link></li>
    : <div>
    <li><Link class="dropdown-item"><MdAccountCircle style={{fontSize:"1.2rem",marginRight:"10px"}}/>{email}</Link></li>
    <li><Link class="dropdown-item" to="/orders">Orders</Link></li>
    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Logout</button></li>
    </div>}
  </ul>
</div>
  )
}

export default Navbar
