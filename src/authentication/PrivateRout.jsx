import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { PropTypes } from 'prop-types';

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
      return  children
    }
    return <Navigate to='/login'></Navigate>
};
PrivateRout.propTypes={
    children:PropTypes.node
}
export default PrivateRout;