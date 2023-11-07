// import { useContext } from 'react'
// import {Link} from 'react-router-dom'
// import { AuthContext } from '../authentication/Authprovider'
// const Navbar = () => {
//   const {user,logout}=useContext(AuthContext)
//   const handlelogout=()=>{
//     logout()
//     .then(result=>console.log('logout successfull',result))
//     .catch(error=>alert(error,'error'))
//   }
//   // console.log(user.map(data=>data.email),'user')
//   // user.map(data=>console.log(data))
//     const navlink=<>
//      <Link to='/'><li>Home</li></Link>
//      <Link to='/add_blog'><li>Add Blog</li></Link>
//      <Link to='/all_blogs'><li>All Blogs</li></Link>
//      <Link to='/featured_blogs'><li>Featured Blogs</li></Link>
//      <Link to='/wishlist'><li>Wishlist</li></Link>   
//     </>
//     return (
//         <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         {navlink}
//       </ul>
//     </div>
//     <a className="btn btn-ghost normal-case text-xl text-blue-500">Blog<span className='text-green-500'>Site</span></a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 space-x-10">
//       {navlink}
//     </ul>
//   </div>
//   <div className="navbar-end ">
//     {
//       user?
//       <button className="btn" onClick={handlelogout}>
         
//           <div className="avatar">
//            {
//             user.photoURL?
//             <div className="w-8">
//              <img src={user.photoURL} />
//            </div>
//             :
//             " "
//            }
//           </div>
         
//          Log Out
//        </button>
//       :   
//     <div className='space-x-5'>
//       <Link to='/login'><button className="btn">Login</button></Link>
//     <Link to='/register'><button className="btn">Register</button></Link>
//     </div>
//     }
    
//   </div>
// </div>
//     );
// };

// export default Navbar;