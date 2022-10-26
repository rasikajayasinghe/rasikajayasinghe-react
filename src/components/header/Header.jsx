import React from "react";
import { NavLink } from "react-router-dom";
import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilSuitcaseAlt } from "@iconscout/react-unicons";
import { UilDocumentLayoutCenter } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
/* import { UilBloggerAlt } from "@iconscout/react-unicons"; */
import "./header.css";

const NavMenuLinks = [
  {
    id: "1",
    icon: <UilEstate size="28" className="nav__icon" />,
    title: "Home",
    path: "/",
  },
  {
    id: "2",
    icon: <UilUser size="28" className="nav__icon" />,
    title: "About",
    path: "/about-me",
  },
  {
    id: "3",
    icon: <UilFileAlt size="28" className="nav__icon" />,
    title: "Skills",
    path: "/skills",
  },
  {
    id: "4",
    icon: <UilSuitcaseAlt size="28" className="nav__icon" />,
    title: "Services",
    path: "/services",
  },
  {
    id: "5",
    icon: <UilDocumentLayoutCenter size="28" className="nav__icon" />,
    title: "Portfolio",
    path: "/portfolio",
  },
  /*  {
    id: "6",
    icon: <UilBloggerAlt size="28" className="nav__icon" />,
    title: "Blog",
    path: "/blog",
  }, */
  {
    id: "7",
    icon: <UilEnvelopeAlt size="28" className="nav__icon" />,
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Rasika Jayasinghe
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            {NavMenuLinks.map((menuItem, index) => (
              <li className="nav__item" key={menuItem.id}>
                <NavLink
                  to={menuItem.path}
                  className="nav__link"
                  title={menuItem.title}
                  end
                >
                  {menuItem.icon}
                  <span className="item__name">{menuItem.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
