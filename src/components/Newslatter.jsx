import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Newslatter = () => {
    const handlesubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        if(email){

            toast('Thank you for subscribing to our newsletter')
        }
        e.target.email.value=''
    }
    return (
        <div>
         <div className=" py-10">
     <div className="card    shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={handlesubmit}>
        <h1 className="text-4xl font-bold text-center">Subscribe</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
</div>               
<ToastContainer />
        </div>
    );
};

export default Newslatter;