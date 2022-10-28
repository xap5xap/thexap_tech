import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NextLink from "next/link";

const AppFooter = () => {
  return (
    <>
      <Divider />
      <Container>
        <Box
          sx={{
            py: 4,
            display: { xs: "block", sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "space-between" },
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
    </>
  );
};

export default AppFooter;
