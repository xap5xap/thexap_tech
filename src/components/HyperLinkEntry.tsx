import Link from "@mui/material/Link";
import NextLink from "next/link";
import { ReactNode } from "react";
import { Blog, BlogBodyEntries, Maybe } from "../gql/graphql";
import { routes } from "../lib/routes";

type Props = {
  id: string;
  entries: BlogBodyEntries;
  children: ReactNode;
};

const HyperlinkEntry = ({ id, entries, children }: Props) => {
  const entry = entries.hyperlink.find(
    (el) => el?.sys.id === id
  ) as Maybe<Blog>;
  return (
    <NextLink href={`${routes.blog.path}/${entry?.slug}`} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

export default HyperlinkEntry;
