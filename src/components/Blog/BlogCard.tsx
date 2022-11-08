import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Blog } from "../../gql/graphql";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { routes } from "../../lib/routes";
import TagsChips from "../TagsChips";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <NextLink passHref href={`${routes.blog.path}/${blog.slug}`}>
        <Link underline="none" color="inherit">
          <Card
            sx={{
              maxWidth: 524,
              // height: 537,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: 1,
                justifyContent: "flex-start"
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
                {(blog.excerpt?.length || 0) > 0 && (
                  <Typography component="div" variant="body2" color="text.secondary">
                    {blog.excerpt}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
            {blog.contentfulMetadata?.tags.length > 0 && (
              <CardActions>
                <TagsChips tags={blog.contentfulMetadata?.tags} />
              </CardActions>
            )}
          </Card>
        </Link>
      </NextLink>
    </Box>
  );
};

export default BlogCard;
