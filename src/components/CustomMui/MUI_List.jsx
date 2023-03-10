"use client";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MUIList = ({ item, style }) => {
  const pathname = usePathname();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 1.5,
          borderRadius: 2,
          backgroundColor: pathname == item.link && "white",
          color: colors.primary[500],

          "&:hover": {
            backgroundColor: "#ffffff",
            color: colors.primary[500],
          },
        }}
      >
        <Typography
          display={"flex"}
          alignItems={"center"}
          gap={1}
          fontWeight={500}
        >
          {item.icon} <span style={style}>{item.name}</span>
        </Typography>
        <span style={style}> {open ? <ExpandLess /> : <ExpandMore />}</span>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.menu.map((item, index) => {
            return (
              <Link
                href={item.link}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <ListItemButton
                  sx={{
                    padding: 1.5,
                    pl: 5,
                    borderRadius: 2,
                    backgroundColor: pathname == item.link && "white",
                    color: colors.primary[500],

                    "&:hover": {
                      backgroundColor: "#ffffff",
                      color: colors.primary[500],
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default MUIList;
