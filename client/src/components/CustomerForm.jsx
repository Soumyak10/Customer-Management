import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const RequiredStar = () => {
    return <span className="text-red-700">*</span>;
};
export default function CustomerForm({ setOpen }) {
    const [formData, setFormData] = useState({});
    const genderOptions = ["Male", "Female", "Other"];
    const [gender, setGender] = useState(genderOptions[0]);

    function handleChange(e) {
        setFormData((prev) => {
            return { ...prev, [e.target.id]: e.target.value };
        });
    }

    useEffect(() => {
        setFormData((prev) => {
            return { ...prev, gender };
        });
    }, [gender]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/createCustomer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data) console.log("Customer Created");
            setOpen(false);
            setFormData({});
            location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-8 m-4">
                <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            First name <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                required
                                id="firstName"
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Last name <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                required
                                id="lastName"
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="dateOfBirth"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Date of Birth <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="date"
                                name="dateOfBirth"
                                required
                                id="dateOfBirth"
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="maritalStatus"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Marital Status <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <select
                                id="maritalStatus"
                                name="maritalStatus"
                                required
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Select Marital Status</option>
                                <option>Married</option>
                                <option>Unmarried</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="profession"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Profession <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <select
                                id="profession"
                                name="profession"
                                onChange={(e) => handleChange(e)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Select Profession</option>
                                <option>Accountant</option>
                                <option>Chef</option>
                                <option>Pilot</option>
                                <option>Graphic Designer</option>
                                <option>IT Specialist</option>
                                <option>Marketing Specialist</option>
                                <option>Nurse</option>
                                <option>Police Officer</option>
                                <option>Sales Representative</option>
                                <option>Teacher</option>
                            </select>
                        </div>
                    </div>

                    <RadioGroup
                        value={gender}
                        onChange={setGender}
                        required
                        className="sm:col-span-2"
                    >
                        <RadioGroup.Label className="block text-sm font-medium leading-6 text-gray-900">
                            Gender <RequiredStar />
                        </RadioGroup.Label>
                        <div className="grid grid-cols-3 gap-1">
                            {genderOptions.map((option) => (
                                <RadioGroup.Option
                                    key={option}
                                    value={option}
                                    className={({ active, checked }) =>
                                        classNames(
                                            checked
                                                ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                                : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                            `border rounded-md py-2 px-3 flex items-center justify-center text-sm sm:flex-1 cursor-pointer`
                                        )
                                    }
                                >
                                    <RadioGroup.Label as="p">
                                        {option}
                                    </RadioGroup.Label>
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Phone Number <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                required
                                onChange={(e) => handleChange(e)}
                                type="number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                onChange={(e) => handleChange(e)}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="nativeLanguage"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Native Language <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <select
                                id="nativeLanguage"
                                name="nativeLanguage"
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Marathi</option>
                                <option>Gujarati</option>
                                <option>Punjabi</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="fullAddress"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Full Address <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="fullAddress"
                                required
                                id="fullAddress"
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="zipCode"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            ZIP code
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="zipCode"
                                onChange={(e) => handleChange(e)}
                                id="zipCode"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            City <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                required
                                onChange={(e) => handleChange(e)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="state"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            State <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="state"
                                required
                                onChange={(e) => handleChange(e)}
                                id="state"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Country <RequiredStar />
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                onChange={(e) => handleChange(e)}
                                name="country"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>India</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Create Customer
                </button>
            </div>
        </form>
    );
}
