import React, { useState } from "react";
import CustomerModal from "./CustomerModal";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-wrap justify-between m-2">
            <h3 className="text-md sm:text-xl lg:text-4xl mr-4 font-semibold text-black">
                List of Customers
            </h3>

            <button
                onClick={() => setOpen(true)}
                className="rounded-lg sm:rounded-3xl px-2 sm:px-4 lg:px-8 sm:py-1 bg-sky-600 text-white font-semibold"
            >
                Create Customer
            </button>
            <CustomerModal open={open} setOpen={setOpen} />
        </div>
    );
}

export default Header;
