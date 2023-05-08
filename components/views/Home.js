import html from "html-literal";
import design4long from "/assets/img/design4long.jpg";
import design12pants from "/assets/img/design12pants.jpg";
import * as images from "../../assets/img";

export default (state) => html`
<div class="featured">
  <img src="${design4long}" id="featuredImage">
  <section id="featuredText">
    <h2>Featured Designs</h2>
    <p>These are some of our new releases and favorite designs!</p>
  </section>
  <img src="${design12pants}" id="featuredImage">
</div>

<div class="designs">
  <h2>Our Designs</h2>
  <p>These are some of our designs.</p>
  <img id="ourDesigns">
  <img src="${images["design1t"]}" />
  <img src="${images.design2t}" />
</div>

`;
