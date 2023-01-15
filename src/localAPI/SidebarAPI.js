import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const sidebarAPI = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin",
  },
  {
    name: "All Users",
    icon: <PeopleAltIcon />,
    menu: [
      { name: "All Agencies", link: "" },
      { name: "All Nurse", link: "" },
      { name: "All Admin", link: "" },
    ],
  },
  {
    name: "All Jobs",
    icon: <WorkIcon />,
    menu: [
      { name: "Job List", link: "" },
      { name: "Open Jobs", link: "" },
      { name: "Close Jobs", link: "" },
      { name: "Cancelled Jobs", link: "" },
      { name: "Expired Jobs", link: "" },
      { name: "Accepted By Employees", link: "" },
      { name: "Cancelled By Employees", link: "" },
    ],
  },
  {
    name: "Mobile App Management",
    icon: <AppSettingsAltIcon />,
    link: "/",
  },
  {
    name: "Notification",
    icon: <NotificationsActiveIcon />,
    link: "/",
  },
  {
    name: "Logout",
    icon: <ExitToAppIcon />,
    link: "/",
  },
];
