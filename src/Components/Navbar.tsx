import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <div style={{display:'flex',gap:'10px'}}>
            <NavLink to='/' style={{textDecoration:'none',color:'black'}}>Home</NavLink>
            <NavLink to='/cart' style={{textDecoration:'none',color:'black'}}>Cart</NavLink>
            <NavLink to='/login' style={{textDecoration:'none',color:'black'}}>Login</NavLink>
            <NavLink to='/addProduct' style={{textDecoration:'none',color:'black'}}>AddProduct</NavLink>
        </div>
    </div>
  )
}

export default Navbar

