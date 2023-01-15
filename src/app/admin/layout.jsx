"use client";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { Box, Paper } from "@mui/material";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const DashboardLayout = ({ children }) => {
  return (
    <Box height="100vh" overflow="hidden">
      <AdminNavbar />
      <Box display="flex" gap={2} height="100%">
        <AdminSidebar />
        <Box p={1} height="90vh" bgcolor="white">
          <PerfectScrollbar>{children}</PerfectScrollbar>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
