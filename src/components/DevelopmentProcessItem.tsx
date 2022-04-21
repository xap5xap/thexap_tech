import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type Props = {
  imageSrc: string;
  text: string;
};
const DevelopmentProcessItem: FC<Props> = ({ imageSrc, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={imageSrc} alt={text} width={200} height={200}></Image>
      <Typography fontWeight="bold" color="primary">
        {text}
      </Typography>
    </Box>
  );
};

export default DevelopmentProcessItem;
