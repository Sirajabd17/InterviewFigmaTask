const LeftLogin = () => {
  return (
    <>
      <div className="bg-bglogin sm:flex sm:justify-between sm:flex-col p-8 w-full  ">
        <div className=" site logo  relative   ">
          <img
            src="assets/image/Logo.png"
            className="absolute left-1"
            alt="logo"
          />
          <img
            src="assets/image/LogoCurveLine.png"
            className="absolute  top-6"
            alt="logo"
          />
        </div>
        <div className="siteName  ml-6 text-center ">
          <h1 className="text-7xl  font-mono font-bold text-white ">BASE</h1>
        </div>

        <div className="icon   ">
          <img
            className="m-auto hidden sm:block"
            src="assets/image/icons.png"
            alt="icon"
          />
          <img
            className=" block sm:hidden  fixed bottom-56 left-32 "
            src="assets/image/IconMbview.svg"
            alt="icon"
          />
        </div>
      </div>
    </>
  );
};

export default LeftLogin;
