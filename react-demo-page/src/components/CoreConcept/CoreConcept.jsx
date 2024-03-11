import "./CoreConcept.css";

export default function CoreConcept({ ...props }) {
  const { title, description, img } = props;

  return (
    <li>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
