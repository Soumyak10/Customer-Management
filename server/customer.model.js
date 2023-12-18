import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
        dateOfBirth: {
            type: String,
        },
        maritalStatus: {
            type: String,
        },
        profession: {
            type: String,
        },
        gender: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        nativeLanguage: {
            type: String,
        },
        fullAddress: {
            type: String,
        },
        zipCode: {
            type: Number,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
