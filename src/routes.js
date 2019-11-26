import Dashboard from "views/Dashboard/";
import Business from "views/Business/";
import Projects from "views/Projects/";
import RMPUsers from "views/RMPUsers/";
import Suppliers from "views/Suppliers/";
import Contractors from "views/Contractors/";
import Equipment from "views/Equipment/";
import ManPower from "views/ManPower/";
import Subscriptions from "views/Subscriptions/";
import { FaHome, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaTruckMonster, FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import React from 'react';

const dashboardRoutes = [{
    path: "/dashboard",
    name: "Dashboard",
    // icon: "pe-7s-home",
    icon: <FaHome />,
    component: Dashboard,
    layout: "/nucleus",
    sideveiw: "normal"
},
{
    path: "/business/new",
    name: "Business",
    // icon: "pe-7s-users",
    icon: <AiOutlineDollar />,
    component: Business,
    layout: "/nucleus"
},
{
    path: "/projects",
    name: "Projects",
    // icon: "pe-7s-global",
    icon: <FiBriefcase />,
    component: Projects,
    layout: "/nucleus"
},
{
    path: "/rmp-users",
    name: "Rmp Users",
    // icon: "pe-7s-diamond",
    icon: <AiOutlineUser />,
    component: RMPUsers,
    layout: "/nucleus"
},
{
    path: "/suppliers",
    name: "Suppliers",
    // icon: "pe-7s-users",
    icon: <FaRegArrowAltCircleRight />,
    component: Suppliers,
    layout: "/nucleus"
},
{
    path: "/contractors",
    name: "Contractors",
    // icon: "pe-7s-users",
    icon: <FaRegArrowAltCircleLeft />,
    component: Contractors,
    layout: "/nucleus"
},
{
    path: "/equipment",
    name: "Equipment",
    // icon: "pe-7s-car",
    icon: <FaTruckMonster />,
    component: Equipment,
    layout: "/nucleus"
},
{
    path: "/man-power",
    name: "Man Power",
    // icon: "pe-7s-headphones",
    icon: <FaRegUserCircle />,
    component: ManPower,
    layout: "/nucleus"
},
{
    path: "/subscriptions",
    name: "Subscriptions",
    // icon: "pe-7s-graph1",
    icon: <MdExitToApp />,
    component: Subscriptions,
    layout: "/nucleus"
}
];

export default dashboardRoutes;