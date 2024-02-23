import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  envPrefix: "NUXT_",
  test: {
    include: [...configDefaults.include, "**/*.{test,spec}-d.?(c|m)[jt]s?(x)"],
    environmentOptions: {
      setupFiles: ["dotenv/config"],
    },
    typecheck: {
      enabled: true,
    },
  },
});
