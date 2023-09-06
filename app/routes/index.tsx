import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container">
      <h1>Meta cuisine</h1>
      <ul>
        <li><Link to="/ingredients">Ingrédients</Link></li>
      </ul>
    </div>
  );
}
