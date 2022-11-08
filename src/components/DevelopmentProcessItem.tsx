import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
        alignItems: "center"
      }}
    >
      <Image src={imageSrc} alt={text} width={200} height={200}></Image>
      <Typography fontWeight="bold" color="primary" sx={{ mt: 1 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default DevelopmentProcessItem;
