import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
const Products = [
  {
    name: "Product",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "Usecase",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Partners",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "About us",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
];
const AvatarList = [
  { name: "Hey! kevin ", href: "#" },
  { name: "logout", href: "#", icon: ArrowLeftCircleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [userlogin, setuserlogin] = useState(true);
  return (
    <div className="bg-black">
      <header>
       
        <Popover>
          <Disclosure as="nav" className="bg-black">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-3 flex items-center md:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-7 w-7"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 relative items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center  text-white">
                        <a href="/" className="absolute left-16 sm:left-56 -bottom-3  md:relative md:left-0 md:bottom-0">
                          <h3 className="font-semibold text-xl"> Buildapp</h3>
                        </a>
                      </div>
                      <div className="hidden  ml-12 sm:ml-16 md:ml-20 lg:ml-64 sm:block">
                        
                        <Popover.Group
                          as="nav"
                          className="hidden md:space-x-3 space-x-10 md:flex md:justify-start"
                        >
                          <Popover className="relative">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={classNames(
                                    open ? "text-gray-300" : "text-white",
                                    "group inline-flex items-center   text-base font-normal  "
                                  )}
                                >
                                  <span>Products</span>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "text-gray-300" : "text-white",
                                      "ml-1 h-5 w-5 "
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                      <div className="relative grid bg-white gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                        {Products.map((item) => (
                                          <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-start rounded-lg p-3"
                                          >
                                            <div className="ml-4">
                                              <p className="text-base font-medium text-gray-900">
                                                {item.name}
                                              </p>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {item.description}
                                              </p>
                                            </div>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>

                          <Popover className="relative">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={classNames(
                                    open ? "text-gray-300" : "text-white",
                                    "group inline-flex items-center   text-base font-normal "
                                  )}
                                >
                                  <span>Use cases</span>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "text-gray-300" : "text-gray-400",
                                      "ml-1 h-5 w-5 "
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                        {Products.map((item) => (
                                          <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                          >
                                            <div className="ml-4">
                                              <p className="text-base font-medium text-gray-900">
                                                {item.name}
                                              </p>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {item.description}
                                              </p>
                                            </div>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>

                          <a
                            href="/"
                            className="text-base font-normal text-white hover:text-gray-300"
                          >
                            Partners
                          </a>
                          <a
                            href="/"
                            className="text-base font-normal text-white hover:text-gray-300"
                          >
                            About us
                          </a>
                        </Popover.Group>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {userlogin ? (
                        <>
                      <div className=" hidden md:flex">
                        
                        <a
                          href="/"
                          className="whitespace-nowrap text-base font-normal hover:text-gray-300 text-white "
                        >
                          EN
                        </a>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-300" : "text-white",
                            "ml-1 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </div>
                     <Link 
                        
                            to="/login"
                            className="ml-4  whitespace-nowrap text-base font-normal hover:text-gray-300 text-white"
                         
                            >
                              Login
                          </Link>
                          <Link
                            to="/register"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border px-5 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                          >
                            Get Started
                          </Link>
                        </>
                      ) : 
                      (
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
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
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Your Profile
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Settings
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Sign out
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        
                      )}
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {Products.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Popover>
      </header>
    </div>
  );
}
