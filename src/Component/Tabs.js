/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// const tabs = [
//   { name: 'My Account', href: '#', current: false },
//   { name: 'Company', href: '#', current: false },
//   { name: 'Team Members', href: '#', current: true },
//   { name: 'Billing', href: '#', current: false },
//   { name: 'My Account', href: '#', current: false },
//   { name: 'Company', href: '#', current: false },
//   { name: 'My Account', href: '#', current: false },
//   { name: 'Company', href: '#', current: false },
//   { name: 'My Account', href: '#', current: false },
//   { name: 'Company', href: '#', current: false },
// ];

import { useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ tabs, tabsClickListener, currentTab }) {
  return (
    <div>
      {/* <div className="sm:hidden"> */}
      {/* <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label> */}
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      {/* <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select> */}
      {/* </div> */}
      <div className="hidden sm:block py-3 w-full fixed z-10 px-8 bg-[#202020] border-y border-gray-600">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={'eroer'}
              onClick={(e) => {
                e.preventDefault();
                tabsClickListener(i);
              }}
              className={classNames(
                currentTab === i
                  ? 'bg-gray-200 text-gray-800'
                  : 'text-gray-200 bg-[#313131] hover:bg-[#626262]',
                'px-3 flex items-center font-medium text-sm rounded-3xl'
              )}
              // aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
