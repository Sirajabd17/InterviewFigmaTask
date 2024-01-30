// TableComponent.js
import React from "react";

const TableComponent = () => {
  const data = [
    {
      SIno: 1,
      link: "www.google.com",
      prefix: "prefixsample",
      addTag: "Select tag",
      selected: " tag 1,tag 2",
    },
    {
      SIno: 2,
      link: "www.google.com",
      prefix: "prefixsample",
      addTag: "Select tag",
      selected: " tag 1,tag 2",
    },
    {
      SIno: 3,
      link: "www.google.com",
      prefix: "prefixsample",
      addTag: "Select tag",
      selected: " tag 1,tag 2",
    },
    {
      SIno: 4,
      link: "www.google.com",
      prefix: "prefixsample",
      addTag: "Select tag",
      selected: " tag 1,tag 2",
    },

    // Add more data as needed
  ];

  return (
    <div className=" sm:ml-64 ">
      <h1 className="mb-3 text-lg font-medium"> Upload</h1>
      <table className="w-4/5  h-full overflow-hidden p-5 ">
        <thead className=" text-left px-3">
          <tr>
            <th className="py-2 px-3">SI no.</th>
            <th className="py-2 px-3">Link</th>
            <th className="py-2 px-3">Prefix</th>
            <th className="py-2 px-3">Add Tag</th>
            <th className="py-2 px-3">Selected tag</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => (
            <tr key={index} className=" rounded-3xl border-spacing-6  mb-5 ">
              <td className="py-2 px-3 rounded-2 ">{item.SIno}</td>
              <td className="py-2 px-3">{item.link}</td>
              <td className="py-2 px-3">{item.prefix}</td>
              <td className="py-2 px-3">{item.addTag}</td>
              <td className="py-2 px-3 rounded-2">{item.selected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
