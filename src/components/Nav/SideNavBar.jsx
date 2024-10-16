// import React, { useState } from "react";
// import NavDropDown from "./NavDropDown";
// import { Link } from "react-router-dom";

// const SideNavBar = () => {
//   const [first, setfirst] = useState(false)
//   return (
//     <div className="z-50 h-[200px] translate-x-[-10px] inset-x-2.5  flex flex-col p-1 absolute top-full mt-1 bg-bg-grey shadow-md w-44">
//       <NavDropDown />

//       <Link
//         to={"/all_products"}
//         className="flex w-full flex-col border-2 p-1  bg-white h-full justify-evenly"
//       >
//         {/* <span className="text-sm cursor-pointer hover:bg-bg-grey p-1 rounded-xl">
//           On sale
//         </span> */}
//         <span className={`container ${first && 'bg-bg-grey'}`} onClick={()=>setfirst((prev)=>!prev)}>On Sale</span>
//         <span className={`container ${first && 'bg-bg-grey'}`} onClick={()=>setfirst((prev)=>!prev)}>
//           New arrivals
//         </span>
//         <span className={`container ${first && 'bg-bg-grey'}`} onClick={()=>setfirst((prev)=>!prev)}>
//           Brands
//         </span>
//       </Link>
//     </div>
//   );
// };

// export default SideNavBar;
import React, { useState } from "react";
import NavDropDown from "./NavDropDown";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const tags = ["On Sale", "New Arrivals", "Brands"];

  return (
    <div className="z-50 h-[200px] translate-x-[-10px] inset-x-2.5 flex flex-col p-1 absolute top-full mt-1 bg-bg-grey shadow-md w-44">
      <NavDropDown />

      <Link
        to={"/all_products"}
        className="flex w-full flex-col border-2 p-1 bg-white h-full justify-evenly"
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`container cursor-pointer p-1 rounded-sm ${
              selectedTag === index ? "bg-bg-grey" : ""
            }`}
            onClick={() => setSelectedTag(index)}
          >
            {tag}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default SideNavBar;
