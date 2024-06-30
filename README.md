#### 1. Setup:

○ Initialize project.
○ Added necessary dependencies:

```js
 "dependencies": {
    "@reduxjs/toolkit": "^2.2.6",
    "antd": "^5.18.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.24.0"
  },
```

#### 2. Product List View:

○ API ENDPOINT: [www.dummyjson.com](https://dummyjson.com/products), methods: GET
○ Use RTK Query to define endpoints for fetching projects.
○ Display the list of products in a table using Ant Design's Table component also
add your style to make the list beautiful.
○ Implement pagination pass limit and skip params to limit and skip the results for
pagination, and use limit=0 to get all items.
○ Include a button to navigate to the Project Detail View for each product.

#### 3. Product Detail View:

○ Display the details of the selected product, using this API ENDPOINT:
[www.dummyjson.com](https://dummyjson.com/products/:id), methods: GET
○ Make Details page design on your own with CSS, and Ant Design.
○ Fetch the project details using RTK Query.

#### 4. Edit Product:

○ Create a form to update the product using Ant Design's Form component based
on product details.
○ Add necessary fields for API RESPONSE, using this API ENDPOINT:
[www.dummyjson.com](https://dummyjson.com/products/:id), (GET)
○ Implement functions to add and remove reviews(you get the reviews array
from the API response)dynamically using <Form.List> from Ant Design.
○ Make a Select Component here for Category Select and you get all categories
from this API ENDPOINT: https://dummyjson.com/products/categories (GET)
○ After completing the editing submit the edited product and you need to
console.log the final output, and a PATCH request to this API ENDPOINT:
https://dummyjson.com/products/:id (PATCH)

#### 5. Styling and Layout:

○ Use Ant Design's layout components to create a user-friendly and responsive
interface.
○ Apply custom styling as required.
○ Make Sure to organize the code and make sure proper code splitting
○ Must use Ant Design Form, Input, Select
