import html from "html-literal";

export default () => html`
<div class="contactUs">
  <form id="contactUs" method="POST" action="">
    <h2>Contact Us</h2>
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="EX) John Doe" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" name="email" id="email" placeholder="example@email.com" required />
    </div>
    <div>
    <label for="reason">Reason:</label>
    <select id="reason" name="reason">
      <option>Select a Reason</option>
      <option>Question</option>
      <option>Problem with Clothing</option>
      <option>Return Item</option>
      <option>Other</option>
    </select>
    </div>
    <div>
      <label for="description">Description:</label>
        <input type="text" name="description" id="description" placeholder="I am contacting you because..." required>
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
`;
