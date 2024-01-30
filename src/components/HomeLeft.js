import { NAVBAR } from "../utils/Constants";
const HomeLeft = () => {
  return (
    <div className="sm:w-1/5sm:h-screen  pt-10 px-4">
      <nav>
        <div className="flex justify-center gap-5  ">
          <img src="assets/image/LogoBase.svg" alt="Homelogo" />
          <span className="text-center text-2xl font-semibold">BASE</span>
        </div>
        <div className=" w-60  mt-14">
          {NAVBAR.map((data, id) => {
            return (
              <div className=" flex px-7 gap-3 mb-8 " key={id}>
                <img src={`assets/image/${data.icon}`} alt="icon" />

                <span className=" text-base font-semibold font-nunito text-navtext">
                  {data.Name}
                </span>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
export default HomeLeft;
