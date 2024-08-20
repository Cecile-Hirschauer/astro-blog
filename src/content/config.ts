import { defineCollection } from "astro:content";

const blogCollection = defineCollection({});

export const blog = {
  blog: blogCollection,
};
