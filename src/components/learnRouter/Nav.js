import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
//
const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
];

const Nav = () => {
  return (
    <Fragment>
      <div className="flex p-5 items-center justify-center shadow-lg gap-x-5">
        {ListLink.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Nav;
