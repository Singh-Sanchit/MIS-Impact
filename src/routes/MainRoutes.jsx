import Dashboard from "views/Dashboard/Dashboard";
import Family from "views/Family/Family";
import Universe from "views/Universe/Universe";
import Programs from "views/Programs/Programs";
import Reports from "views/Reports/Reports";
import FamilyDetails from "../views/Family/FamilyDetails";

const MainRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    page: "Dashboard",
    sidebar: false,
    component: Dashboard
  },
  {
    path: "/family",
    name: "Family",
    icon: require("../assets/img/familieslogo.png"),
    page: "Family",
    sidebar: true,
    component: Family
  },
  {
    path: "/family/familyDetails/:familyId",
    name: "FamilyDetails",
    page: "FamilyDetails",
    sidebar: false,
    component: FamilyDetails
  },
  {
    path: "/universe",
    name: "Universe",
    icon: require("../assets/img/universelogo.png"),
    page: "Universe",
    sidebar: true,
    component: Universe
  },
  {
    path: "/programs",
    name: "Programs",
    icon: require("../assets/img/programslogo.png"),
    page: "Programs",
    sidebar: true,
    component: Programs
  },
  {
    path: "/reports",
    name: "Reports",
    icon: require("../assets/img/reportslogo.png"),
    page: "Reports",
    sidebar: true,
    component: Reports
  },
  {
    redirect: true,
    path: "/",
    to: "/dashboard",
    page: "Dashboard",
    sidebar: false,
    name: "Dashboard"
  }
];

export default MainRoutes;
