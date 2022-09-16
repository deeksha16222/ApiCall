import React, { useState, useEffect } from "react";

export default function Users() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((result) => {
        setShow(result.data);
      });
  }, []);

  return (
    <div>
      {show.map((item) => (
        <li key={item.id}>
          {item.first_name} {item.last_name} -- {item.email}
        </li>
      ))}
    </div>
  );
}
