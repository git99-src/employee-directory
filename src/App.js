import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";


const allEmployees = [
  {
    id: 1,
    picture: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    first: "Kim",
    last: "Bennett",
    phone: "06-5648-3807",
    email:"kim.bennett@example.com",
    dob: "1987-10-06T04:18:30.708Z",
  },
  {
    id: 1,
    picture: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    first: "Gloria",
    last: "Dias",
    phone: "(78) 2115-1140",
    email:"GDias@example.com",
    dob: "1980-20-01T05:18:30.708Z",
  },
  {
    id: 1,
    picture: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    first: "John",
    last: "Doe",
    phone: "855-955-5555",
    email:"John.Doe@example.com",
    dob: "19827-02-05T04:18:30.708Z",
  },
  {
    id: 1,
    picture: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    first: "Max",
    last: "Smith",
    phone: "06-5648-1144",
    email:"Max.Smith@example.com",
    dob: "1984-09-09T04:18:30.708Z",
  },
  {
    id: 1,
    picture: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    first: "Jaime",
    last: "Test",
    phone: "051-54545-01",
    email:"J.Test@example.com",
    dob: "2000-12-10T04:18:30.708Z",
  },
];
function App() {
  const [search, setSearch] = useState("");
  const filteredEmployees = allEmployees.filter((item) => {
    return item.first.toUpperCase().includes(search.toUpperCase());
  });
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="container">
      <Search value={search} onSearchChange={handleSearchChange} />
      <Table employees={filteredEmployees} />
    </div>
  );
}

export default App;
