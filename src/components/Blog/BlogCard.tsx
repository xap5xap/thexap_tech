import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const BlogCard = () => {
  return (
    <Card sx={{ maxWidth: "524px" }}>
      <CardActionArea>
        <Image
          src="/images/oksana-zub-pi3_ah1x-rs-unsplash.jpg"
          alt=""
          width={524}
          height={297}
        />
        <CardContent>
          <Typography variant="h5">
            We are stronger as a group than an individual
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 2,
            paddingY: 2,
          }}
        >
          <Chip label="React" />
          <Chip label="NextJS" />
          <Chip label="Google Cloud" />
        </Box>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
