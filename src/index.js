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
    createEditForm(contact)
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

// [TODO] Write Code
function renderNewContactForm() {

  viewSection.innerHTML = ""

  const newContactFormEl = document.createElement('form')
  newContactFormEl.classList.add('form-stack', 'light-shadow', 'center', 'contact-form')

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
  
  newContactFormEl.addEventListener('submit', function (event) {
    event.preventDefault()
    getNewContactFormInput(event)
    newContactFormEl.reset()

})

  const viewSectionEl = document.querySelector('.view-section')
  viewSectionEl.append(newContactFormEl)

}

function getNewContactFormInput() {

  const firstName = event.target['first-name-input'].value
  const lastName = event.target['last-name-input'].value
  const street = event.target['street-input'].value
  const city = event.target['city-input'].value
  const postCode = event.target['post-code-input'].value
  let blockContact = new Boolean(true);
  let block = document.querySelector("#block-checkbox");
    if (block.checked) {
      blockContact = true;
    } else {
      blockContact = false;
    }

    const newAddress = {
      "street": street,
      "city": city,
      "postCode": postCode
    }

    let newContact = {
      "firstName": firstName,
      "lastName": lastName,
      "blockContact": blockContact,
      "addressId": null
    }

    
    

    fetch('http://localhost:3000/addresses', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAddress)
    }).then(function(response) {
      return response.json()
    }).then(function(address) {
      newContact.addressId = address.id
      fetch('http://localhost:3000/contacts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    }).then(function(response) {
      return response.json()
    }).then(function(latestContact) {

      latestContact.address = newAddress
      state.contacts.push(latestContact)
      state.selectedContact = latestContact
      renderContactView()
      
  })
})
}

 



function createEditForm(contact) {

  viewSection.innerHTML = ""

  const editContactFormEl = document.createElement('form')
  editContactFormEl.classList.add('form-stack', 'light-shadow', 'center', 'contact-form')

  const h1El = document.createElement('h1')
  h1El.innerText = "Edit Contact"

  const firstNameLabelEl = document.createElement('label')
  firstNameLabelEl.setAttribute('for', "first-name-input")
  firstNameLabelEl.innerText = "First Name:"

  const firstNameInputEl = document.createElement('input')
  firstNameInputEl.setAttribute('id', "first-name-input")
  firstNameInputEl.setAttribute('name', "first-name-input")
  firstNameInputEl.setAttribute('type', "text")
  firstNameInputEl.setAttribute('placeholder', contact.firstName)


  const lastNameLabelEl = document.createElement('label')
  lastNameLabelEl.setAttribute('for', "last-name-input")
  lastNameLabelEl.innerText = "Last Name:"

  const lastNameInputEl = document.createElement('input')
  lastNameInputEl.setAttribute('id', "last-name-input")
  lastNameInputEl.setAttribute('name', "last-name-input")
  lastNameInputEl.setAttribute('type', "text")
  lastNameInputEl.setAttribute('placeholder', contact.lastName)


  const streetInputLabelEl = document.createElement('label')
  streetInputLabelEl.setAttribute('for', "street-input")
  streetInputLabelEl.innerText = 'Street:'

  const streetInputEl = document.createElement('input')
  streetInputEl.setAttribute('id', "street-input")
  streetInputEl.setAttribute('name', "street-input")
  streetInputEl.setAttribute('type', "text")
  streetInputEl.setAttribute('placeholder', contact.address.street)


  const cityInputLabelEl = document.createElement('label')
  cityInputLabelEl.setAttribute('for', "city-input")
  cityInputLabelEl.innerText = 'City:'

  const cityInputEl = document.createElement('input')
  cityInputEl.setAttribute('id', "city-input")
  cityInputEl.setAttribute('name', "city-input")
  cityInputEl.setAttribute('type', "text")
  cityInputEl.setAttribute('placeholder', contact.address.city)


  const postCodeInputLabelEl = document.createElement('label')
  postCodeInputLabelEl.setAttribute('for', "post-code-input")
  postCodeInputLabelEl.innerText = 'Post Code:'

  const postCodeInputEl = document.createElement('input')
  postCodeInputEl.setAttribute('id', "post-code-input")
  postCodeInputEl.setAttribute('name', "post-code-input")
  postCodeInputEl.setAttribute('type', "text")
  cityInputEl.setAttribute('placeholder', contact.address.postCode)


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
  actionsButtonEl.innerText = "Edit"

  actionsDivEl.append(actionsButtonEl)

  editContactFormEl.append(h1El, firstNameLabelEl, firstNameInputEl, lastNameLabelEl, lastNameInputEl, streetInputLabelEl, streetInputEl, cityInputLabelEl,
    cityInputEl, postCodeInputLabelEl, postCodeInputEl, divBlockEl, actionsDivEl)
  
    editContactFormEl.addEventListener('submit', function (event) {
    event.preventDefault()
    editContact(event)
  })
    
  const viewSectionEl = document.querySelector('.view-section')
  viewSectionEl.append(editContactFormEl)

}

function editContact() {

}


function main() {
  listenNewContactButton();
  getContacts();
}

main()
