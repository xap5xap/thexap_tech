import Image from "next/image";
import { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  reverse?: boolean;
  imageSrc: string;
  text: string[];
  title: string;
};
const WhatYouGetItem: FC<Props> = ({ reverse, imageSrc, text, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {
          xs: "column-reverse",
          md: reverse ? "row-reverse" : "row",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <List>
          {text.map((el, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={el}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ mr: { md: 2 } }} />
      <Box>
        <Image
          src={imageSrc}
          alt="thexap promise image"
          layout="intrinsic"
          width={400}
          height={400}
        ></Image>
      </Box>
    </Box>
  );
};

export default WhatYouGetItem;
