export default function Inventory() {
    return (
        <main>
            <h2>Raven Gaming Lounge Gear Inventory</h2>
      <p>
        Below is the current inventory of gaming gear available at Raven Gaming
        Lounge.
      </p>

      <table>
        <caption>Available Gaming Equipment</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Condition</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Raven Pro Gaming Mouse</td>
            <td>Accessory</td>
            <td>12</td>
            <td>New</td>
            <td>Front Display</td>
          </tr>
          <tr>
            <td>Mechanical RGB Keyboard</td>
            <td>Accessory</td>
            <td>8</td>
            <td>New</td>
            <td>Front Display</td>
          </tr>
          <tr>
            <td>27-inch Gaming Monitor</td>
            <td>Monitor</td>
            <td>6</td>
            <td>Excellent</td>
            <td>Storage Room A</td>
          </tr>
          <tr>
            <td>Gaming Headset</td>
            <td>Audio</td>
            <td>10</td>
            <td>Good</td>
            <td>Equipment Shelf</td>
          </tr>
          <tr>
            <td>Xbox Controller</td>
            <td>Controller</td>
            <td>5</td>
            <td>Good</td>
            <td>Console Area</td>
          </tr>
          <tr>
            <td>PlayStation Controller</td>
            <td>Controller</td>
            <td>5</td>
            <td>Good</td>
            <td>Console Area</td>
          </tr>
          <tr>
            <td>Gaming Chair</td>
            <td>Furniture</td>
            <td>7</td>
            <td>Excellent</td>
            <td>Lounge Floor</td>
          </tr>
        </tbody>
      </table>
        </main>
    );
}