import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        port: 3000,
    },
    test: {
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
        },
        deps: { optimizer: { web: { enabled: true } } },
        environment: "happy-dom",
        exclude: ["**/node_modules/**", "**/build/**", "**/.next/**"],
        globals: true,
        include: ["./src/**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        setupFiles: ["./src/tests/setup-test-environment.ts"],
    },
});
