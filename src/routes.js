import React from 'react';
import { FaHome, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaTruckMonster, FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import Dashboard from "views/Dashboard/";
import Business from "views/Business/";
import Projects from "views/Projects/";
import RMPUsers from "views/RMPUsers/";
import Suppliers from "views/Suppliers/";
import Contractors from "views/Contractors/";
import Equipment from "views/Equipment/";
import ManPower from "views/ManPower/";
import Subscriptions from "views/Subscriptions/";

const dashboardRoutes = [
    // {
    //     path: "/dashboard",
    //     name: "Dashboard",
    //     icon: <FaHome />,
    //     component: Dashboard,
    //     layout: "/nucleus"
    // },
    {
        path: "/business/leads/new",
        name: "Business",
        icon: < AiOutlineDollar / > ,
        component: Business,
        layout: "/nucleus",
        linkStatus: false
    },
    {
        path: "/projects",
        name: "Projects",
        icon: < FiBriefcase / > ,
        component: Projects,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/rmp-users",
        name: "RMP Users",
        icon: < AiOutlineUser / > ,
        component: RMPUsers,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/suppliers",
        name: "Suppliers",
        icon: < FaRegArrowAltCircleRight / > ,
        component: Suppliers,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/contractors",
        name: "Contractors",
        icon: < FaRegArrowAltCircleLeft / > ,
        component: Contractors,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/equipment",
        name: "Equipment",
        icon: < FaTruckMonster / > ,
        component: Equipment,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/man-power",
        name: "Man Power",
        icon: < FaRegUserCircle / > ,
        component: ManPower,
        layout: "/nucleus",
        linkStatus: true
    },
    {
        path: "/subscriptions",
        name: "Subscriptions",
        icon: < MdExitToApp / > ,
        component: Subscriptions,
        layout: "/nucleus",
        linkStatus: true
    }
];

export default dashboardRoutes;