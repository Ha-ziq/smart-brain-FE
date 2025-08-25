import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
const Navigation = ({setroute,route}) => 
 
  {
    if(route=== "home"){
       return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer'
        onClick={()=> setroute("signin")}> Sign Out</p>
      </nav>
      )
    }

    else{
      return (
     <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
       <p className='f3 link dim black underline pa3 pointer'
       onClick={()=> setroute("signin")}> Sign in</p>
       
       <p className='f3 link dim black underline pa3 pointer'
       onClick={()=> setroute("register")}> Register</p>
     </nav>
     )
    }
      
      
}

export default Navigation