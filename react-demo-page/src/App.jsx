import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescription = ['Crucial', 'Fundmental', 'Core'];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  const { title, description, img } = props;

  return (
    <li>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core) => (
              <CoreConcept
                title={core.title}
                img={core.image}
                description={core.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
