import React from "react";

const Sidebar = () => {
  return (
    <div className="p-3 bg-light rounded shadow-sm">
      <h5>Sidebar</h5>
      <ul className="list-unstyled">
        <li><a href="/profile/1">My Profile</a></li>
        <li><a href="/feed">Home Feed</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
