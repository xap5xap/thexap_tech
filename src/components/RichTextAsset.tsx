import Box from "@mui/material/Box";
import Image from "next/image";
import { BlogBodyAssets } from "../gql/graphql";

type Props = {
  id: string;
  assets: BlogBodyAssets;
};

export default function RichTextAsset({ id, assets }: Props) {
  const asset = assets?.block?.find((asset) => asset?.sys?.id === id);

  if (asset?.url) {
    return (
      <Box sx={{ marginY: 5 }}>
        <Image
          src={asset.url}
          width={asset.width || 500}
          height={asset.height || 200}
          alt={asset?.description || ""}
        />
      </Box>
    );
  }

  return null;
}
