import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { BlogBodyAssets } from "../../gql/graphql";
import { formatAssetSize, getSafeContentfulAssetHref, isDocxAsset, isPdfAsset } from "../../lib/visualTutorial";
import { articleLinkSx } from "./RichTextHyperlink";

type Props = {
  id: string;
  assets: BlogBodyAssets;
  children: ReactNode;
};

const RichTextAssetLink = ({ id, assets, children }: Props) => {
  const asset = assets?.hyperlink?.find(candidate => candidate?.sys?.id === id);
  const safeHref = getSafeContentfulAssetHref(asset?.url);

  if (!asset || !safeHref) {
    console.warn(`[Contentful] Hyperlinked Asset "${id}" is missing or has no safe delivery URL.`);
    return <Typography component="span">{children}</Typography>;
  }

  const supportedDownload = isPdfAsset(asset) || isDocxAsset(asset);
  if (!supportedDownload) {
    console.warn(`[Contentful] Hyperlinked Asset "${id}" uses unsupported type "${asset.contentType || "unknown"}".`);
    return (
      <Link href={safeHref} sx={articleLinkSx}>
        {children}
      </Link>
    );
  }

  const format = isPdfAsset(asset) ? "PDF" : "DOCX";
  const size = formatAssetSize(asset.size);
  const descriptionId = `asset-${id.replace(/[^A-Za-z0-9_-]/g, "-")}-description`;

  return (
    <Box
      component="span"
      sx={{
        alignItems: "flex-start",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        display: "flex",
        gap: 1.5,
        marginY: 1,
        maxWidth: "100%",
        padding: 2,
        transition: theme => theme.transitions.create(["border-color", "background-color"]),
        "&:focus-within": {
          borderColor: "primary.main",
          backgroundColor: "action.hover"
        }
      }}
    >
      <DescriptionOutlinedIcon aria-hidden="true" color="primary" sx={{ marginTop: 0.25 }} />
      <Box component="span" sx={{ display: "flex", flex: 1, flexDirection: "column", minWidth: 0 }}>
        <Link
          aria-describedby={asset.description ? descriptionId : undefined}
          href={safeHref}
          type={asset.contentType || undefined}
          sx={{ ...articleLinkSx, fontWeight: 700, overflowWrap: "anywhere" }}
        >
          {children}
        </Link>
        <Typography component="span" variant="caption" color="text.secondary">
          {[format, size].filter(Boolean).join(" · ")}
        </Typography>
        {asset.description ? (
          <Typography
            id={descriptionId}
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 0.5 }}
          >
            {asset.description}
          </Typography>
        ) : null}
      </Box>
      <DownloadOutlinedIcon aria-hidden="true" color="action" sx={{ marginTop: 0.25 }} />
    </Box>
  );
};

export default RichTextAssetLink;
