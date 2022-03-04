import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Tooltip,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
import ROUTES from "../route";
import HeaderNavbar from "./HeaderNavbar";
import GithubIcon from "@mui/icons-material/GitHub";
import ThemeModeToggle from "./ThemeModeToggle";
import { useChangeTheme } from "../context/ThemeContext";
import { useTheme } from "@mui/material/styles";

const Header = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  transition: theme.transitions.create("top"),
  zIndex: theme.zIndex.appBar,
  backdropFilter: "blur(20px)",
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === "dark"
      ? theme.palette.primaryDark[700]
      : theme.palette.grey[100]
  }`,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primaryDark[900], 0.72)
      : "rgba(255,255,255,0.72)",
}));

const AppHeader = () => {
  const changeTheme = useChangeTheme();
  const theme = useTheme();

  const handleChangeThemeMode = (checked: boolean) => {
    const mode = checked ? "dark" : "light";
    changeTheme(mode);
  };

  return (
    <Header>
      <Container sx={{ display: "flex", alignItems: "center", minHeight: 70 }}>
        <NextLink href={ROUTES.home} passHref prefetch={false}>
          <Link sx={{ display: "flex" }}>
            <Image
              src="/images/logo_svg4.svg"
              alt="logo"
              width={165}
              height={50}
            ></Image>
          </Link>
        </NextLink>
        <Box>
          <HeaderNavbar></HeaderNavbar>
        </Box>
        <Box sx={{ ml: "auto" }}></Box>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Github" enterDelay={300}>
            <IconButton
              component="a"
              href="https://github.com/xap5xap"
              color="primary"
            >
              <GithubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <ThemeModeToggle
            onChange={handleChangeThemeMode}
            checked={theme.palette.mode === "dark"}
          />
        </Stack>
      </Container>
    </Header>
  );
};

export default AppHeader;
