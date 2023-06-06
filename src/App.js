import "./App.css";

import React, { useState } from "react";

const App = (props) => {
  const people = [
    { name: "Ajay", number: "05841756312", id: 1 },
    { name: "Dhoom", number: "998547521", id: 2 },
    { name: "Babulal", number: "8954715245", id: 3 },
    { name: "Mukesh", number: "9785479312", id: 4 },
    { name: "nandu", number: "05841756312", id: 5 },
    { name: "ajeetpal", number: "7894157853", id: 6 },
    { name: "jay", number: "92476214541", id: 7 },
    { name: "xz", number: "0000", id: 9 },
  ];

  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
      <h2>Phone book</h2>
      Filter persons:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
      <h2>Numbers</h2>
      {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.name} 
          </p>
        );
      })}
    </>
  );
};
export default App;
