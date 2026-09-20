import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Blog } from "../../gql/graphql";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { routes } from "../../lib/routes";
import TagsChips from "../TagsChips";
import { formatBlogDate } from "../../lib/blogDate";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  const dateLabel = formatBlogDate(blog.date);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Link component={NextLink} href={`${routes.blog.path}/${blog.slug}`} underline="none" color="inherit">
        <Card
          sx={{
            maxWidth: 524,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Box
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
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <CardContent>
              {dateLabel && (
                <Typography
                  component="time"
                  dateTime={blog.date}
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "block", mb: 1 }}
                >
                  {dateLabel}
                </Typography>
              )}
              <Typography variant="h5">{blog.title}</Typography>
              {(blog.excerpt?.length || 0) > 0 && (
                <Typography component="div" variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
              )}
            </CardContent>
          </Box>
          {blog.contentfulMetadata?.tags.length > 0 && (
            <CardActions>
              <TagsChips tags={blog.contentfulMetadata?.tags} />
            </CardActions>
          )}
        </Card>
      </Link>
    </Box>
  );
};

export default BlogCard;
