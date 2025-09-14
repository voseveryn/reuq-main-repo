export const renderRichText = (richTextJson: string) => {
  try {
    const parsed = JSON.parse(richTextJson);
    if (!parsed.children || !Array.isArray(parsed.children)) return null;

    return parsed.children.map((child: any, idx: number) => {
      if (child.isBold) {
        return <strong key={idx}>{child.text}</strong>;
      }
      return child.text;
    });
  } catch {
    return richTextJson;
  }
};