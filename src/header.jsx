import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Juan Ramirez's Jazzy Raven ~ ITIS 3135</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contract">Contract</Link> |{" "}
        <Link to="/survey">Survey</Link> |{" "}
        <Link to="/cards">Cards</Link> |{" "}
        <Link to="/inventory">Inventory</Link> |{" "}
        <Link to="/documentation">Documentation</Link> |{" "}
        <Link to="/product">Product</Link> |{" "}
        <Link to="/intro-form">Intro Form</Link>
      </nav>


      <nav aria-label="Secondary Navigation">
        <Link to="/website-evaluations">Website Evaluations</Link> |{" "}
        <Link to="/crappy">CRAPpy Page</Link> |{" "}
        <Link to="/hobby">Hobby</Link> |{" "}
        <Link to="/slideshow">Slideshow</Link>
      </nav>
        </header>
    );
}