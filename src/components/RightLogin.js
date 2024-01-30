import { useNavigate } from "react-router-dom";
const RightLogin = () => {
  const navToHome = useNavigate();
  const goToHome = () => {
    navToHome("/home");
  };
  return (
    <>
      <div className="bg-white w-full ">
        <div className="   sm:p-14">
          <div className="signIn w-96 sm:pl-24 pl-4 py-2 ">
            <div>
              <h1 className="font-bold text-4xl leading-10">Sign in</h1>
              <h1 className="font-normal text-base leading-5 mt-3">
                Sign in your account
              </h1>
            </div>
            <div className="flex sm:justify-between gap-6 my-5">
              <div className=" flex gap-2">
                <img
                  className=""
                  src="assets/image/GoogleIcon.png"
                  alt="googlebtn"
                />
                <span className="text-xs font-normal font-mono text-gray-500">
                  {" "}
                  sign in with google
                </span>
              </div>
              <div className=" flex gap-2  rounded-2xl bg-white">
                <img src="assets/image/AppleIcon.png" alt="applebtn" />
                <span className="text-xs font-normal text-gray-500">
                  {" "}
                  sign in with apple
                </span>
              </div>
            </div>
          </div>
          <div className="login form">
            <div className="flex items-center justify-center">
              <form className="bg-white font-lato shadow-md rounded sm:px-8 pt-6 pb-4 mb-4 w-96">
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-normal mb-2">
                    Email address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-normal mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                  />
                </div>

                <h1 className="mb-4 text-base font-normal">Forget Password?</h1>
                <div className=" mb-4 ">
                  <button
                    onClick={goToHome}
                    className="bg-blue-500 font-lato w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="sm:flex sm:justify-center text-center m-auto">
              <h1 className="text-base  font-lato font-normal ">
                Don't have an account?
              </h1>
              <span className="text-blue-400 text-base font-normal">
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightLogin;
