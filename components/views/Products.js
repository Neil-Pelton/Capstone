import html from "html-literal";

export default state => html`
<h1>Products from API</h1>

<table id="products">
  <tr>
    <th>Title</th>
    <th>Image</th>
    <th class="hidden--mobile">Description</th>
    <th class="hidden--mobile">Price</th>
  </tr>
  ${state.products.map(product => {//getting data from state bc of what we did with API's in root index.js
      return `<tr>
        <td>${product.title}</td>
        <td><img src=${product.image} id="productsImgs" /></td>
        <td class="hidden--mobile">${product.description}</td>
        <td class="hidden--mobile">$${product.price}</td>
      </tr>`;
    })
    .join("")}
</table>
`;
//for images, use .map to create an array of each of the urls for images, then create a new html object for each one. Each of those objects is going to be an image tag and the src will be the variable name
