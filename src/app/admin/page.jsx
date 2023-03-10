"use client";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import DashBG from "../../assets/dashboard_bg.png";
import Nurse from "../../assets/Nurse.svg";
import Agencies from "../../assets/Agencies.svg";

export const DashboardCard = ({ title, icon, count }) => {
  return (
    <Box
      p={2}
      height={200}
      borderRadius={2}
      sx={{
        backgroundImage: `url('${DashBG.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderLeft: "5px solid #13B493",
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" fontWeight={700} sx={{ color: "#1082CB" }}>
          {count}
        </Typography>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Image src={icon} />
    </Box>
  );
};

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt={1} sx={{ flexGrow: 1 }}>
      <Typography
        mb={2}
        variant="h5"
        fontWeight={600}
        color={colors.primary[500]}
      >
        Total Details
      </Typography>
      <Grid container spacing={5} mb={5}>
        <Grid item xs={4}>
          <DashboardCard
            title="Total Agencies"
            count={20}
            icon={Nurse}
          />
        </Grid>
        <Grid item xs={4}>
          <DashboardCard
            title="Total Nurses"
            count={60}
            icon={Agencies}
          />
        </Grid>
        <Grid item xs={4}>
          <DashboardCard title="Total Jobs" count={20} />
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item container xs={6} spacing={5}>
          <Grid item xs={12}>
            <Typography
              mb={2}
              variant="h5"
              fontWeight={600}
              color={colors.primary[500]}
            >
              Job Details
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="Open Jobs" count={12} />
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="Closed Jobs" count={12} />
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="Cancelled Jobs" count={12} />
          </Grid>
          <Grid item xs={6}>
            <DashboardCard title="Expired Jobs" count={12} />
          </Grid>
        </Grid>
        <Grid item xs={6} container spacing={5}>
          <Grid item xs={12}>
            <Typography
              mb={2}
              variant="h5"
              fontWeight={600}
              color={colors.primary[500]}
            >
              Managed By Employees
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DashboardCard title="Accepted Jobs by Emp." count={12} />
          </Grid>
          <Grid item xs={12}>
            <DashboardCard title="Rejected Jobs by Emp." count={12} />
          </Grid>
        </Grid>
      </Grid>

      {/* <Typography
        mb={2}
        variant="h5"
        fontWeight={600}
        color={colors.primary[500]}
      >
        Job Details
      </Typography>
      <Grid container spacing={5} mb={3}>
        <Grid item xs={3}>
          <DashboardCard title="Open Jobs" count={12} />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard title="Closed Jobs" count={12} />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard title="Cancelled Jobs" count={12} />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard title="Expired Jobs" count={12} />
        </Grid>
      </Grid>
      <Typography
        mb={2}
        variant="h5"
        fontWeight={600}
        color={colors.primary[500]}
      >
        Manage By Employee
      </Typography>
      <Grid container spacing={5} mb={3}>
        <Grid item xs={6}>
          <DashboardCard title="Accepted Jobs By Emp." count={12} />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard title="Cancelled Jobs By Emp." count={12} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Index;
