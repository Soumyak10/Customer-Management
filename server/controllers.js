import Customer from "./customer.model.js";

export const createCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer({ ...req.body });
        newCustomer.save();

        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getCustomerList = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 7;
        const page = parseInt(req.query.page) || 1;
        const sort = req.query.sort || "firstName";
        const order = req.query.order || "asc";
        const searchTerm = req.query.searchTerm || "";

        let query = {
            $or: [
                { firstName: { $regex: searchTerm, $options: "i" } },
                { lastName: { $regex: searchTerm, $options: "i" } },
            ],
        };

        console.log(query);

        const startIndex = (page - 1) * limit;

        const totalCount = await Customer.countDocuments(query);

        const customers = await Customer.find(query)
            .sort({ [sort]: order })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json({ customers, totalCount });
    } catch (error) {
        res.status(500).json(error);
    }
};
