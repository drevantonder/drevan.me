import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  envPrefix: "NUXT_",
  test: {
    environmentOptions: {
      setupFiles: ["dotenv/config"],
    },
  },
});
