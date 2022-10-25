// const url= 'https://api.github.com/users/';
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const spin = document.querySelector(".lds-spinner")

async function getUser(user) {
  const url= 'https://api.github.com/users/';
  const resp = await fetch(url + user)
  const respData = await resp.json();

  createUserCard(respData);
}
function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
    <img src="${user.avatar_url}" alt="${user.name}" />
    </div>
    <div>
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
     <ul>
     <li> followers ${user.followers}</li>
     <li> following ${user.following}</li>
     <li> repo ${user.public_repos}</li>
     <li> location ${user.location}</li>
     <li> created: ${user.created_at}</li>
     <li> updated ${user.updated_at}</li>
     </ul>
     </div>
    </div>

   `;
   main.innerHTML = cardHTML;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();


  const user = search.value;
  if (user) {
    getUser(user)
    search.value = "";  
    spin.style.display="none"
  }
    return SyntaxError;
})
 