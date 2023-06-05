# Capstone Goals
- Optimize capstone styling to be Mobile-First and Responsive by using Media Queries and Flexbox
- CSS responsive styling, media queries, and positioning with flexbox
- Refine the styling of your application with CSS
- Start planning how to present your awesome capstone application on demo day


# To-Do
- make page responsive to window size changes
    - home          DONE
    - products      CHECK IDEAS
        - on hidden mobile, only display img and title. Clicking on title shows pop-up with description and price
    - responses     DONE
        - on hidden mobile, only display name and description

- Change descriptions of designs 9-16 on home page

- Style both API pages

- add "like" buttons with counter for designs page
    - maybe add a hidden "comments" section under pictures using icon?
.btn {
  background: transparent;
  border: none;
  outline: none;
  color: grey;
}
.btn i:hover {
  cursor: pointer;
}


<td class="heart-btn">
          <button onclick="toggleLike()" id="btn1" class="btn">
            <i class="fa-solid fa-heart"></i>
          </button>
        </td>





- spice up the contact page, it's so fuckin boring right now

- change layout of About Us page. Maybe make it more similar to wireframe? Mainly address the issue of how it will look on both screen sizes. LOOK AT EXAMPLES OF FLOAT

- add color palette, experiment with soft colors and if time permits, possibly a gradient from top to bottom of the page. include gold

- fix CSS for description text-box on Contact page

- delete all repeated responses on Responses page, consider

- LOGO

- clicking on featured designs takes you to it's description
    - fix sizing for mobile

- ADD USER SUBMISSIONS PAGE


# Ideas
- add id's to <th>email, reason</th>, hidden mobile view only shows name and description.
- add id's to <th>description, price</th>, hidden mobile view only shows title and image
    - clicking title shows pop-up with full description of item

- add "like" button with counter to responses page
    - event handler - listen for click - likes+1=newTotal - display like icon and count - if clicked stay clicked (avoid spamming likes)
    - create function in index.js for counter
    - if red, x+1. if grey, x-1. start navy blue

- reference wireframes: helps for demo day and presentation to have the product similar to the wireframe, and dive into why I made the changes that I did

- add sections for each response, make it look cleaner and more organized




# Notes
- clean up CSS page, it's a mess :`(

-


# Done :D
- Start building HTML for your project
- Build an <index.html> page with these sections: <header>, <nav>, <main>, and <footer>
- Create a style.css file, link it to your Index page, and start styling your home page.
-Continue building out your capstone HTML
- Add an About and Contact page, and style these with CSS
- HTML forms and form handling with and without Formspree
- Be able to explain Object-Oriented Programming (OOP) principles
- Create JS Objects with function Constructors, create JS classes, and extending prototypes
- Convert your capstone to an SPA
- From this point onward you should be working on your SPA project
- Add functionality as you learn new things in class
- Deploy your capstone frontend to Netlify
- Implement an external API into your capstone
- Install nodemon for the local environment
- Implement the server folder in your capstone repo
- Implement the basic HTTP node server with the status route (see 8.2)
- Implement the body.Parser middleware
- Setup a MongoDB Atlas Database (online) for your capstone
- Create at least one API model and route that pertains to your capstone
- Host the backend on Render.com and connect MongoDB Atlas using a environment variable
- Connect your hosted API to your capstone SPA


- display form responses on a page
- use an external products API to show understanding
- add bs designs with labels and descriptions as placeholders
- make home page into grid: separate div for each picture, containing img, <h3>Title</h3>, and <p>description</p>
    - make a grid for each view since grid isn't responsive
    - fixes the problem of text not aligning with imgs in columns
    - easier to manipulate than columns
