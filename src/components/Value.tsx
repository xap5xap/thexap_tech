import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { routes } from "../lib/routes";
import NextLink from "next/link";

type Props = {
  title: string;
  description: string[];
  imageSrc: string;
  reverse?: boolean;
};

const Value: FC<Props> = ({ title, description, imageSrc, reverse }) => {
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        columnGap: 8,
        rowGap: 2
      }}
    >
      <Box>
        <img src={imageSrc} alt={title}></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          rowGap: 2,
          flexDirection: "column",
          order: { xs: 1, md: reverse ? -1 : 1 },
          alignItems: { xs: "center", md: "flex-start" }
        }}
      >
        <Typography variant="h4" textAlign={{ xs: "center", md: "left" }}>
          {title}
        </Typography>
        <ul>
          {description.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
        <Box>
          <NextLink href={routes.scheduleMeeting.path} passHref>
            <Button component="a" size="small">
              Schedule a meeting
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Value;
