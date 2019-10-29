import Dashboard from "views/Dashboard/";
import Business from "views/Business/";
import Projects from "views/Projects/";
import RMPUsers from "views/RMPUsers/";
import Suppliers from "views/Suppliers/";
import Contractors from "views/Contractors/";
import Equipment from "views/Equipment/";
import ManPower from "views/ManPower/";
import Subscriptions from "views/Subscriptions/";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/nucleus"
  },
  
  {
    path: "/business/all",
    name: "Business",
    icon: "pe-7s-rocket",
    component: Business,
    layout: "/nucleus"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "pe-7s-global",
    component: Projects,
    layout: "/nucleus"
  },
  {
    path: "/rmp-users",
    name: "RMP Users",
    icon: "pe-7s-diamond",
    component: RMPUsers,
    layout: "/nucleus"
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    icon: "pe-7s-users",
    component: Suppliers,
    layout: "/nucleus"
  },
  {
    path: "/contractors",
    name: "Contractors",
    icon: "pe-7s-users",
    component: Contractors,
    layout: "/nucleus"
  },
  {
    path: "/equipment",
    name: "Equipment",
    icon: "pe-7s-car",
    component: Equipment,
    layout: "/nucleus"
  },
  {
    path: "/man-power",
    name: "ManPower",
    icon: "pe-7s-headphones",
    component: ManPower,
    layout: "/nucleus"
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    icon: "pe-7s-graph1",
    component: Subscriptions,
    layout: "/nucleus"
  },

  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/nucleus"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/nucleus"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/nucleus"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/nucleus"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/nucleus"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/nucleus"
  }
];

export default dashboardRoutes;
