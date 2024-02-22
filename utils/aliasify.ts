import slugify from "slugify";

export const aliasify = (input: string) => {
  return slugify(input, {
    lower: true,
  });
};
