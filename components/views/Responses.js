import html from "html-literal";

export default state => html`
  <table id="responses">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Reason</th>
      <th>Description</th>
    </tr>
    ${state.responses //getting data from state bc of what we did with API's in root index.js
      .map(responses => {
        return `<tr><td>${responses.name}</td><td>${responses.email}</td><td>${
          responses.reason
        }</td><td>${responses.description}</td>`;
      })
      .join("")}
  </table>
  `;
