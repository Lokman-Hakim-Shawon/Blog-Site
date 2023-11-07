import { useEffect, useState } from "react";
// import TableComponent from './TableComponent';

const FeaturedBlogs = () => {
    const [data,setdata]=useState([])
    // const [number,setnumber]=useState(1)
    
    useEffect(()=>{
        fetch('http://localhost:5000/datas')
        .then(res=>res.json())
        .then(datas=>
            {
                const sort = datas.sort((a, b) => b.longDes.length - a.longDes.length)
                setdata(sort);

            })
    },[])
    
    return (
        <div className="">
            <table className="border border-2 w-1/4 md:w-1/2 lg:w-full text-center">
             <thead className="border border-2">
                <tr className="">
                    <td className="border border-2">Serial Number</td>
                    <td className="border border-2">profile picture</td>
                    <td className="border border-2">Blog Owner</td>
                    <td className="border border-2">Blog Title</td>
                    </tr>
             </thead>
                <tbody>
                {
                    data.slice(0,10).map((data,index)=><tr key={data._id}>
                        <td className="border border-2">{index+1}</td>
                        <td className="border border-2">
                        <div className="avatar">
                          <div className=" w-4 lg:w-16 rounded">
                             <img src={data.photoURL} className="w-10" alt="Tailwind-CSS-Avatar-component" />
                          </div>
                        </div>
                        </td>
                        <td className="border border-2">{data.email}</td>
                        <td className="border border-2">{data.category}</td>
                    </tr>)
                }
                </tbody>
             </table>
        
        </div> 
    );
};

export default FeaturedBlogs;