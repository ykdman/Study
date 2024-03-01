import componentImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  // set Tab Content
  const [tabContent, setTabContent] = useState('');

  function selectHandler(selectedButton) {
    console.log(selectedButton);
    setTabContent(selectedButton);
  }

  return (
    <>
      <Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
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
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === 'components'}
              onSelect={() => {
                selectHandler('components');
              }}
              label="Component"
            ></TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onSelect={() => {
                selectHandler('jsx');
              }}
              label="JSX"
            ></TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onSelect={() => {
                selectHandler('props');
              }}
              label="Props"
            ></TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onSelect={() => {
                selectHandler('state');
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
        </section>
      </main>
    </>
  );
}

export default App;
