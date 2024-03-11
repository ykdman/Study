import { EXAMPLES } from "../../data";
import { useState } from "react";

import TabButton from "../TabButton";
import Section from "../Section";

export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  function selectHandler(selectedButton) {
    console.log(selectedButton);
    setTabContent(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton
          isSelected={tabContent === "components"}
          onClick={() => {
            selectHandler("components");
          }}
          label="Component"
        ></TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onClick={() => {
            selectHandler("jsx");
          }}
          label="JSX"
        ></TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onClick={() => {
            selectHandler("props");
          }}
          label="Props"
        ></TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onClick={() => {
            selectHandler("state");
          }}
          label="State"
        ></TabButton>
      </menu>

      {!tabContent ? (
        <p>Please Select a Topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <code>{EXAMPLES[tabContent].code}</code>
        </div>
      )}
    </Section>
  );
}
