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


<div class="designsGrid">
  <div id="grid">
  <img id="ourDesigns" src="${images.design1t}" />
      <h3>T-Shirt Design 1</h3>
      <p>This is a T-shirt with intersecting stripes that resemble a DNA strand.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design2t}" />
      <h3>T-Shirt Design 2</h3>
      <p>This T-shirt shows the Zaely logo loud and proud across the upper chest, with a geometrical design pattern that covers the rest of the shirt.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design3t}" />
      <h3>T-Shirt Design 3</h3>
      <p>The snake T-shirt is a rather simple design that will come with different color palletes for your convenience.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design4long}" />
      <h3>Longsleeve T-Shirt 1</h3>
      <p>Our long sleeve gradient T-shirt also comes in a variety of different colors that shade to darker colors towards the bottom.</p>
  </div>


  <div id="grid">
  <img id="ourDesigns" src="${images.design5t}" />
      <h3>Longsleeve T-Shirt 2</h3>
      <p>The first of the Sky-Line collection. The idea is clothing that shows different seasons or weather patterns for however you feel.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design6hoodie}" />
      <h3>Hoodie Design</h3>
      <p>This is a basic hoodie with the Zaely logo across the front. They come slightly longer and thicker than most hoodies, creating a relaxing experience.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design7jacket}" />
      <h3>Windbreaker Design</h3>
      <p>Our windbreaker jacket is extremely lightweight. Made from flexible and water resistant materials, it is great for any spring day.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design8sleeveless}" />
      <h3>Sleeveless T-Shirt Design</h3>
      <p>Our sleeveless T-shirt has a design similar to ancient Japanese arhitecture. It is long-cut, meaning the sleeve holes are larger than your average sleeveless shirt. The breathability makes it much more suitable for physical activities.</p>
  </div>


  <div id="grid">
  <img id="ourDesigns" src="${images.design9shorts}" />
      <h3>Athletic Shorts Design</h3>
      <p>Although the design needs work, the idea is to make comforatable shorts that have eye-catching designs.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design10shorts}" />
      <h3>Short-Shorts Design</h3>
      <p>Our short-shorts are great for anything athletic, and are extremely stylish</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design11pants}" />
      <h3>Joggers Design</h3>
      <p>The idea of this design was simplicity. Something low-key an comforatable for those who don't want their pants to be the centerpiece of their outfit</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design12pants}" />
      <h3>Jeans Design</h3>
      <p>Our ripped jeans are extremely breathable and durable.</p>
  </div>


  <div id="grid">
  <img id="ourDesigns" src="${images.design13socks}" />
      <h3>Socks Design 1</h3>
      <p>Our crew socks are very simple, with the logo displaying on the side.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design14socks}" />
      <h3>Socks Design 2</h3>
      <p>Our crew socks are very simple, with the logo displaying on the side.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design15user}" />
      <h3>Whirlpool T-Shirt Design</h3>
      <p>The idea of this design was for the shirt to have a similar look of a tie-die shirt that creates a whirlpool effect.</p>
  </div>
  <div id="grid">
  <img id="ourDesigns" src="${images.design16user}" />
      <h3>Swim Shorts Design</h3>
      <p>These swim shorts are made out of water-resistant material, with basic design patterns to give them a little pop.</p>
  </div>
</div>
`;
