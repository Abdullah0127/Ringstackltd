import Icon from "./Icon";

export default function Button({ children, href, variant = "primary", icon = "arrow", ...props }) {
  const className = `button ${variant === "light" ? "button-light" : ""}`.trim();
  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children} {icon && <Icon name={icon} size={17} />}
      </a>
    );
  }
  return (
    <button className={className} {...props}>
      {children} {icon && <Icon name={icon} size={17} />}
    </button>
  );
}
