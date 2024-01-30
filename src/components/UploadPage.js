import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import TableComponent from "./Table";

const Uploadpage = () => {
  return (
    <>
      <div className="sm:flex">
        <HomeLeft />
        <HomeRight />
      </div>
      <TableComponent />
    </>
  );
};
export default Uploadpage;
