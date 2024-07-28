import React, { useState } from "react";
import Section from "../ReuseableCcomponents/Section";
import { data } from "../data.js";
import Header from "../ReuseableCcomponents/Header.jsx";
import CustomInput from "../ReuseableCcomponents/Input.jsx";

const MainSection = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    return search === "" ? item : item.first_name.toLowerCase().includes(search);
  });
console.log(search)
  return (
    <Section
      component={
        <>
          <Header name={"Dashboard"} />

          <div>
           
          <CustomInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
         className={`my-3 p-4`}
          placeholder="Enter your username"
        />


          </div>
        
        {/* <div className="overflow-x-scroll">
        <table className="min-w-full bg-white ">
  <thead className="bg-gray-800 text-white ">
    <tr>
      <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm text-center">Id</th>
      <th className="w-2/12 py-3 px-4 uppercase font-semibold text-sm text-center">FirstName</th>
      <th className="w-2/12 py-3 px-4 uppercase font-semibold text-sm text-center">LastName</th>
      <th className="w-3/12 py-3 px-4 uppercase font-semibold text-sm text-center">Email</th>
      <th className="w-4/12 py-3 px-4 uppercase font-semibold text-sm text-center">Address</th>
    </tr>
  </thead>
  <tbody className="text-gray-700">
    {filteredData.length > 0 ? (
      filteredData.map((item, id) => (
        <tr key={id} className="bg-gray-100  odd:bg-slate-200">
          <td className="w-1/12 py-3 px-4 text-center font-semibold"> {item.id}</td>
          <td className="w-2/12 py-3 px-4 text-center"> {item.first_name}</td>
          <td className="w-2/12 py-3 px-4 text-center"> {item.last_name}</td>
          <td className="w-3/12 py-3 px-4 text-center"> {item.email}</td>
          <td className="w-4/12 py-3 px-4 text-center"> {item.address}</td>
        </tr>
      ))
    ) : (
      <tr className="bg-gray-100 hover:bg-gray-200">
        <td colSpan="5" className="py-3 px-4 text-center">
          No results found
        </td>
      </tr>
    )}
  </tbody>
</table>
        </div> */}

          </>
       }
     />
   );
 };

 export default MainSection;