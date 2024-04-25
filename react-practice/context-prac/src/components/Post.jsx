import { useContext } from "react";
import { GuidContext } from "../store/GuidContext";

export default function Post() {
  const guidCtx = useContext(GuidContext);

  return (
    <>
      <ul>
        <li>{guidCtx}</li>
      </ul>
    </>
  );
}
