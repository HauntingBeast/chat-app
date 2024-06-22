import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-3xl border-none input input-bordered h-10  bg-black bg-opacity-20 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      />
      <button
        type="submit"
        className="btn btn-circle bg-black bg-opacity-20 text-white flex items-center justify-center "
      >
        <FaSearch
          className="w-6 h-6 outline-none"
          style={{ marginTop: "1px" }}
        />
      </button>
    </form>
  );
};

export default SearchInput;
