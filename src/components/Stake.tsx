import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  description: string[];
  icon: ReactNode;
  color?: string;
};
const Stake: FC<Props> = ({ title, description, icon, color = "inherit" }) => {
  return (
    <Stack alignItems="center" spacing={3} sx={{ maxWidth: { sm: "100%", md: "360px" } }}>
      {icon}
      <Typography variant="h5" color={color} textAlign="center">
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
