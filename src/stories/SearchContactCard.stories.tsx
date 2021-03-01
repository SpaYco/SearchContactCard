import React from "react";
import SearchContactCard from "../components/SearchContactCard";

const data = {
  userId: 1234,
  fullName: "Gina Snelly",
  profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  trust: 75,
};

export default {
  title: "Search Contact Card",
  component: SearchContactCard,
};
export const Basic = () => <SearchContactCard data={data} />;
