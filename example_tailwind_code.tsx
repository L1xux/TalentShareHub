import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="grid md:grid-cols-3 text-black font-dongle 3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a
                href="/"
                className="hover:text-blue-700 text-h text-blue-400 sm:hover:text-red-700 sm:text-red-400"
              >
                교실
              </a>
            </h1>
          </div>
          <ul className="text-sm mt-6">
            <li className="text-gray-700 font-bold">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="py-1">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className="py-1">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="md:col-span-2 px-16 py-6 bg-gray-100">
        <div className="flex justify-center md:justify-end ">
          <a
            href="#"
            className="btn text-blue-500 mr-1 border-blue-500 md:border-2 hover:bg-blue-500 hover:text-white transition ease-in duration-500"
          >
            {"Log in"}
          </a>
          <a
            href="#"
            className="btn text-blue-500 border-blue-500 md:border-2 hover:bg-blue-500 hover:text-white  transition ease-in duration-500"
          >
            {"Sign up"}
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold font">Recipes</h2>
          <h3 className="text-2xl">For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div>
            <div className="mt-8 grid lg:grid-cols-3 gap-5">
              <div className="card hover:shadow-lg">
                <Image
                  className="object-contain"
                  src="/img/buddy.svg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div className="flex flex-col p-3">
                  <span className="font-bold">5 Bean</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {"25 mins"}
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <Image
                  className="object-contain"
                  src="/img/buddy.svg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div className="flex flex-col p-3">
                  <span className="font-bold">Test 2</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Me
                  </span>
                </div>
                <div className="badge">{"25 mins"}</div>
              </div>
              <div className="card hover:shadow-lg">
                <Image
                  className="object-contain"
                  src="/img/buddy.svg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div className="flex flex-col p-3">
                  <span className="font-bold">Test 3</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by You
                  </span>
                </div>
                <div className="badge">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {"25 mins"}
                </div>
              </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>

            <div className="flex justify-center">
              <div className="btn w-max px-2 flex justify-center items-center bg-cyan-50 text-black hover:shadow-inner hover:scale-125 transition ease-in-out duration-200">
                Load more
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
