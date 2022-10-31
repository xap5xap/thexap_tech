import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

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
        rowGap: 2,
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
          alignItems: { xs: "center", md: "flex-start" },
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
          <Button size="small">Schedule a meeting</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Value;
