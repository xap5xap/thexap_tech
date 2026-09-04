import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  description: string[];
  icon: ReactNode;
  color?: string;
  asList?: boolean;
};
const Stake: FC<Props> = ({ title, description, icon, color = "inherit", asList = true }) => {
  return (
    <Stack alignItems="center" spacing={3} sx={{ maxWidth: { sm: "100%", md: "360px" } }}>
      {icon}
      <Typography component="h3" variant="h5" color={color} textAlign="center">
        {title}
      </Typography>
      {asList ? (
        <ul>
          {description.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      ) : (
        description.map(el => (
          <Typography key={el} color="text.secondary" textAlign="center">
            {el}
          </Typography>
        ))
      )}
    </Stack>
  );
};

export default Stake;
