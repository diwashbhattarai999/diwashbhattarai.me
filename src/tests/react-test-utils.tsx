import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
    render(ui, {
        wrapper: ({ children }) => <>{children}</>,
        ...options,
    });

// biome-ignore lint/performance/noBarrelFile: false positive
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
