import html from "html-literal";

export default (state) => html`
<div class="featured">
  <img src="assets\img\design4long.jpg" id="featuredImage">
  <section id="featuredText">
    <h2>Featured Designs</h2>
    <p>These are some of our new releases and favorite designs!</p>
  </section>
  <img src="assets/img/design12pants.jpg" id="featuredImage">
</div>

<div class="designs">
  <h2>Our Designs</h2>
  <p>These are some of our designs.</p>
</div>

<img src="../designFullGrid.jpg">
`;
