import { useEffect, useState } from "react";

const ServicesSection = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/datas')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    return (
        <div className="w-full border border-2 mb-10">
           <h1 className="text-center text-4xl font-bold py-5">Our Services</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-24 gap-5 p-10 ">
            {
                data.slice(0,6).map(data=><div key={data._id} className="flex border border-2 border-blue-500 rounded-full space-x-5 items-center">
                
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                   <img src={data.image} />
                  </div>
                </div>
                <h1 className="px-5">{data.category}</h1>
            </div>)
            }
           </div>    
        </div>
    );
};

export default ServicesSection;