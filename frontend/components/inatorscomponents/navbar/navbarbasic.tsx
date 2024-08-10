'use client';

import * as React from 'react';
import Link from 'next/link';
import { Flower2, Menu } from 'lucide-react';
import { Button } from '../../ui/button';

export default function Navbarbasic() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: 'Home', path: '/your-path' },
    { title: 'Blog', path: '/your-path' },
    { title: 'About Us', path: '/your-path' },
    { title: 'Contact Us', path: '/your-path' },
  ];

  return (
    <header className="p-2 shadow text-gray-800 w-full h-max">
      <div className="flex justify-between">
        <div className="flex">
          {!state ? (
            <Link
              href="/"
              aria-label="Back to homepage"
              className=" flex md:justify-center justify-start items-center"
            >
              <Flower2 />
            </Link>
          ) : null}

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? 'block' : 'hidden'
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 hover:main-color-txt text-base"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Button className="px-8 py-2 font-semibold rounded hover:main-color-bg text-gray-50">
            Log in
          </Button>
        </div>
        <button
          className="p-2 lg:hidden flex md:justify-center justify-start"
          title="menu"
          onClick={() => setState(!state)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
