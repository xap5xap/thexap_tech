import { Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  subTitle?: string;
};
const SectionTitle: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Typography textAlign="center" variant="h3">
        {title}
      </Typography>
      {subTitle && (
        <Typography textAlign="center" sx={{ mt: 1 }}>
          {subTitle}
        </Typography>
      )}
    </>
  );
};

export default SectionTitle;
