import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const AppFooter = () => {
  return (
    <Box
      sx={{
        boxShadow: theme =>
          `inset 0px 1px 1px ${theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.grey[100]}`,
        backgroundColor: theme => (theme.palette.mode === "dark" ? "rgba(13,13,13,0.72)" : "rgba(255,255,255,0.72)")
      }}
    >
      <Container>
        <Box
          sx={{
            py: 4,
            display: { xs: "block", sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "space-between" }
          }}
        >
          <NextLink passHref href="/about-me">
            <Link>
              <Typography color="text.secondary" variant="body2">
                Xavier Perez
              </Typography>
            </Link>
          </NextLink>
          <Box sx={{ py: { xs: 2, sm: 0 } }}>
            <Stack spacing={2} direction="row">
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/xap5xap"
                aria-label="github"
                title="GitHub"
                size="small"
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/thexap_tech"
                aria-label="twitter"
                title="Twitter"
                size="small"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/xavier-perez-b62566204/"
                aria-label="linkedin"
                title="LinkedIn"
                size="small"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
