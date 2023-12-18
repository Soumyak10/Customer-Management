import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

function FilterBar({ searchTerm, setSearchTerm }) {
    const handleSearch = async (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className="flex m-2 sm:mx-0">
            <div className="max-w-lg relative w-full lg:max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    id="search"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                    placeholder="Search"
                    autoComplete="off"
                    type="text"
                />
                <div className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer">
                    <XMarkIcon
                        onClick={() => setSearchTerm("")}
                        className={`h-5 w-5 text-gray-400 hover:text-indigo-500 ${
                            searchTerm ? "block" : "hidden"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
