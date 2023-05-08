import html from "html-literal";

export default state => html`
  <h1>Products from API</h1>
  <div>${state.products
  .map(product => {
    return products
  })
  .join("")}
  </div>
`;
