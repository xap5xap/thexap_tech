import ScheduleIcon from "@mui/icons-material/Schedule";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type Props = {
  title: string;
  description: string[];
  icon: any;
  color?: string;
};
const Stake: FC<Props> = ({ title, description, icon, color = "inherit" }) => {
  return (
    <Stack
      alignItems="center"
      spacing={3}
      sx={{ maxWidth: { sm: "100%", md: "360px" } }}
    >
      {icon}
      <Typography variant="h5" color={color}>
        {title}
      </Typography>
      <ul>
        {description.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default Stake;