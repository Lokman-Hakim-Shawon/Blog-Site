// import { ToastContainer} from "react-toastify";
import { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authentication/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBlog = () => {
  const [data,setdata]=useState(null)
  const {user}=useContext(AuthContext)
  const email=user?.email
  const photoURL=user?.photoURL
  console.log(photoURL)
  console.log(email)
  const addToDatabase= e =>{
   e.preventDefault()
   const form=e.target
   const image=form.image.value
   const title=form.title.value
   const category=data
   const shortDes=form.shortDes.value
   const longDes=form.longDes.value
   const user={photoURL,email,image,title,category,shortDes,longDes}
   console.log(user)
   fetch('https://assignment-11-database.vercel.app/datas',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data){
      toast('Data added successfull')
    }
   })
    // toast('add to database')
    form.image.value=''
    form.title.value=''
    form.shortDes.value=''
    form.longDes.value=''
  }
  const handleselect=e=>{
    e.preventDefault()
    setdata(e.target.value)
  }
    return (
      <div>
      <div className="hero py-10">
<div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
  <form className="card-body" onSubmit={addToDatabase}>
    <h1 className="text-center text-4xl font-bold">Create New Blog</h1>
    <div className="grid grid-cols-2 space-x-5">
    <div className="form-control col-span-2">
      <label className="label">
        <span className="label-text">Image URL</span>
      </label>
      <input type="text" name='image' placeholder=" image URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" name='title' placeholder="title" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Category</span>
      </label>
      {/* <input type="text" name='category' placeholder="cetegory" className="input input-bordered" required /> */}
      <select id='select'defaultValue="choose a category" onChange={handleselect} className="input input-bordered"  required >
        <option disabled  className='font-bold'>choose a category</option>
        <option value='Food blogs'>Food blogs</option>
        <option value='Travel blogs'>Travel blogs</option>
        <option value='Health and fitness blogs'>Health and fitness blogs</option>
        <option value='Photography blogs'>Photography blogs</option>
        <option value='Personal blogs'>Personal blogs</option>
        <option value='Fashion and beauty blogs'>Fashion and beauty blogs</option>
      </select>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Short Description</span>
      </label>
      <input type="text" name='shortDes' placeholder="short description" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Long Description</span>
      </label>
      <input type="text" name='longDes' placeholder="long description" className="input input-bordered" required />
    </div>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>
</div>
</div>  
<ToastContainer />

    </div>
    );
};

export default AddBlog;