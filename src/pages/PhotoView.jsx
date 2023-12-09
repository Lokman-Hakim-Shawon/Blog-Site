import { useLocation } from "react-router-dom";

const PhotoView = () => {
    const location=useLocation()
    const image=location.state
    console.log('image',image)
    return (
            <div>
            <img src={image} /> 
            </div>
    );
};

export default PhotoView;