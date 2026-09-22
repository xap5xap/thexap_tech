import Link from "@mui/material/Link";
import NextLink from "next/link";
import { ReactNode } from "react";
import { getSiteOwnedHref } from "../../lib/visualTutorial";

type Props = {
  href: string;
  children: ReactNode;
};

export const articleLinkSx = {
  borderRadius: 0.5,
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "primary.main",
    outlineOffset: "3px"
  }
};

const RichTextHyperlink = ({ href, children }: Props) => {
  const siteOwnedHref = getSiteOwnedHref(href);

  if (siteOwnedHref) {
    return (
      <Link component={NextLink} href={siteOwnedHref} sx={articleLinkSx}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} sx={articleLinkSx}>
      {children}
    </Link>
  );
};

export default RichTextHyperlink;
