// import React, { useRef } from "react";
import React, { useState } from "react";
const FileUploadForm = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    console.log("Dropped Files:", droppedFiles);

    // Handle the dropped files as needed
  };

  return (
    <div
      className={`p-6 w-96  border-2  border-dashed ${
        isDragging ? "border-blue-500" : "border-gray-300"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img
        src="assets/image/Excelicon.svg"
        className="m-auto"
        alt="excel icon"
      />
      <h1 className="text-base text-center my-4">
        Drop your Excel sheet here or{" "}
        <span
          className="text-blue-600"
          onClick={() => document.querySelector("input").click()}
        >
          Browse
        </span>
      </h1>
      <input
        type="file"
        className="hidden"
        onChange={(e) => console.log("Selected Files:", e.target.files)}
      />
      <button className="bg-blue-500 mt-20 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload
      </button>
    </div>
  );
};

export default FileUploadForm;

// const fileInputRef = useRef(null);

//   const handleUploadBtnClick = () => {
//     // Trigger click on the hidden file input
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (event) => {
//     // Handle the selected file
//     const selectedFile = event.target.files[0];
//     console.log("Selected File:", selectedFile);
//   };

//   return (
//     <div className="w-96 p-4">
//       <div className="flex gap-2 mb-20">
//         <h1>Drop your excel sheet here or</h1>
//         <button onClick={handleUploadBtnClick} className="text-blue-500">
//           Browse
//         </button>
//       </div>

//       <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Upload
//       </button>
//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />
//     </div>
//   );
// };
