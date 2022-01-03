/**
 * Main Function.
 */
export default function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <HelloUniverse />
      <HelloWorld />
      <HelloUniverse />
    </div>
  );
}

/**
 * <HelloWorld></HelloWorld>
 * <HelloWorld />
 * @returns
 */
function HelloWorld() {
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

function HelloUniverse() {
  return (
    <div>
      <h1>Hello Universe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        aliquam velit fuga aliquid dolor. Voluptas, maiores nesciunt facilis
        obcaecati amet suscipit nemo dignissimos eius, commodi totam, incidunt
        expedita. Explicabo, soluta.
        <hr />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
        voluptate. Iusto at excepturi cupiditate. Placeat dolore quisquam
        dolores beatae soluta asperiores iure tenetur repellat. Iure beatae odio
        amet enim aliquam.
      </p>
    </div>
  );
}
