import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
const MobileSidebar = ({ onClick }) => {
  const [state, setState] = useState({ isOpen: false, postId: null });
  const [item, setItem] = useState([]);
  const { theme, setTheme } = useTheme("");

  const openModal = (_key) => {
    setState({ isOpen: !state.isOpen, postId: _key });
  };
  const closeModal = () => {
    setState({ isOpen: !state.isOpen });
    toggle === true;
  };

  useEffect(() => {
    fetch(`https://unicefbackend.koompi.app/public/api/sidebar`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  return (
    <div>
      <div className="w-full fixed overflow-y-auto h-screen py-4 px-3 bg-base-200 -mb-14 z-1 mt-3">
        {item.map((res, index) => {
          return (
            <div key={index}>
              <ul className="overflow-y-auto">
                <li>
                  <button
                    onClick={() => openModal(res.category_id)}
                    type="button"
                    className="flex items-center p-3 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-base-100"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <img
                      width={30}
                      height={30}
                      src={`https://unicefbackend.koompi.app/${res.icon}`}
                    />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                      <p
                        className={
                          theme === "default" ? "text-black" : "text-white"
                        }
                      >
                        {res.category_display_name}
                      </p>
                    </span>
                    <svg
                      // className="w-6 h-6"
                      className={
                        theme === "default"
                          ? "text-black w-6 h-6"
                          : "text-white w-6 h-6"
                      }
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example"
                    // className="space-y-2"
                    className={state.isOpen === false ? " hidden" : " block"}
                  >
                    <li>
                      <Link
                        href={`/grade/${res.category_id}`}
                        onClick={closeModal}
                        className={
                          state.postId === res.category_id
                            ? "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700"
                            : "hidden"
                        }
                      >
                        <p
                          className={
                            theme === "default" ? "text-black" : "text-white"
                          }
                        >
                          ទាំងអស់
                        </p>
                      </Link>
                      {res.subcategory.map((ress, index) => {
                        return (
                          <div key={index}>
                            <Link
                              href={`/grade/${res.category_id}/${ress.subcategory_id}`}
                              onClick={closeModal}
                              className={
                                state.postId === res.category_id
                                  ? " flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-base-100 dark:text-white dark:hover:bg-gray-700 "
                                  : "hidden"
                              }
                            >
                              <p
                                className={
                                  theme === "default"
                                    ? "text-black"
                                    : "text-white"
                                }
                              >
                                {ress.subcategory_display_name}
                              </p>
                            </Link>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSidebar;
