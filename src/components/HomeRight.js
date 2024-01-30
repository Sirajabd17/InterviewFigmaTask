import FileUploadForm from "./FileUploadForm";
const HomeRight = () => {
  return (
    <div className="sm:w-4/5 ">
      <div className=" flex justify-between pt-10">
        <h1 className="text-2xl font-semibold">Upload CSV</h1>
        <div className="flex px-5 gap-6">
          <img src="assets/image/bellicon.svg" alt="bellicon" />
          <img src="assets/image/userIcon.svg" alt="imgicon" />
        </div>
      </div>
      <div className="sm:flex justify-center mt-32">
        <FileUploadForm />
      </div>
    </div>
  );
};
export default HomeRight;
