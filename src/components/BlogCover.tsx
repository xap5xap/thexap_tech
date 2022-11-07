import Box from "@mui/material/Box";
import Image from "next/image";
import { Maybe } from "../gql/graphql";

type Props = {
  url?: Maybe<string>;
  title?: Maybe<string>;
};

const BlogCover = ({ url, title }: Props) => {
  return (
    <Box
      sx={{
        zIndex: -100,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 430,
        opacity: 0.35,
        maskImage:
          "linear-gradient(to top,transparent,rgba(0,0,0,.013) 8.1%,rgba(0,0,0,.049) 15.5%,rgba(0,0,0,.104) 22.5%,rgba(0,0,0,.175) 29%,rgba(0,0,0,.259) 35.3%,rgba(0,0,0,.352) 41.2%,rgba(0,0,0,.45) 47.1%,rgba(0,0,0,.55) 52.9%,rgba(0,0,0,.648) 58.8%,rgba(0,0,0,.741) 64.7%,rgba(0,0,0,.825) 71%,rgba(0,0,0,.896) 77.5%,rgba(0,0,0,.951) 84.5%,rgba(0,0,0,.987) 91.9%,#000)",
      }}
    >
      <Image
        layout="responsive"
        src={url || ""}
        alt={`Cover image for ${title}`}
        width={1920}
        height={530}
      />
    </Box>
  );
};

export default BlogCover;
