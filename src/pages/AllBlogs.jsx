import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authentication/Authprovider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AllBlogs = () => {
    const [data,setdata]=useState([])
    const [select,setselect]=useState(null)
    const [search,setsearch]=useState(null)
    const{user}=useContext(AuthContext)
    const useremail=user?.email
    useEffect(()=>{
        fetch('http://localhost:5000/datas')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    const searchData = data.filter(data => {
      if (select === null || select==="all category") {
          return data;
      } 
      else {
          return data.category === select;
      }
  });
    const handledatabase=(datas,useremail)=>{
        console.log(datas.title,useremail)
        const dataobj={
            email:useremail,
            image:datas.image,
            category:datas.category,
            title:datas.title,
            shortDes:datas.shortDes,
            longDes:datas.longDes

        }
        console.log(dataobj)
        // const data={datas,user}
        fetch('http://localhost:5000/wishlist_data',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(dataobj)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast('card added in wishlist')
            }
        })
    }
    const handleselect=e=>{
        e.preventDefault()
        setselect(e.target.value)
        console.log(select)
      }
      const Search=(select)=>{
          setsearch(select)
        console.log(select)
        console.log(search)
      }
    return (
        <div>
            <div className="flex justify-center my-10 py-10 bg-base-100 shadow-xl">

            <select id='select'defaultValue="choose a category"  className="input input-bordered w-1/2" onChange={handleselect} required >
        <option value='all category' className='font-bold'>All category</option>
        <option value='Food blogs'>Food blogs</option>
        <option value='Travel blogs'>Travel blogs</option>
        <option value='Health and fitness blogs'>Health and fitness blogs</option>
        <option value='Photography blogs'>Photography blogs</option>
        <option value='Personal blogs'>Personal blogs</option>
        <option value='Fashion and beauty blogs'>Fashion and beauty blogs</option>
      </select>

            <button onClick={()=>Search(select)} className="btn btn-primary ml-5 px-10">search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
         {
            searchData.map(data=><div key={data._id}>
                    <div  className="card bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.category}</h2>
                  <h2 className="card-title font-normal">{data.title}</h2>
                  {
                    data.shortDes.length>50?
                    <p>{data.shortDes.slice(0,100)}</p>
                    :
                    <p>{data.shortDes}</p>
                  }
                  <div className=" justify-end space-x-10">
                    <Link to='/details' state={data}><button className="btn btn-primary" >Details</button></Link>
                    <button onClick={()=>handledatabase(data,useremail)} className="btn btn-primary" >Wishlist</button>
                  </div>
                </div>
              </div>
            </div>)
         }   
         <ToastContainer/>
        </div>
        </div>
    );
};

export default AllBlogs;