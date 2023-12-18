import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";

const App = () => {
    const [customers, setCustomers] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState({ field: "firstName", order: "asc" });
    const [loading, setLoading] = useState(true);

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `/api/getCustomerList?searchTerm=${searchTerm}&page=${currentPage}&sort=${sort.field}&order=${sort.order}`
            );
            const data = await res.json();

            setCustomers(data.customers);
            setTotalCount(data.totalCount);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSort = async (field) => {
        if (sort.order === "asc") setSort({ field, order: "desc" });
        else setSort({ field, order: "asc" });
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchCustomers();
    }, [currentPage, sort, searchTerm]);

    return (
        <div className="max-w-xl lg:max-w-4xl mx-auto p-2 sm:p-4">
            <Header />
            <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Table
                customers={customers}
                loading={loading}
                handleSort={handleSort}
                sort={sort}
            />
            <Pagination
                totalCount={totalCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default App;
