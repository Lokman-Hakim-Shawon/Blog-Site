import { useContext } from "react";
import { AuthContext } from "../authentication/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createuser,google}=useContext(AuthContext)
    const handleregister= e =>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        console.log(name,email,password)
        const uppercase=/[A-Z]/
        const special=/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
        const number=/[0-9]/
        if(password.length<6 || uppercase.test(password) || special.test(password) || number.test(password)){
          toast('password length must be 6 cherecter and have not [A-Z],[0-9] or special charecter')
        }
        else{
          createuser(email,password)
        .then(result=>{
          // console.log('signup successfull',result.user)
          toast("Registration Successfull !!",result)
        })
        .catch(error=>{
          // console.log(error)
          toast(`Error : ${error}`) 
        })
        }
    }
    const handlegoogle=()=>{
      google()
      .then(result=>console.log('login succefull',result))
      .catch(error=>console.log(error))
 }
    return (
        <div>
          <div className="hero py-10">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleregister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button onClick={handlegoogle} className="btn bg-black text-white">Signin with Google</button>
          <br/>
          <button className="btn btn-primary">Register</button>
        </div>
         <p>Have an account? <Link to='/login' className="text-green-500 underline">Login</Link></p>
      </form>
    </div>
</div>  
<ToastContainer />

        </div>
    );
};

export default Register;