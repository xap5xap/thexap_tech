import Image from "next/image";
import { Asset, BlogBodyAssets } from "../gql/graphql";

type Props = {
  id: string;
  assets: any;
  //   assets: BlogBodyAssets[];
};

export default function RichTextAsset({ id, assets }: Props) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <Image src={asset.url} layout="fill" alt={asset.description || ""} />
    );
  }

  return null;
}
