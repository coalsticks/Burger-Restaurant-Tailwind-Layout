import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const navigationLinks = [
  { text: "burgers", href: "#" },
  { text: "desserts", href: "#" },
  { text: "drinks", href: "#" },
  { text: "order", href: "#" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("brugers"); // function to make links active
  return (
    <nav className="bg-gray-50 shadow-sm sm:shadow-none sm:bg-transparent flex items-center justify-between py-8 px-4 sm:py-16 sm:px-24 z-20 relative">
      {/* LOGO */}
      <div>
        <h1 className="font-bold text-red-600 text-4xl select-none">
          BurgerMania.
        </h1>
      </div>
      {/* LINKS */}
      <div className="hidden lg:block">
        <ul className="flex lg:space-x-12 xl:space-x-20">
          {navigationLinks.map(
            // for loop to give a link to each menu item
            (el) => (
              <li key={el.text}>
                {" "}
                <a
                  href={el.href}
                  onClick={() => setActiveLink(el.text)} // make each link active when clicked
                  className={`${
                    activeLink === el.text ? "text-red-700" : "text-gray-500" // if text is active, make it red, else gray
                  } cursor-pointer uppercase  font-semibold select-none`} // cursor-pointer makes the cursor the clicking hand
                >
                  {el.text}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      {/* ACTION BUTTONS */}
      <div className=" hidden lg:flex space-x-6 xl:space-x-6">
        <button className="flex bg-white p-3 rounded-xl shadow-sm">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 stroke-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>{" "}
          </span>
          Sign in
        </button>
        <button className="bg-red-500 p-3 rounded-xl shadow-xl shadow-red-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
      {/* MOBILE NAVIGATION */}
      <div className="lg:hidden flex">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-8 h-8 stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Duplicate
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Archive
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <button
                      className={`${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

// {active} : {active:boolean}
