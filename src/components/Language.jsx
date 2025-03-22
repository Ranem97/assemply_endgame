export default function Language(props) {
  return (
    <span
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding: "5px",
        borderRadius: "4px",
        margin: "2px",
      }}
    >
      {props.name}
    </span>
  );
}
