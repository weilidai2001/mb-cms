import type { CmsDescription } from "./types";

export const formatDescription = (description: CmsDescription[]): string => {
  if (!description || !Array.isArray(description)) return '';

  return description
    .map((block) => {
      if (block.type === 'list' && block.format === 'unordered') {
        const items = block.children
          .map((item) => {
            if (item.type === 'list-item') {
              // Join all text children for this list item
              const text = item.children
                .filter((child) => child.type === 'text')
                .map((child) => child.text)
                .join(' ');
              return `<li>${text}</li>`;
            }
            return '';
          })
          .join('');
        return `<ul>${items}</ul>`;
      }
      // Future: handle paragraphs if CmsDescription supports them
      return '';
    })
    .join('');
};
