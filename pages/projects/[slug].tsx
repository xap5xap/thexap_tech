import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import projectsData from "../../data/projects.json";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  title?: string;
  productDescription?: string;
  role?: string;
  responsabilities?: string;
  technologies?: string[];
  urls?: string[];
  image?: string;
  imageLarge: string;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

const IndividualProjectPage = ({
  title,
  productDescription,
  role,
  responsabilities,
  technologies,
  urls,
  imageLarge,
}: Props) => {
  return (
    <HeaderFooterLayout>
      <Box sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
        <Container>
          <Typography variant="h3">{title}</Typography>
        </Container>
      </Box>
      <Container
        sx={{
          paddingY: 9,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
          columnGap: 4,
          rowGap: 4,
        }}
      >
        <Box>
          <Image src={imageLarge} alt={title} width={600} height={330} />
        </Box>
        <Stack spacing={5}>
          <Box>
            <Typography variant="h5" color="primary">
              The product:
            </Typography>
            <Typography>{productDescription}</Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="primary">
              My role:
            </Typography>
            <Typography>{role}</Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="primary">
              Responsabilities:
            </Typography>
            <Typography>{responsabilities}</Typography>
          </Box>
          <Box>
            <Typography variant="h5" color="primary">
              Technologies used:
            </Typography>
            <List dense>
              {(technologies || []).map((el, idx) => (
                <ListItem dense disableGutters key={idx}>
                  {el}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h5" color="primary">
              URL:
            </Typography>
            <Stack spacing={1}>
              {(urls || []).map((el, idx) => (
                <Link key={idx} href={el} target="_blank">
                  {el}
                </Link>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </HeaderFooterLayout>
  );
};

export const getStaticProps: GetStaticProps<Props | any, Params> = async ({
  params,
}) => {
  const project = projectsData.find((el) => el.slug === params?.slug);
  return { props: project };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: projectsData.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default IndividualProjectPage;
