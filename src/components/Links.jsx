import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "ðAll" },
  { url: "/image", text: "ð¼ Images" },
  { url: "/videos", text: "ðº Videos" },
  { url: "/news", text: "ð° News" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center m-2">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          key={text}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : "m-2 mb-0"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
