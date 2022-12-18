import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const AdminSidebar = () => {
  const { theme, setTheme } = useTheme("");
  return (
    <div>
      <div className="w-64 mt-12" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 h-screen bg-base-200 ">
          <h2 className={`font-bold text-lg  mb-2 mt-4 text-center`}>មាតិកា</h2>
          <hr />
          <br />
          <Link
            className="space-x-4 items-center flex p-3 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700"
            href="/admin/table"
          >
            {/* <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg> */}
            <img width={35} src="/images/web-content.png" />
            <p>មាតិកា ទាំងអស់</p>
          </Link>

          <Link
            className="space-x-4 items-center flex p-3 w-full text-base font-normal  rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700"
            href="/admin/add"
          >
            {/* <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              ></path>
            </svg> */}
            <img width={35} src="/images/copywriting.png" />
            <p>បន្ថែម មាតិកា</p>
          </Link>
          <div className="flex space-x-1 justify-center items-center">
            {/* <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg> */}
            <h2 className={`font-bold text-lg  mb-2 mt-4`}>អ្នកគ្រប់គ្រង</h2>
          </div>
          <hr />
          <br />
          <Link
            className="space-x-4 items-center flex p-3 w-full text-base font-normal  rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700"
            href="/admin/admins"
          >
            {/* <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg> */}
            <img width={32} src="/images/teamwork.png" />
            <p>អ្នកគ្រប់គ្រង ទាំងអស់</p>
          </Link>

          <Link
            className="space-x-4 items-center flex p-3 w-full text-base font-normal  rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700"
            href="/admin/add-admin"
          >
            {/* <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              ></path>
            </svg> */}
            <img width={32} src="/images/add-user.png" />
            <p>បន្ថែម អ្នកគ្រប់គ្រង</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
