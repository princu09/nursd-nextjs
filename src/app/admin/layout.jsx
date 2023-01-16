"use client";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { Box } from "@mui/material";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <Box height="100vh" overflow="hidden">
      <AdminNavbar />
      <Box display="flex" gap={2} height="100%">
        <AdminSidebar />
        <Box sx={{ flexGrow: 1 }} p={1} height="90vh" bgcolor="white" mr={2}>
          {pathname !== "/admin" && <CustomBreadcrumbs />}
          <PerfectScrollbar>{children}</PerfectScrollbar>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
