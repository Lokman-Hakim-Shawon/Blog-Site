// import { useEffect, useState } from 'react';
import { useContext, useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import { AuthContext } from '../authentication/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Details = () => {
    const {user}=useContext(AuthContext)
    const [comment,setcomment]=useState('')
    const [commentdata,setcommentdata]=useState([])
    useEffect(()=>{
      fetch('https://assignment-11-database.vercel.app/comment')
      .then(res=>res.json())
      .then(data=>setcommentdata(data))
    },[])
    const email=user?.email
    const image=user?.photoURL
    const location=useLocation()
    const state=location.state
    console.log('state',state)
    const handlecomment= e =>{
      // let form=e.target.value
       setcomment(e.target.value)
       console.log(comment)
    }
    // const [usercomment,setusercomment]=useState(null)
   
    const handlecommentsubmit=()=>{
      const commentData={
        blogid:state._id,
        email:email,
        photo:image,
        comment:comment
      }
      if(comment==''){
        toast('comment empty')
      }
      else if(email===state.email){
        toast("Can not comment on own blog")
      }
      else{
        fetch('https://assignment-11-database.vercel.app/comment',{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(commentData)
      })
      .then(res=>res.json())
      .then(data=>{
        toast('Comment Sent Successfull',data)
      })
      
        setcomment('')
      }
      
    }
    return (
        <div className='mb-10'>
            <div className="card">
  <figure className="px-10 pt-10">
    <img src={state.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-5xl underline">{state.title}</h2>
    <br/>
    <p>{state.shortDes}</p>
    <br/>
    <p>{state.longDes}</p>
    <div className="card-actions w-full mt-10 flex justify-center">
      {
        email===state.email?
        <Link to={`/update/${state._id}`} state={state._id} className='w-2/3'><button className="btn btn-primary w-2/3" >Update Page</button></Link>
          :
          <button className="btn btn-primary w-1/3 hidden">Update Page</button>
      }
    </div>
    <br/>
    <textarea onChange={handlecomment} name='textarea' className="textarea textarea-primary w-full" placeholder="Comment" required></textarea>
    <div className="card-actions w-full">
      <button onClick={handlecommentsubmit} className="btn btn-primary w-full">Comment send</button>
    </div>
  </div>
    <div>
      <table className='ml-10 w-2/3 border border-4 '>
        <tbody>
          {
            commentdata.map(data=><div key={data._id}>
              {
                state._id===data.blogid?
                <div>
                  <div className='bg-yellow-500 w-full flex items-center justify-start space-x-10'>
              <div className="avatar">
                 <div className="w-12">
                   <img src={data.photo} />
                 </div>
              </div>
            <p className=''>{data.email}</p>
          </div>
          <div className='bg-green-200  text-center'>
             <p className='col-span-2'>{data.comment}</p>
          </div>
                </div>
                :
                ''
              }
            </div>)
          }
        </tbody>
      </table>
    </div>
    <ToastContainer/>
</div>
        </div>
    );
};

export default Details;