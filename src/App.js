import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";
import Header from "./components/Header";
import AllEmployees from "./data/randomUser.json";

function App() {
  const [search, setSearch] = useState("");
  const filteredEmployees = AllEmployees.filter((item) => {
    return item.name.last.toUpperCase().includes(search.toUpperCase());
  });
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="container">
      <Header />
      <Search value={search} onSearchChange={handleSearchChange} />
      <Table employees={filteredEmployees} />
    </div>
  );
}

export default App;
