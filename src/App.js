export default function App() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="row mt-1">
        <div className="col-sm-12 col-md-4 mb-1">
          <MyCard />
        </div>
        <div className="col-sm-12 col-md-4 mb-1">
          <MyCard />
        </div>
        <div className="col-sm-12 col-md-4 mb-1">
          <MyCard />
        </div>
        <div className="col-sm-12 col-md-4 mb-1">
          <MyCard />
        </div>

        <div className="col-sm-12 col-md-4 mb-1">
          <MyCard />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row bg-dark text-light p-3">
      <div className="col h3">React App</div>
    </div>
  );
}

function MyCard() {
  return (
    <div className="card">
      <div className="card-header">Card Header</div>
      <div className="card-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nulla
        earum, iure magnam at assumenda qui et itaque, modi totam mollitia
        officia necessitatibus tenetur architecto. itaque, modi totam mollitia
        officia necessitatibus tenetur architecto. itaque, modi totam mollitia
        officia necessitatibus tenetur architecto.
        <input
          className="btn btn-sm btn-outline-secondary w-100 mt-2"
          type="button"
          value="Buy Now"
        />
      </div>
    </div>
  );
}
