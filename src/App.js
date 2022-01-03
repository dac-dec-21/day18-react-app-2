export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="container-fluid">
      <Header />

      <div className="row mt-1">
        {list.map(() => (
          <div className="col-sm-12 col-md-4 mb-1">
            <MyCard />
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row bg-dark text-light p-3 sticky-top">
      <div className="col h3">React App</div>
    </div>
  );
}

function MyCard() {
  let cardTitle = "Card Titleee";

  return (
    <div className="card">
      <div className="card-header">{cardTitle}</div>
      <div className="card-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nulla
        earum, iure magnam at assumenda qui et itaque, modi totam mollitia
        officia necessitatibus tenetur architecto. itaque, modi totam mollitia
        officia necessitatibus tenetur architecto. itaque, modi totam mollitia
        officia necessitatibus tenetur architecto.
        <input
          className="btn btn-sm btn-outline-secondary w-50 mt-2 "
          type="button"
          value="Buy Now"
        />
        <input
          className="btn btn-sm btn-outline-secondary w-50 mt-2"
          type="button"
          value="Add To Cart"
        />
      </div>
    </div>
  );
}
