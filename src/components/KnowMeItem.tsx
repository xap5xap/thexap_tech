import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type Props = {
  primaryText: string;
  secondaryText: string;
};
const KnowMeItem: FC<Props> = ({ primaryText, secondaryText }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="primary" variant="h4">
        {primaryText}
      </Typography>
      <Typography>{secondaryText}</Typography>
    </Box>
  );
};

export default KnowMeItem;
