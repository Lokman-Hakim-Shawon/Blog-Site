import {  useContext, useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../authentication/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecentBlogs = () => {
    const [data,setdata]=useState([])
    const {user}=useContext(AuthContext)
    const useremail=user?.email
    useEffect(()=>{
        fetch('https://assignment-11-database.vercel.app/datas')
    .then(res=>res.json())
    .then(datas=>setdata(datas))
    },[])
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
        fetch('https://assignment-11-database.vercel.app/wishlist_data',{
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
    return (
        <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.slice(-6).reverse().map(datas=><div 
               key={datas._id} className="card bg-base-100 shadow-xl">
                <figure><img src={datas.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{datas.category}</h2>
                  <h2 className="card-title font-normal">{datas.title}</h2>
                  {
                    datas.shortDes.length>50?
                    <p>{datas.shortDes.slice(0,100)}</p>
                    :
                    <p>{datas.shortDes}</p>
                  }
                  <div className=" justify-end space-x-10">
                    <Link to='/details' state={datas}><button className="btn btn-primary" >Details</button></Link>
                    <button onClick={()=>handledatabase(datas,useremail)} className="btn btn-primary" >Wishlist</button>
                  </div>
                </div>
              </div>)
            }
            <ToastContainer/>
        </div>
    );
};

export default RecentBlogs;