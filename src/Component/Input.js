import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const Input = ({ searchClickListener }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const clickListener = () => {
    searchClickListener(searchKeyword);
    setSearchKeyword('');
  };

  return (
    <div className="w-full flex justify-end">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="w-5/6 flex h-fit">
        <input
          id="search"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          name="search"
          className="block w-full rounded-md border-[0.5px] border-gray-900 bg-black py-2 text-sm placeholder-gray-500 focus:border-gra focus:text-gray-300 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 sm:text-sm"
          placeholder="Search"
          type="search"
        />
        <div
          onClick={clickListener}
          className="cursor-pointer w-14 bg-[#313131] flex items-center justify-center"
        >
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
