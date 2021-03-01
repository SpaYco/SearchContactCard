import React from "react";
import UserAvatar from "../components/UserAvatar";

export default {
  title: "User Avatar",
  component: UserAvatar,
};
export const Basic = () => (
  <UserAvatar
    profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg"
    trust={75}
  />
);
