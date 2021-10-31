import { useState } from "react";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const dropDownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-2/12 flex items-center text-lg">
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl text-lg">
              E
            </div>
            Epictetus
          </div>
          <div className="w-7/12">
            <ul className="flex space-x-12 items-center">
              <li>
                <a href="#" className="hover:underline">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Front-end
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Back-end
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropDown(!dropDown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {dropDown && (
                  <ul className="mt-4 absolute w-[200px] bg-gray-800 rounded shadow-2xl">
                    {dropDownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <a
                          href={href}
                          className="flex px-6 py-3 hover:bg-gray-600/60"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-3/12">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full bg-gray-700 px-6 py-3 pl-12 w-full bg-search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
