import html from "html-literal";
import founders from "/assets/img/founders.jpg";

export default () => html`
<div class="about">
  <h1 id="about">About Us</h1>

  <div class="aboutUs" >
  <h3>How We Started</h3>
      <p>We have been great friends since highschool, bonding over similar ideals and ambitions. We've both wanted to start a business for quite some time and have come up with countless ideas over the years. After numerous hours of reflecting, we committed to the idea for Zaely Fashion. Izaiah has always been incredibly into fashion: always looking at new releases, always looking for new combinations with outfits, and always thinking of how he would change them. We wanted to create our own brand of what we like, but more importantly, we wanted a way for our community to be involved in the design process. I created this website as a way for the community to tell us which designs they like or dislike, what they would change, and send us some of their designs.</p>
  </div>

  <div class="aboutPath">
    <div class="column">

      <img src="${founders}" id="aboutFounders">
    <p>My name is Neil (right), to my left is Izaiah, and we are 22 year old entrepreneurs.  </p>
    </div>
    <div class="column">
      <h3>Path We Took</h3>
      <p>Before we had the idea for Zaely, we both started down our own path in coding. He started a self-paced course called the Odin Project, and I enrolled in a bootcamp called SavvyCoders. With the help of my amazing instructors, I was able to create this website from scatch. In his course, he learned all about graphic design. Once we each finished our education, we dove straight into the design process of both the clothes and our platform.</p>
    </div>
  </div>
</div>
`;
