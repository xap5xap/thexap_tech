const fetchGraphQL = async (query: any, preview: boolean = false) => {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`
    },
    body: JSON.stringify({ query })
  }).then(response => response.json());
};

export const getAllPostForBlogPage = async () => {
  const entry = await fetchGraphQL(`query {
        blogCollection(order:date_DESC){
          items{
            title
            thumbnailImage{
              url
            }
            excerpt
            contentfulMetadata{
              tags{
                 id
                name
              }
            }
          }
        }
      }`);
  return entry?.data?.blogCollection?.items;
};
