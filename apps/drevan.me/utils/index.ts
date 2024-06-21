export const formatDateByLocale = (
  locale: Intl.LocalesArgument,
  d: string | number | Date
) => {
  return new Date(d).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const postCategories = {
  update: "Update",
  journey: "Journey",
};
