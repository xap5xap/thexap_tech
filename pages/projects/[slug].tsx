import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import CaseStudyPage from "../../src/components/Portfolio/CaseStudyPage";
import { caseStudiesBySlug, flagshipCaseStudies, type CaseStudy } from "../../src/content/portfolio";
import projectsData from "../../data/projects.json";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";

type LegacyProject = (typeof projectsData)[number];

type Props = { kind: "case-study"; caseStudy: CaseStudy } | { kind: "legacy"; project: LegacyProject };

interface Params extends ParsedUrlQuery {
  slug: string;
}

const LegacyProjectPage = ({
  title,
  productDescription,
  role,
  responsabilities,
  technologies,
  urls,
  imageLarge
}: LegacyProject) => {
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
          rowGap: 4
        }}
      >
        <Box>
          <Image src={imageLarge} alt={title || ""} width={600} height={330} />
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

const IndividualProjectPage = (props: Props) => {
  if (props.kind === "case-study") {
    return <CaseStudyPage caseStudy={props.caseStudy} />;
  }

  return <LegacyProjectPage {...props.project} />;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params?.slug;
  const caseStudy = slug ? caseStudiesBySlug.get(slug) : undefined;

  if (caseStudy) {
    const { existsSync } = await import("fs");
    const { join } = await import("path");
    const missingAssets = caseStudy.assets.filter(asset => !existsSync(join(process.cwd(), "public", asset.src)));

    if (missingAssets.length > 0) {
      throw new Error(
        `Case study "${caseStudy.identity.slug}" has missing public assets: ${missingAssets
          .map(asset => asset.src)
          .join(", ")}`
      );
    }

    return { props: { kind: "case-study", caseStudy } };
  }

  const project = projectsData.find(item => item.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { kind: "legacy", project } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const slugs = Array.from(
    new Set([
      ...flagshipCaseStudies.map(caseStudy => caseStudy.identity.slug),
      ...projectsData.map(project => project.slug)
    ])
  );

  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug
        }
      };
    }),
    fallback: false
  };
};

export default IndividualProjectPage;
