import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authentication/Authprovider";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Wishlist = () => {
    const {user}=useContext(AuthContext)
    const [data,setdata]=useState([])
    const email=user?.email
    useEffect(()=>{
        fetch('http://localhost:5000/wishlist_data')
         .then(res=>res.json())
         .then(data=>setdata(data))
        },[])
        const handledelete=(id)=>{
            fetch(`http://localhost:5000/wishlist_data/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    toast('delete successfull')
                }
            })
        }
    return (
        <div className="grid grid-cols-1 gap-y-10 mb-10">
            {
                data.map(data=><div key={data._id} className="relative">
                    {
                        data.email==email?
                        <div className="hero  bg-base-200">
                        <div className="hero-content  ">
                        <img src={data.image} className="w-1/3 lg:max-w-sm rounded-lg shadow-2xl" />
                          <div>
                            <h1 className="text-3xl font-bold">{data.category}</h1>
                            <h1 className="text-3xl pt-10">{data.title}</h1>
                            <p className="py-6">{data.shortDes}</p>
                            <div className="space-x-20">
                            <Link to='/details' state={data}><button className="btn btn-primary">Details</button></Link>
                            <button onClick={()=>handledelete(data._id)} className="btn btn-primary">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                        :
                        <h1 className="hidden absolute">data not available</h1>
                    }
                </div> )
            }
            <ToastContainer />
        </div>
    );
};

export default Wishlist;