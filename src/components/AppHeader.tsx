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
import router from "next/router";

const Header = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  transition: theme.transitions.create("top"),
  zIndex: theme.zIndex.appBar,
  backdropFilter: "blur(20px)",
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.grey[100]
  }`,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(13,13,13,0.72)"
      : "rgba(255,255,255,0.72)",
}));

const AppHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const redirectTo = (path: string) => {
    setOpenDrawer(false);
    router.push(path);
  };

  return (
    <Header>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 70,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
          <IconButton
            onClick={() => setOpenDrawer((val) => !val)}
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            data-testid="hamburguer"
          >
            <MenuIcon sx={{ color: "grey.200" }}></MenuIcon>
          </IconButton>
          <NextLink href={ROUTES.home} passHref prefetch={false}>
            <Link sx={{ display: "flex" }}>
              <Image
                src="/images/logo_x.svg"
                alt="logo"
                title="Xavier Perez"
                width={50}
                height={50}
              ></Image>
            </Link>
          </NextLink>
        </Box>
        <Stack direction="row" spacing={3}>
          <Button variant="text" sx={{ display: { xs: "none", md: "block" } }}>
            Projects
          </Button>
          <NextLink href={routes.aboutMe.path} passHref>
            <Button
              variant="text"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              About me
            </Button>
          </NextLink>
          <Button>SCHEDULE A MEETING</Button>
        </Stack>
      </Container>
      <Drawer
        data-testid="nav-menu-drawer"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemButton onClick={() => redirectTo(routes.home.path)}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => redirectTo(routes.projects.path)}>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => redirectTo(routes.aboutMe.path)}>
              <ListItemText primary="About me" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
