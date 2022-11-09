import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

const SkeletonBlogPost = () => {
  return (
    <Container>
      <Skeleton variant="text" width="100%" height={120} />
      <Skeleton variant="rectangular" width="100%" height={320} />
      <Skeleton variant="text" width="100%" height={420} />
    </Container>
  );
};

export default SkeletonBlogPost;
