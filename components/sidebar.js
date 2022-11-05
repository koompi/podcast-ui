import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Sidebar = () => {
  const [state, setState] = useState({ isOpen: false, postId: null });
  const [item, setItem] = useState([]);

  const openModal = (_key) => {
    setState({ isOpen: !state.isOpen, postId: _key });
  };
  useEffect(() => {
    axios.get("https://unicef.koompi.app/public/api/sidebar").then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <div>
      <div className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 h-screen bg-gray-50 rounded ">
          {item.map((res, index) => {
            return (
              <div key={index}>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => openModal(res.category_id)}
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">
                        {res.category_display_name}
                      </span>
                      <svg
                        className="w-6 h-6"
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
                      className={state.isOpen ? " hidden" : " block"}
                    >
                      <li>
                        <Link
                          href={`/grade/${res.category_id}`}
                          className={
                            state.postId === res.category_id
                              ? "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              : "hidden"
                          }
                        >
                          ទាំងអស់
                        </Link>
                        {res.subcategory.map((ress, index) => {
                          return (
                            <div key={index}>
                              <Link
                                href={`/grade/${res.category_id}/${ress.subcategory_id}`}
                                className={
                                  state.postId === res.category_id
                                    ? "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    : "hidden"
                                }
                              >
                                {ress.subcategory_display_name}
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
    </div>
  );
};

export default Sidebar;
