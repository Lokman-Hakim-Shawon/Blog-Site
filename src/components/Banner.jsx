
import { useContext } from 'react';
import img from '../../public/images/download.jfif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../authentication/Authprovider';

const Banner = () => {
    const{user}=useContext(AuthContext)
    const displayname=user?.displayName
    console.log(displayname)
    return (
        <div className='lg:mb-10'>
          <div className="hero " style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-black">
      <h1 className="mb-5 text-4xl font-bold">Hello <span>{user?user.displayName:'user'}</span></h1>
      <p className="mb-5">Welcome to our blog related website.we hope you enjoy this site. here you will find blog site related information.there are many blogs availble here like personal blog,photography blog, travel blog, Health & fitness blog etc.</p>
      <Link to='/register'><button className="btn btn-primary">please Register for all services</button></Link>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;