export const SectionIntroduction = ({ content }) => {
  const subtitleStyle = {
    color: "var(--blue-gray)",
    textTransform: "uppercase",
  };

  const containerStyle = {
    style: !!content.container ? content.container.style : null,
  };

  return (
    <div style={containerStyle.style}>
      {!!content.subtitle && (
        <h4 style={subtitleStyle}>{content.subtitle.text}</h4>
      )}
      {!!content.title && content.title.type === "h1" ? (
        <h1 style={content.title.style}>{content.title.text}</h1>
      ) : content.title.type === "h2" ? (
        <h2 style={content.title.style}>{content.title.text}</h2>
      ) : content.title.type === "h3" ? (
        <h3 style={content.title.style}>{content.title.text}</h3>
      ) : content.title.type === "h4" ? (
        <h4 style={content.title.style}>{content.title.text}</h4>
      ) : null}
      {!!content.paragraph && (
        <p style={content.paragraph.style}>{content.paragraph.text}</p>
      )}
    </div>
  );
};
