import { Box, Button } from "@mui/material";
import Link from "next/link";
import ROUTES from "../route";

const HeaderNavbar = () => {
  return (
    <Box component="nav">
      <Box component={"ul"} role="menubar">
        <Link href={ROUTES.portfolio} passHref>
          <Button
            LinkComponent={"li"}
            variant="text"
            sx={{ color: (theme) => theme.palette.text.primary, mr: 1 }}
          >
            Porfolio
          </Button>
        </Link>
        <Link href={ROUTES.aboutMe} passHref>
          <Button
            variant="text"
            sx={{ color: (theme) => theme.palette.text.primary, mr: 1 }}
          >
            About me
          </Button>
        </Link>
        <Link href={ROUTES.blog} passHref>
          <Button
            variant="text"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            Blog
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeaderNavbar;
