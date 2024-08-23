import { Collection } from "tinacms";

export const HomePageCollection: Collection = {
  name: "homepage",
  label: "HomePage",
  path: "content/home",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
      ],
    },
  ],
};

export default HomePageCollection;
