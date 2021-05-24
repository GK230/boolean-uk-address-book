const viewSection = document.querySelector(".view-section");
const contactsSection = document.querySelector(".contacts-section");

const state = {
  contacts: [],
  selectedContact: null
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;

      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement("ul");
  listEl.className = "contacts-list";

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);

    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement("section");

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Address";

  containerEl.append(headingEl);

  const streetText = document.createElement("p");
  streetText.innerText = address.street;

  containerEl.append(streetText);

  const cityText = document.createElement("p");
  cityText.innerText = address.city;

  containerEl.append(cityText);

  const postCodeText = document.createElement("p");
  postCodeText.innerText = address.postCode;

  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;

  if (!contact) return;

  viewSection.innerHTML = "";

  const containerEl = document.createElement("article");
  containerEl.className = "center light-shadow address-card";

  const headingEl = document.createElement("h1");

  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;

  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);

  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement("li");

  const headingEl = document.createElement("h3");

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement("button");
  viewBtn.className = "button grey";
  viewBtn.innerText = "View";

  viewBtn.addEventListener("click", function () {
    state.selectedContact = contact;

    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", function () {
    // [TODO] Write Code
  });

  listItemEl.append(editBtn);

  return listItemEl;
}

function listenNewContactButton() {
  const btn = document.querySelector(".new-contact-btn");

  btn.addEventListener("click", function () {
    // [TODO] Write Code

      renderNewContactForm();
    })
 


}

// var something = (function() {
//   var executed = false;
//   return function() {
//       if (!executed) {
//           executed = true;
//           // do something
//       }
//   };
// })();

// [TODO] Write Code


function renderNewContactForm() {

  const newContactFormEl = document.createElement('form')
  newContactFormEl.classList.add('form-stack', 'light-shadow', 'center', 'contact-form')
  newContactFormEl.innerHTML = ""

  const h1El = document.createElement('h1')
  h1El.innerText = "Create Contact"

  const firstNameLabelEl = document.createElement('label')
  firstNameLabelEl.setAttribute('for', "first-name-input")
  firstNameLabelEl.innerText = "First Name:"

  const firstNameInputEl = document.createElement('input')
  firstNameInputEl.setAttribute('id', "first-name-input")
  firstNameInputEl.setAttribute('name', "first-name-input")
  firstNameInputEl.setAttribute('type', "text")

  const lastNameLabelEl = document.createElement('label')
  lastNameLabelEl.setAttribute('for', "last-name-input")
  lastNameLabelEl.innerText = "Last Name:"

  const lastNameInputEl = document.createElement('input')
  lastNameInputEl.setAttribute('id', "last-name-input")
  lastNameInputEl.setAttribute('name', "last-name-input")
  lastNameInputEl.setAttribute('type', "text")

  const streetInputLabelEl = document.createElement('label')
  streetInputLabelEl.setAttribute('for', "street-input")
  streetInputLabelEl.innerText = 'Street:'

  const streetInputEl = document.createElement('input')
  streetInputEl.setAttribute('id', "street-input")
  streetInputEl.setAttribute('name', "street-input")
  streetInputEl.setAttribute('type', "text")

  const cityInputLabelEl = document.createElement('label')
  cityInputLabelEl.setAttribute('for', "city-input")
  cityInputLabelEl.innerText = 'City:'

  const cityInputEl = document.createElement('input')
  cityInputEl.setAttribute('id', "city-input")
  cityInputEl.setAttribute('name', "city-input")
  cityInputEl.setAttribute('type', "text")

  const postCodeInputLabelEl = document.createElement('label')
  postCodeInputLabelEl.setAttribute('for', "post-code-input")
  postCodeInputLabelEl.innerText = 'Post Code:'

  const postCodeInputEl = document.createElement('input')
  postCodeInputEl.setAttribute('id', "post-code-input")
  postCodeInputEl.setAttribute('name', "post-code-input")
  postCodeInputEl.setAttribute('type', "text")

  const divBlockEl = document.createElement('div')
  divBlockEl.setAttribute('class', "checkbox-section")

  const blockCheckBoxEl = document.createElement('input')
  blockCheckBoxEl.setAttribute('id', "block-checkbox")
  blockCheckBoxEl.setAttribute('name', "block-checkbox")
  blockCheckBoxEl.setAttribute('type', "checkbox")

  const blockCheckBoxLabelEl = document.createElement('label')
  blockCheckBoxLabelEl.setAttribute("for", "block-checkbox")
  blockCheckBoxLabelEl.innerText = 'Block'

  divBlockEl.append(blockCheckBoxEl, blockCheckBoxLabelEl)

  const actionsDivEl = document.createElement('div')
  actionsDivEl.setAttribute('class', "actions-section")

  const actionsButtonEl = document.createElement('button')
  actionsButtonEl.classList.add("button", "blue")
  actionsButtonEl.setAttribute('type', "submit")
  actionsButtonEl.innerText = "Create"

  actionsDivEl.append(actionsButtonEl)

  newContactFormEl.append(h1El, firstNameLabelEl, firstNameInputEl, lastNameLabelEl, lastNameInputEl, streetInputLabelEl, streetInputEl, cityInputLabelEl,
    cityInputEl, postCodeInputLabelEl, postCodeInputEl, divBlockEl, actionsDivEl)

  const viewSectionEl = document.querySelector('.view-section')
  viewSectionEl.append(newContactFormEl)

}

function getNewContactFormInput() {
  
}




function main() {
  listenNewContactButton();
  getContacts();
}

main();
