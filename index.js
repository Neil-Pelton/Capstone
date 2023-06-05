import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { after, capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  //add menu toggle to bars icon in nav bar
  document.querySelector(".fa-list").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //const responses = [];
      // Interate over the toppings input group elements
      // for (let input of inputList.responses) {
      //   // If the value of the checked attribute is true then add the value to the toppings array
      //   if (input.checked) { //if toppings checkbox is selected
      //     toppings.push(input.value);
      //   }
      // }

      const requestData = {
        name: inputList.name.value,
        email: inputList.email.value,
        reason: inputList.reason.value,
        description: inputList.description.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.RESPONSES_API_URL}/responses`, requestData)
        .then(response => {
          // Push the new response onto the Responses state responses attribute, so it can be displayed in the pizza list
          //store.Responses.responses.push(requestData);
          router.navigate("/responses");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Products":
        axios
          .get(`${process.env.FAKE_PRODUCTS_API_URL}`) //calling api from .env
          .then(response => {
            // Storing retrieved data in state
            console.log("response", response);
            store.Products.products = response.data; //takes api-products from Products.js from store folder,
          // .then((res) => res.json())
          // .then((json) => console.log(json))
            done()
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
          break;

        case "Responses":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.RESPONSES_API_URL}/responses`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Responses.responses = response.data; //response.data = array of objects
            done();
          })
          .catch((error) => { //if error occurs, catch "catches" error and returns:
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Products";

    render(store[view]);
  }
});

var btnvar1 = document.getElementById("btn1");
function toggleLike() {
  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "grey"
  }
  else {
    btnvar1.style.color = "red"
  }
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();



