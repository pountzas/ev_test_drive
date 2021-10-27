import React from 'react'
import Cookies from 'universal-cookie';

const Nav = () => {
  const cookies = new Cookies();

  const logout=()=>{
    cookies.remove('username', {path: "/"});
    window.location.href='./';
}


  return (
    <div>
      <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default Nav
