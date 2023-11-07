import Login from "../pages/Login";

const LoginSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login </h1>
      <p className="py-6">If you have an account and you want to get our all services, you need to login. </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <Login></Login>
    </div>
  </div>
</div>
    );
};

export default LoginSection;