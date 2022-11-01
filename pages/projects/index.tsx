import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { routes } from "../../src/lib/routes";

const projectsData = [
  {
    image: "/images/logo_x.svg",
    title: "thexap",
    slug: "the-xap",
  },
  {
    image: "/images/aircraft.svg",
    title: "Icarus flights",
    slug: "icarus-flights",
  },
  {
    image: "/images/cademy.png",
    title: "1cademy",
    slug: "1cademy",
  },
  {
    image: "/images/learns.svg",
    title: "Selfstudy",
    slug: "selfstudy",
  },
  {
    image: "/images/armonia.svg",
    title: "Armonia",
    slug: "armonia",
  },
  {
    image: "/images/panoramic-view.png",
    title: "Quito360",
    slug: "quito-360",
  },
  {
    image: "/images/chiff.svg",
    title: "Chiff",
    slug: "chiff",
  },
  {
    image: "/images/haiku.png",
    title: "Haiku deck",
    slug: "haiku",
  },
];

const ProjectsPage = () => {
  return (
    <HeaderFooterLayout>
      <Box sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
        <Container>
          <Typography variant="h3">Projects</Typography>
        </Container>
      </Box>
      <Container
        sx={{
          paddingY: 9,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            columnGap: 5,
            rowGap: 5,
            flexWrap: "wrap",
          }}
        >
          {projectsData.map((el, idx) => (
            <NextLink
              key={idx}
              passHref
              href={`${routes.projects.path}/${el.slug}`}
            >
              <Link underline="none" color="inherit">
                <Card sx={{ width: 250 }}>
                  <CardActionArea>
                    <CardContent>
                      <Box>
                        <Image
                          src={el.image}
                          alt={`project ${el.title}`}
                          width="100px"
                          height="100px"
                        />
                      </Box>
                      <Typography variant="h5" component="div">
                        {el.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </NextLink>
          ))}
        </Box>
      </Container>
    </HeaderFooterLayout>
  );
};

export default ProjectsPage;
