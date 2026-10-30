import Icon from "./Icon";

export default function IconBox({ name, size = 24 }) {
  return (
    <span className="icon-box">
      <Icon name={name} size={size} />
    </span>
  );
}
