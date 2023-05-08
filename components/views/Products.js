import html from "html-literal";

export default state => html`
<h1>Products from API</h1>

<table id="products">
  <tr>
    <th>Title</th>
    <th>Image</th>
    <th>Price</th>
    <th>Description</th>
    <th>Catagory</th>
    </tr>
    ${state.products //getting data from state bc of what we did with API's in root index.js
      .map(product => {
        return `<tr><td>${product.title}</td><td>${product.image}</td><td>${
          product.price
        }</td><td>${product.description}</td><td>${
          product.catagory
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
