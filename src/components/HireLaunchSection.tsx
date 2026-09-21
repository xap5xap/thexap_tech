import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { routes } from "../lib/routes";
import NextLink from "next/link";
import { interactionTrackingAttributes, type SourcePlacement } from "../analytics/events";

type Props = {
  showSelectedWork?: boolean;
  contactPlacement?: SourcePlacement;
};

const HireLaunchSection = ({ showSelectedWork = true, contactPlacement }: Props) => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 2
        }}
      >
        <Image alt="launch rocket" src="/images/rocket.svg" width={100} height={100} />
        <Typography component="h2" variant="h4" textAlign="center">
          Does your working product need clearer ownership for its next state?
        </Typography>
        <Typography color="text.secondary" textAlign="center" sx={{ maxWidth: 760 }}>
          Bring the current product state, the outcome that matters next, and where ownership is unclear. An initial
          conversation will establish whether direct senior ownership fits the work.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1 }}>
          <Button
            component={NextLink}
            href={routes.scheduleMeeting.path}
            size="large"
            {...(contactPlacement
              ? interactionTrackingAttributes("contact_click", "schedule_meeting", contactPlacement)
              : {})}
          >
            Schedule a meeting
          </Button>
          {showSelectedWork ? (
            <Button component={NextLink} href={routes.projects.path} size="large" variant="outlined">
              See selected work
            </Button>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
};

export default HireLaunchSection;
