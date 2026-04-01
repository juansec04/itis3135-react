import RavenMouse from './images2/RavenMouse.jpg';

export default function Product() {
    return (
        <main>
            <h2>Raven Pro Gaming Mouse</h2>

      <figure>
        <img
          src={RavenMouse}
          alt="Raven Pro Gaming Mouse"
          className="product-image"
          width="200"
        />
        <figcaption>
          Raven Pro Gaming Mouse - Precision and Comfort for Gamers
        </figcaption>
      </figure>

      <section>
        <h3>Product Description</h3>
        <p>
          The Raven Pro Gaming Mouse is designed for serious gamers who want
          precision, speed, and comfort. With customizable RGB lighting,
          adjustable DPI, and an ergonomic design, it provides the perfect
          balance between performance and style.
        </p>
      </section>

      <section>
        <h3>Key Features</h3>
        <ul>
          <li>Up to 16,000 DPI adjustable sensitivity</li>
          <li>Customizable RGB lighting</li>
          <li>Ergonomic design for long gaming sessions</li>
          <li>6 programmable buttons</li>
          <li>Ultra-fast response time</li>
        </ul>
      </section>

      <section>
        <h3>Price</h3>
        <p>
          <strong>$59.99</strong>
        </p>
      </section>

      <section>
        <h3>Purchase</h3>
        <button type="button">Add to Cart</button>
      </section>
        </main>
    );
}