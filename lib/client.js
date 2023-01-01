import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({ 
  projectId: "uu0d4bot",
  dataset: "production",
  apiVersion: "2022-12-29",
  useCdn: true,
  token:
    "skdhXnQntn7odLCphsA10024EKjNQN111mjKRnMtqIm3yRsZV5UZiL21bWfU4OpfJUvmJ1SVzTSg1OQcoX6b1hp00fSNedqel1RKGPFZ0UF6WHjihnbdqDg62qj7tnJOXcyDIzeuFZq6a5avHvOvmzanhrI3xDM3HmquZifhf55mrEjNaR9j"
});

const builder = ImageUrlBuilder(client);

export const urlFor=(source)=> builder.image(source)
