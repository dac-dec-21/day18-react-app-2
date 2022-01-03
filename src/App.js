/**
 * App => Captial
 * JSX => Javascript XML.
 * @returns JSX => XML
 */
export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

/**
 * HTML => PRE DEFINED TAG
 * REACT => USER DEFINED TAG => COMPONENT
 *
 * <div></div>
 * <HelloWorld></HelloWorld>
 * @returns
 */
export function HelloWorld() {
  return (
    <div>
      <h1>Hello Cdac</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        voluptates inventore est assumenda reiciendis repellendus facere
        exercitationem explicabo similique. Optio voluptatem ex expedita sit
        molestias perferendis quod neque libero placeat!
      </p>
    </div>
  );
}
