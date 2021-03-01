import React from "react";
import SearchContactCard from "./SearchContactCard";
import "./App.css";

const data = {
  userId: 1234,
  fullName: "Gina Snelly",
  profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  trust: 75,
};

function App() {
  return (
    <div className="App">
      <SearchContactCard data={data} />
    </div>
  );
}

export default App;
