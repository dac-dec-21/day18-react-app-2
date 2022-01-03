/**
 * App => Captial
 * JSX => Javascript XML.
 * @returns JSX => XML
 *
 * <App></App>
 * <App />
 */
export default function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <HelloWorld />
    </div>
  );
}

/**
 * <HelloWorld></HelloWorld>
 * <HelloWorld />
 * @returns
 */
export function HelloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        voluptates inventore est assumenda reiciendis repellendus facere
        exercitationem explicabo similique. Optio voluptatem ex expedita sit
        molestias perferendis quod neque libero placeat!
      </p>
    </div>
  );
}
