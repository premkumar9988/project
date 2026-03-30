"use client";

import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const [nameOfPerson, setName] = useState("");
  const [age, setAge] = useState(25);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", age:0, email: "" });
    const [Users, SetUsers] = useState([]);

  return (
    <div className="p-4">
      <h1>State Component</h1>

      <p className="font-bold text-2xl">Count: {count}</p>
      <p className="font-bold text-2xl">Name: {nameOfPerson}</p>
      <p className="font-bold text-2xl">Age: {age}</p>
      <p className="font-bold text-2xl">Email: {user.email}</p>

      <input
        type="text"
        value={nameOfPerson}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="border-2 bg-red-200 p-2 block my-2"
      />
        <input
        type="number"
        value={age}
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
        className="border-2 bg-red-200 p-2 block my-2"
      />
         <input 
        type="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border-2 bg-red-200 p-2 block my-2"
      />

      <p className="font bold text-2xl">
        {" "}
        Is Logged In: {isLoggedIn.toString()}
      </p>
      <button
        className="border-2 bg-red-200 px-4 py-1 mr-2"
        onClick={() => setIsLoggedIn(isLoggedIn)}
      >
        {isLoggedIn ? "log out" : "log in"}
      </button>

      <p className="font bold text-2xl">
        user {user.name}, Age: {user.age}
      </p>
      <button
        className="border-2 bg-red-200 px-4 py-1 mr-2"
        onClick={() => setUser([...Users, { name: nameOfPerson, age: age ,email: user.email}])}
      >
        Add User
      </button>

      <ui>
        {Users.map((user, index) => (
          <li key={index}>
            {user.name}, Age: {user.age}, Email: {user.email}   
          </li>
        ))}
      </ui>


      <button
        className="border-2 bg-red-200 px-4 py-1 mr-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="border-2 bg-red-200 px-4 py-1"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
