import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Table({ customers, handleSort, sort, loading }) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        onClick={() => handleSort("firstName")}
                                        className="px-6 py-1 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        <div className="flex">
                                            Name
                                            <span>
                                                {sort.field === "firstName" &&
                                                    (sort.order === "asc" ? (
                                                        <ChevronUpIcon className="w-4 h-4" />
                                                    ) : (
                                                        <ChevronDownIcon className="w-4 h-4" />
                                                    ))}
                                            </span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Phone No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        onClick={() => handleSort("createdAt")}
                                        className="px-6 py-1 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        <div className="flex">
                                            Creation Date
                                            <span>
                                                {sort.field === "createdAt" &&
                                                    (sort.order === "asc" ? (
                                                        <ChevronUpIcon className="w-4 h-4" />
                                                    ) : (
                                                        <ChevronDownIcon className="w-4 h-4" />
                                                    ))}
                                            </span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative px-6 py-3"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="my-2 text-center"
                                        >
                                            Loading...
                                        </td>
                                    </tr>
                                ) : customers.length ? (
                                    customers.map((customer, custIdx) => (
                                        <tr
                                            key={customer._id}
                                            className={
                                                custIdx % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-100"
                                            }
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {`${customer.firstName} ${customer.lastName}`}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {customer.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {customer.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(
                                                    customer.createdAt
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a
                                                    href="#"
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="py-2 text-center"
                                        >
                                            No Customer Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
