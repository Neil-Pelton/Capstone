import html from "html-literal";

export default state => html`
  <table id="responses">
    <tr>
      <th>Name</th>
      <th class="hidden--mobile">Email</th>
      <th class="hidden--mobile">Reason</th>
      <th>Description</th>
      <th>Likes</th>
    </tr>
    ${state.responses //getting data from state bc of what we did with API's in root index.js
    .map(responses => {
      return `<tr>
        <td>${responses.name}</td>
        <td class="hidden--mobile">${responses.email}</td>
        <td class="hidden--mobile">${responses.reason}</td>
        <td>${responses.description}</td>
        <td>
          <button onclick="Toggle()" id="btn1" class="btn">
            <i class="fa-solid fa-heart"></i>
          </button>
        </td>
      </tr>`;
    })
    .join("")}
  </table>
  `;
