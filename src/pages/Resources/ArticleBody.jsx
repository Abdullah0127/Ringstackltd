export default function ArticleBody({ article }) {
  const blocks = [];

  function walk(children, indexPath = '0') {
    if (Array.isArray(children)) {
      children.forEach((child, index) => walk(child, `${indexPath}-${index}`));
      return;
    }
    if (children && typeof children === 'object') {
      if (children.type === 'heading') {
        blocks.push(
          <h2 key={children.id || indexPath} id={children.id}>
            {children.text}
          </h2>
        );
      } else if (children.type === 'paragraph') {
        blocks.push(<p key={indexPath}>{children.text}</p>);
      } else if (children.type === 'list') {
        blocks.push(
          <ul key={indexPath}>
            {(children.items || []).map((item, i) => (
              <li key={`${indexPath}-${i}`}>{item}</li>
            ))}
          </ul>
        );
      } else if (children.type === 'callout') {
        blocks.push(
          <div key={indexPath} className="article-callout">
            <strong>{children.title}</strong>
            <p>{children.content}</p>
          </div>
        );
      } else if (children.type === 'quote') {
        blocks.push(<blockquote key={indexPath}>{children.text}</blockquote>);
      }
    }
  }

  walk(article?.content);

  return <article className="article-body">{blocks}</article>;
}
