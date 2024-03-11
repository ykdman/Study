import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import Section from "../Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((core) => (
          <CoreConcept
            key={crypto.randomUUID()}
            title={core.title}
            img={core.image}
            description={core.description}
          />
        ))}
      </ul>
    </Section>
  );
}
