import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>hello react</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px" };
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pissass = pizzaData;
  // const pissass = []; // empty array is also truely value
  const numpissas = pissass.length;

  return (
    <main className="menu">
      <h2>our menu</h2>

      {numpissas > 0 ? (
        // <> it is react fragment
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All our
            stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pissass.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on this menu. please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} // dont pass string //
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12} // dont pass string //
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaobj }) {
  // destructing the props //
  // now it has only pizzaobj props not others //
  console.log(pizzaobj);

  if (pizzaobj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);

  // if (hour >= openhour && hour <= closehour) alert("we're currently open!");
  // else alert("sorry we're closed");

  // if (!isopen) return <p>closed</p>;

  return (
    <footer className="footer">
      {isopen ? (
        <Order closehours={closehour} openhours={openhour} />
      ) : (
        <p>
          we're happy to welcome you between {openhour}:00 and {closehour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closehours, openhours }) {
  // we extracted jsx here in new function //
  return (
    <div className="order">
      <p>
        we're open from {openhours}:00 to {closehours}:00. come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// the above is js mode wittten in {new Date().toLocaleTimeString()} {} this bracket ia used

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
