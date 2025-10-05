import React, { useEffect } from 'react';
import "./preview.css";

const withTheme = (Story, context) => {
  const theme = context.globals.theme || "light";

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.getAttribute('data-theme');
    if (prev !== theme) {
      html.setAttribute('data-theme', theme);
    }
    return () => {
      // Restore previous theme on unmount (optional)
      if (prev) {
        html.setAttribute('data-theme', prev);
      }
    };
  }, [theme]);

  // No wrapper needed - tokens come from :root now
  return <Story />;
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Light/Dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light", icon: "sun" },
        { value: "dark", title: "Dark", icon: "moon" },
      ],
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  layout: "padded",
  controls: { expanded: true },
  a11y: { element: "#storybook-root" },
  nextjs: { appDirectory: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
