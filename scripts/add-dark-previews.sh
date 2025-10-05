#!/bin/bash

# Add DarkPreview story to all component story files

STORY_FILES=(
  "components/primitives/Button.stories.jsx"
  "components/primitives/Typography.stories.jsx"
  "components/primitives/Input.stories.jsx"
  "components/primitives/Card.stories.jsx"
  "components/primitives/Grid.stories.jsx"
  "components/primitives/Stack.stories.jsx"
  "components/primitives/Spacer.stories.jsx"
  "components/primitives/Container.stories.jsx"
  "components/primitives/MediaBlock.stories.jsx"
  "components/primitives/SectionHeader.stories.jsx"
  "components/forms/Form.stories.jsx"
  "components/forms/controls.stories.jsx"
  "components/sections/HomeHero.stories.jsx"
  "components/sections/ScheduleTourForm.stories.jsx"
  "components/layout/Header.stories.jsx"
  "components/layout/Footer.stories.jsx"
  "components/pages/HomePageComposition.stories.jsx"
)

DARK_PREVIEW_TEMPLATE='
// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};
'

for file in "${STORY_FILES[@]}"; do
  # Check if DarkPreview already exists
  if grep -q "export const DarkPreview" "$file"; then
    echo "✓ $file already has DarkPreview"
  else
    # Add DarkPreview at the end of the file
    echo "$DARK_PREVIEW_TEMPLATE" >> "$file"
    echo "✓ Added DarkPreview to $file"
  fi
done

echo ""
echo "Done! All component stories now have dark mode previews."
