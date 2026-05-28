import React from "react";
import axios from "axios";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name);
  console.log(email);

  async function addUser() {
    let user = {
      name,
      email,
    };

    await axios
      .post("http://localhost:3000/users", user)
      .then((data) => console.log(data));

    alert("User Added!!");
  }

  return (
    <>
      <div>AddUser</div>
      <div className="flex justify-center h-screen items-center ">
        <form
          onSubmit={addUser}
          className="bg-blue-500 p-6 text-white w-[500px]"
        >
          <div>
            <label htmlFor="name">Name</label>
            <br></br>
            <input
              className="p-4 border w-full"
              type="text"
              name="name"
              id=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-6">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              className="p-4 border w-full"
              type="email"
              name="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-gray-600 w-full py-4">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;


// Query Parameters in Reactjs / APIs

// Query Parameters are values passed in the URL to send additional information to the server. They are typically used to filter, sort, or paginate data when making API requests. In React, you can use the `useLocation` hook from the `react-router-dom` library to access query parameters from the URL.

// Here's an example of how to use query parameters in a React component:

// Basic Syntax:

// https://localhost:3000/users?name=vivek


// Base URL + ? + key=value

// In this example, we have a URL with a query parameter `name` set to `vivek`. You can access this query parameter in your React component using the `useLocation` hook:

// import { useLocation } from 'react-router-dom';  

// const MyComponent = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const name = queryParams.get('name'); // This will give you the value of the 'name' query parameter  

//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//     </div>
//   );
// };

// In this example, we use the `useLocation` hook to get the current URL's search string, which contains the query parameters. We then create a `URLSearchParams` object to parse the query parameters and retrieve the value of the `name` parameter using the `get` method. Finally, we display a greeting message that includes the value of the `name` query parameter.

// /users?name=vivek
/*
/users  API endpoint
? starts query parameter
name Parameter key
vivek Parameter value
Multiple Query Parameters
*/

// Use & to seperate them.

// syntax : /users?page=1&limit=5

// examples : https//localhost:3000/users?q=vivek

// search all users related to "vivek"

// Sorting

// https//localhost:3000/users?_sort=name&_order=asc