import { Client } from "@notionhq/client";

export const useNotion = () => {
  const runtimeConfig = useRuntimeConfig();

  return new Client({
    auth: runtimeConfig.notionToken,
  });
};
