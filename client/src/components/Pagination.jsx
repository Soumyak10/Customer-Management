import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
    totalCount,
    currentPage,
    setCurrentPage,
}) {
    const pageSize = 7;
    const totalPages = Math.ceil(totalCount / pageSize);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const getPageNumbers = () => {
        const pageNumbers = [];
        const pageRange = 2;
        for (
            let i = Math.max(1, currentPage - pageRange);
            i <= Math.min(totalPages, currentPage + pageRange);
            i++
        ) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        totalCount > 0 && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <span
                        onClick={handlePreviousPage}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </span>
                    <span
                        onClick={handleNextPage}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </span>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing{" "}
                            <span className="font-medium">
                                {1 + (currentPage - 1) * 7}
                            </span>{" "}
                            to{" "}
                            <span className="font-medium">
                                {Math.min(currentPage * 7, totalCount)}
                            </span>{" "}
                            of <span className="font-medium">{totalCount}</span>{" "}
                            results
                        </p>
                    </div>
                    <div>
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                        >
                            <span
                                onClick={handlePreviousPage}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>
                            {getPageNumbers().map((number) => (
                                <span
                                    key={number}
                                    className={`${
                                        number === currentPage
                                            ? "z-10 bg-indigo-600 text-white focus:outline focus:ring focus:border-indigo-300"
                                            : "text-gray-900 hover:bg-gray-50 focus:ring"
                                    } inline-flex items-center px-4 py-2 text-sm font-semibold cursor-pointer`}
                                    onClick={() => setCurrentPage(number)}
                                >
                                    {number}
                                </span>
                            ))}
                            <span
                                onClick={handleNextPage}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
        )
    );
}
