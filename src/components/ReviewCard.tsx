import { Avatar, Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { FC } from "react";

type Props = {
  name: string;
  review: string;
};

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ReviewCard: FC<Props> = ({ name, review }) => {
  return (
    <Card
      sx={{
        minWidth: "300px",
        width: "300px",
      }}
    >
      <CardContent
        sx={{
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Box>
            <Avatar {...stringAvatar(name)} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{review}</Typography>
            <Typography variant="caption" color="text.secondary">
              -- {name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
