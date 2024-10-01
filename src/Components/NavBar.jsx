import { Link, NavLink } from "react-router-dom";


const NavBar = ()=>{

   
    return(
        <>
        
        <li className="navbar">
        <ul className="navbar1" >
        <Link className="links" to="/">Home</Link>
        </ul>
        <ul>
        <NavLink className="links" to="/Education">Education</NavLink>
        </ul>
        <ul>
        <NavLink className="links" to="/Work">Work</NavLink>
        </ul>
        <ul>
        <NavLink className="links" to="/Project">Project</NavLink>
        </ul>
        <ul>
        <NavLink className="links" to="/Contact">Contact Us</NavLink>
        </ul>
       
        </li>
      
        <div className="name"><h2 >MAHANTESH N MUTTAGI</h2>
        <p className="address">Phone Number : +917760841244 <br/><a className="mail" href="mailto:mahanteshmuttagi1@gmail.com">Email id : mahanteshmuttagi1@gmail.com</a><br></br>State : Karnataka,  Distic : Vijayapur,<br></br>Taluk : Indi, Pin code : 586112</p></div>

        <div >
       <hr className="line"></hr>
        </div>
        <div>
        
        </div>

      </>

      

      
    )
}
export default NavBar;