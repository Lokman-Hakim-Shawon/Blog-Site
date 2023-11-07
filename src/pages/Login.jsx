import { useContext } from "react";
import { AuthContext } from "../authentication/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const {login,google}=useContext(AuthContext)
    const handlelogin=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        login(email,password)
        .then(result=>{
          toast('login successfull !!',result)
        })
        .catch(error=>{
          toast(`error: ${error}`)
        })
    }
    const handlegoogle=()=>{
         google()
         .then(result=>console.log('login succefull',result))
         .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div>
         <div className="hero py-10">
     <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={handlelogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button onClick={handlegoogle} className="btn bg-black text-white">Signin with Google</button>
          <br/>
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Are you new user? <Link to='/register' className="text-green-500 underline">Register</Link></p>
      </form>
    </div>
</div>    
<ToastContainer />

        </div>
    );
};

export default Login;