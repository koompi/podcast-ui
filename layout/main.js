import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

// import React, { useState } from "react";
// import { useRouter } from "next/router";

// import Link from "next/link";
// import Image from "next/image";
// const MainLayout = ({ children }) => {
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }
//   const router = useRouter();
//   const [open, setOpen] = useState(true);
//   const [newsBar, setNewsBar] = useState(false);
//   const [blogsBar, setBlogsBar] = useState(false);

//   return (
//     <div className="flex">
//       <div
//         className={` ${
//           open ? "w-72" : "w-20 "
//         } bg-gray-800 min-h-screen p-5  pt-8 relative duration-300`}
//       >
//         <img
//           src="/images/control.png"
//           className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//            border-2 rounded-full  ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
//           <img
//             // src="https://www.koompi.com/images/Koompi-white.png"
//             src="/images/Koompi-WiFi-Icon.png"
//             className={`cursor-pointer duration-500 w-10 ${
//               open && "rotate-[360deg]"
//             }`}
//           />
//           <h1
//             className={`text-white origin-left font-medium text-xl duration-200 ${
//               !open && "scale-0"
//             }`}
//           >
//             WE SHARE
//           </h1>
//         </div>

//         <ul className="pt-6">
//           <li>
//             <Link
//               href="/"
//               className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
//              ${
//                router.pathname == "/"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//             >
//               <img src="/images/Chart_fill.png" />
//               <span className={`${!open && "hidden"} origin-left duration-200`}>
//                 Dashboard
//               </span>
//             </Link>
//           </li>
//           <li className="mt-9">
//             <span
//               onClick={() => setNewsBar(!newsBar)}
//               className="flex cursor-pointer mt-9 items-center p-2 w-full text-sm text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               <img src="/images/Chart.png" />

//               <span
//                 className={`${
//                   !open && "hidden"
//                 } flex-1 ml-3 text-left whitespace-nowrap origin-left duration-200`}
//               >
//                 News
//               </span>
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </span>
//             <ul
//               id="dropdown-example"
//               className={`${
//                 !newsBar && "hidden"
//               }  space-y-2 relative duration-300 pt-3`}
//             >
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  pl-11
//              ${
//                router.pathname == "/news"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                 >
//                   {" "}
//                   News
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 pl-11
//              ${
//                router.pathname == "/news/addnews"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                 >
//                   Add News
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  pl-11
//              ${
//                router.pathname == "/news/updatenews"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                 >
//                   Update News
//                 </a>
//               </li>
//             </ul>
//           </li>
//           {/* ====================blogs==================== */}
//           <li className="mt-2">
//             <span
//               onClick={() => setBlogsBar(!blogsBar)}
//               className="flex cursor-pointer items-center p-2 w-full text-sm text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               <img src="/images/Chat.png" />

//               <span
//                 className={`${
//                   !open && "hidden"
//                 } flex-1 ml-3 text-left whitespace-nowrap origin-left duration-200`}
//               >
//                 Blogs
//               </span>
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </span>
//             <ul
//               id="dropdown-example"
//               className={`${
//                 !blogsBar && "hidden"
//               }  space-y-2 relative duration-300 pt-3`}
//             >
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  pl-11
//              ${
//                router.pathname == "/blogs"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                   // className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                 >
//                   Blogs
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 pl-11
//              ${
//                router.pathname == "/blogs/addblogs"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                 >
//                   Add Blogs
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  pl-11
//              ${
//                router.pathname == "/blogs/updateblogs"
//                  ? "bg-gray-900 text-white"
//                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
//              }  `}
//                 >
//                   Update Blogs
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//       <div className="h-screen flex-1 p-7">{children}</div>
//     </div>
//   );
// };
// export default MainLayout;
