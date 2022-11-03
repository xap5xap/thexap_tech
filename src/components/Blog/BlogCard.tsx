import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Blog } from "../../gql/graphql";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 524,
        height: 537,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <Image
          src={blog.featuredImage?.url || ""}
          alt={`Cover image for ${blog.title}`}
          width={524}
          height={297}
          quality={75}
        />
        <CardContent>
          <Typography variant="h5">{blog.title}</Typography>
          <Typography component="div" variant="body2" color="text.secondary">
            {blog.excerpt}
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
            paddingX: 1,
          }}
        >
          {blog.contentfulMetadata?.tags?.map((el) => (
            <Chip key={el?.id} label={el?.name} />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
