import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  cookieless_mode: "always",
  api_host: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
  ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
  defaults: "2026-01-30",
});
