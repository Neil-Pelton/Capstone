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

<div class="designsHeader">
  <h2>Our Designs</h2>
  <p>These are some of our designs.</p>
</div>
<div class="designs">
  <div class="designColumns">
    <img id="ourDesigns" src="${images["design1t"]}" />
    <img id="ourDesigns" src="${images.design2t}" />
    <img id="ourDesigns" src="${images.design3t}" />
    <img id="ourDesigns" src="${images.design4long}" />
    <img id="ourDesigns" src="${images.design5t}" />
    <img id="ourDesigns" src="${images.design6hoodie}" />
    <img id="ourDesigns" src="${images.design7jacket}" />
    <img id="ourDesigns" src="${images.design8sleeveless}" />
  </div>
  <div class="designColumns">
    <p>This is a T-shirt with intersecting stripes that resemble a DNA strand.</p>
    <p>This T-shirt shows the Zaely logo loud and proud across the upper chest, with a geometrical design pattern that covers the rest of the shirt.</p>
    <p>The snake T-shirt is a rather simple design that will come with different color palletes for your convenience.</p>
    <p>Our long sleeve gradient T-shirt also comes in a variety of different colors that shade to darker colors towards the bottom.</p>
    <p>The first of the Sky-Line collection. The idea is clothing that shows different seasons or weather patterns for however you feel.</p>
    <p>This is a basic hoodie with the Zaely logo across the front. They come slightly longer and thicker than most hoodies, creating a relaxing experience.</p>
    <p>Our windbreaker jacket is extremely lightweight. Made from flexible and water resistant materials, it is great for any spring day.</p>
    <p>Our sleeveless T-shirt has a design similar to ancient Japanese arhitecture. It is long-cut, meaning the sleeve holes are larger than your average sleeveless shirt. The breathability makes it much more suitable for physical activities.</p>

  </div>
  <div class="designColumns">
    <img id="ourDesigns" src="${images.design9shorts}" />
    <img id="ourDesigns" src="${images.design10shorts}" />
    <img id="ourDesigns" src="${images.design11pants}" />
    <img id="ourDesigns" src="${images.design12pants}" />
    <img id="ourDesigns" src="${images.design13socks}" />
    <img id="ourDesigns" src="${images.design14socks}" />
    <img id="ourDesigns" src="${images.design15user}" />
    <img id="ourDesigns" src="${images.design16user}" />
  </div>
  <div class="designColumns">

  </div>
</div>
`;
