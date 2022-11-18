//  Add click event listener to menu btn to toggle menu
const expandedNav = document.querySelector('.menu-btn');
const navLinks = document.querySelector('#desktop_nav');
const body = document.querySelector('body');
const workSection = document.querySelector('#Works');

function mobileMenuClasses() {
  expandedNav.classList.toggle('active');
  expandedNav.classList.toggle('active-menu-btn');
  navLinks.classList.toggle('hide');
  navLinks.classList.toggle('mobile-menu');
  body.classList.toggle('noscroll');
}

expandedNav.addEventListener('click', () => {
  mobileMenuClasses();
});

navLinks.addEventListener('click', (event) => {
  if (event.target.className === 'hover_effect' && navLinks.classList.contains('mobile-menu')) {
    mobileMenuClasses();
  }
});

//  Variable to store project objects and properties
const workProperties = {
  project1: {
    featuredImage: 'images/Snapshoot Portfolio.png',
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    liveVersionLink: 'Link to live',
    sourceLink: 'link to source',
  },

  project2: {
    featuredImage: 'images/Snapshoot Portfolio (1).png',
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    liveVersionLink: 'Link to live',
    sourceLink: 'link to source',
  },

  project3: {
    featuredImage: 'images/Snapshoot Portfolio (2).png',
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    liveVersionLink: 'Link to live',
    sourceLink: 'link to source',
  },

  project4: {
    featuredImage: 'images/Snapshoot Portfolio (3).png',
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    summary: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript'],
    liveVersionLink: 'Link to live',
    sourceLink: 'link to source',
  },
};

//  Function to addlist of technologies to portifolio project
function addTechnologies(card) {
  Object.keys(workProperties[card].technologies).forEach((i) => {
    const tag = document.createElement('li');
    tag.innerHTML = `<span>${workProperties[card].technologies[i]}</span>`;
    tag.classList.add('tag-item');
    if (body.contains(document.querySelector('.popup'))) {
      document.querySelector('.popup .tags').appendChild(tag);
    } else {
      document.querySelector(`#${card} .tags`).appendChild(tag);
    }
  });
}

// Function to add portifolio project html to work section
function addProject(project) {
  const workItem = document.createElement('div');
  workItem.setAttribute('id', project);
  workItem.classList.add('work_item');
  workItem.innerHTML = `
  <img src="${workProperties[project].featuredImage}" alt="project snapshot" class="portifolio_img">
  <div class="work_details">
    <div class="project">
      <h2 class="work_item_header">${workProperties[project].name}</h2>
      <div class="work_history">
        <p class="client">
          <span class="client_name">${workProperties[project].client}</span>
        </p>
        <p>
          <img src="images/Counter.png" alt="">                            
        </p>
        <p class="role">
          <span class="role_name">${workProperties[project].role}</span>
        </p>
        <p>
          <img src="images/Counter.png" alt="">                            
        </p>
        <p>
          <span class="date">${workProperties[project].year}</span>
        </p>
      </div>
    </div>
    <p class="work_summary">${workProperties[project].summary}</p>
    <ul class="tags">    
    </ul>
    <div class="project_link btn_effect">
        See Project
    </div>
  </div> 
  </div>
  `;
  workSection.appendChild(workItem);
  addTechnologies(project);
}

//  Iterate through work properties and add elements and project property values to the work section
Object.keys(workProperties).forEach((property) => addProject(property));

//  Popup window variables
const overlay = document.createElement('section');
overlay.classList.add('popupOverlay');
overlay.classList.add('hide');
const projectWindow = document.createElement('div');
projectWindow.classList.add('hide');
projectWindow.classList.add('popup');

function popupWindowClasses() {
  projectWindow.classList.toggle('hide');
  overlay.classList.toggle('hide');
  body.classList.toggle('noscroll');
}

//  Close window function
function closePopupWindow() {
  const closePopup = document.querySelector('.popupClose');
  closePopup.addEventListener('click', () => {
    popupWindowClasses();
  });
}

//  Add popup window html
function popupWindow(id) {
  popupWindowClasses();
  body.appendChild(overlay);
  body.appendChild(projectWindow);
  projectWindow.innerHTML = `  
  <div class="work_details">
    <div class="project">
      <h2 class="work_item_header">${workProperties[id].name}</h2>
      <button class='popupClose'>&times</button>
      <div class="work_history">
        <p class="client">
          <span class="client_name">${workProperties[id].client}</span>
        </p>
        <p>
          <img src="images/Counter.png" alt="">                            
        </p>
        <p class="role">
          <span class="role_name">${workProperties[id].role}</span>
        </p>
        <p>
          <img src="images/Counter.png" alt="">                            
        </p>
        <p>
          <span class="date">${workProperties[id].year}</span>
        </p>
      </div>
    </div>
    <img src="${workProperties[id].featuredImage}" alt="project snapshot" class="portifolio_img">
    <p class="work_summary">${workProperties[id].description}</p>
    <ul class="tags">
    </ul>
    <img src="images/Separator Bottom.png" class='popupSeperator' alt="">
    <div class="popupLinks">
      <div class="project_link btn_effect">
        <p>
          <a href="#">See Live</a>
          <img src="images/External link icon.png" alt="">
        </p>
      </div>
      <div class="project_link btn_effect">
        <p>
          <a href="#">See Source</a>
          <img src="images/Github popup icon.png" alt="">
        </p>
      </div>
    </div>
  </div>
  `;
  addTechnologies(id);
  closePopupWindow();
}

workSection.addEventListener('click', (event) => {
  if (event.target.className === 'project_link btn_effect') {
    const getProjectId = event.target.parentElement.parentElement.id;
    popupWindow(getProjectId);
  }
});

//  Form Validation
const form = document.querySelector('#contact_section form');
const email = form.querySelector('#email');
const error = form.querySelector('.error');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const submitButton = form.querySelector('#form_submit');
const senderMessage = form.querySelector('#msg');

function setError(element, message) {
  error.innerText = message;
  element.classList.add('error-input');
  error.classList.remove('hide');
}

function setSuccess(element) {
  senderMessage.classList.add('sent');
  element.classList.remove('error-input');
  error.classList.add('hide');
  submitButton.value = 'Sent';
  submitButton.classList.add('success');
}

function validateEmail() {
  const emailValue = email.value.trim();
  if (!emailRegex.test(emailValue)) {
    setError(email, 'Invalid email address');
  } else {
    setSuccess(email);
  }
}

form.addEventListener('submit', () => {
  validateEmail();
});