import RightLogin from "./RightLogin";
import LeftLogin from "./LeftLogin";
const Login = () => {
  return (
    <>
      <div className="w-full  h-screen	  sm:flex">
        <LeftLogin />
        <RightLogin />
      </div>
    </>
  );
};
export default Login;
