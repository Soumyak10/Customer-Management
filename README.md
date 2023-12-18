## Deployed Link

https://customer-management-system-yjjo.onrender.com/

# Customer Management System

This project implements a Customer Management System with the following features:

## API Endpoints

1. **createCustomer:**

    - Saves customer details in the database.

2. **getCustomerList:**
    - Retrieves customer list from the database based on specified criteria (pagination, search, and sorting).

## Implemented Features in UI

### 1. Create Customer

-   The user interface includes input fields for customer details.
-   On clicking the "Create Customer" button, an API call is made to create a customer in the database.

### 2. Pagination

-   Implemented pagination with a page size of 7.
-   Multiple API calls are made to fetch customers in batches (e.g., 1-7, 8-14, 15-20).
-   UI includes controls for navigating through pages.

### 3. Search By Name

-   UI includes a search input field.
-   On every keypress, an API call is made to fetch customers whose names contain the search term.
-   Clear button provided to reset the search term.
-   Pagination is integrated with search results.

### 4. Sorting by Name and Creation Date

-   UI includes arrow icons beside name and creation date column headers.
-   On clicking the icons, data is fetched from the database in ascending order.
-   Subsequent clicks toggle between ascending and descending order.
-   Pagination is considered while fetching and displaying sorted data.

## Getting Started

To get started with the project, follow these steps to run the project locally:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Soumyak10/customer-management.git
    cd customer-management
    ```

2. **Installation:**

Use this command to install all the required dependencies in both frontend and backend (i.e. inside client & inside server).

```bash
npm i && cd client && npm i
```

3. **Run:**

Use this command to run the server

```bash
npm run dev
```

Use this command to run the frontend (react app) in seprate terminal

```bash
cd client && npm run dev
```
