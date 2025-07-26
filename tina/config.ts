import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "6ba6b45b-673a-4d18-a51c-46640c14937b",
  // Get this from tina.io
  token: "d4c4b6665a00dace2e12b06be7cdd3d9b7b83ffd",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Cover image",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "charactertitle",
            label: "Character title",
          },
          {
            name: "draft",
            type: "boolean",
            label: "Draft",
            required: true,
          },
          {
            type: 'datetime',
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "number",
            name: "weight",
            label: "Order",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
    search: {
    tina: {
      indexerToken: '9d546bbf8bfa73287c281ab3907ed22d5cbd1e85',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
