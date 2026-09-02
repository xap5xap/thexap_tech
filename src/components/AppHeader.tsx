import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
import ROUTES from "../route";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { routes } from "../lib/routes";

const Header = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  transition: theme.transitions.create("top"),
  zIndex: theme.zIndex.appBar,
  backdropFilter: "blur(20px)",
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.grey[100]
  }`,
  backgroundColor: theme.palette.mode === "dark" ? "rgba(13,13,13,0.72)" : "rgba(255,255,255,0.72)"
}));

const AppHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigationItems = [
    { label: "Home", href: routes.home.path },
    { label: "Blog", href: routes.blog.path },
    { label: "Projects", href: routes.projects.path },
    { label: "About me", href: routes.aboutMe.path }
  ];

  return (
    <Header>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 70
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
          <IconButton
            onClick={() => setOpenDrawer(val => !val)}
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            aria-label={openDrawer ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={openDrawer}
            edge="end"
            data-testid="hamburguer"
          >
            <MenuIcon sx={{ color: "grey.200" }}></MenuIcon>
          </IconButton>
          <Link component={NextLink} href={ROUTES.home} prefetch={false} sx={{ display: "flex" }}>
            <Image src="/images/logo_x.svg" alt="Xavier Perez" title="Xavier Perez" width={50} height={50} />
          </Link>
        </Box>
        <Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ alignItems: "center" }}>
          <Box component="nav" aria-label="Primary navigation" sx={{ display: { xs: "none", md: "block" } }}>
            <Stack direction="row" spacing={3}>
              {navigationItems.slice(1).map(item => (
                <Button
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  variant="text"
                  sx={{ textAlign: "center" }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>
          <Button
            component={NextLink}
            href={routes.scheduleMeeting.path}
            sx={{ px: { xs: 1.25, sm: 2 }, fontSize: { xs: "0.75rem", sm: "0.875rem" }, whiteSpace: "nowrap" }}
          >
            SCHEDULE A MEETING
          </Button>
        </Stack>
      </Container>
      <Drawer
        data-testid="nav-menu-drawer"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ component: "nav", "aria-label": "Mobile navigation" }}
      >
        <List id="mobile-navigation">
          {navigationItems.map(item => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton component={NextLink} href={item.href} onClick={() => setOpenDrawer(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
