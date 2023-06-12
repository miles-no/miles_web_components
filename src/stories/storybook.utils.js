export function propsToAttrs(attributes, trueBooleanAttr) {
  const attributeWords = [
    'close',
    'open',
    'disabled',
    'selected',
    'checked',
    'edit',
    'doubleclick',
  ];

  const attributePrefixes = /^(no|is|has)(.*)$/g;

  if (trueBooleanAttr) {
    return Object.entries(attributes)
      .filter(([_, value]) => value != null && value !== false)
      .map(([key, value]) => {
        return attributeWords.includes(key) || key.match(attributePrefixes)
          ? `${key}`
          : `${key}="${value}"`;
      })
      .join(' ');
  }

  return Object.entries(attributes)
    .filter(([_, value]) => value != null && value !== false)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
}
