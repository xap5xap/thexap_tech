import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
import ROUTES from "../route";
import HeaderNavbar from "./HeaderNavbar";

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
  return (
    <Header>
      <Container sx={{ display: "flex", alignItems: "center", minHeight: 70 }}>
        <NextLink href={ROUTES.home} passHref prefetch={false}>
          <Link sx={{ display: "flex" }}>
            <Image
              src="/images/logo_x.svg"
              alt="logo"
              title="Xavier Perez"
              width={165}
              height={50}
            ></Image>
          </Link>
        </NextLink>
        <Box>
          <HeaderNavbar></HeaderNavbar>
        </Box>
        <Box sx={{ ml: "auto" }}></Box>
        <Stack direction="row" spacing={3}>
          <Button variant="text">Projects</Button>
          <Button variant="text">About me</Button>
          <Button>SCHEDULE A MEETING</Button>
        </Stack>
      </Container>
    </Header>
  );
};

export default AppHeader;
