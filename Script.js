//Add click event listener to menu btn to toggle menu
const expandedNav = document.querySelector('.menu-btn');
const navLinks = document.querySelector('#desktop_nav');

expandedNav.addEventListener('click', () => {
  expandedNav.classList.toggle('active');
  expandedNav.classList.toggle('active-menu-btn');
  navLinks.classList.toggle('hide');
  navLinks.classList.toggle('mobile-menu');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.className === 'hover_effect' && navLinks.classList.contains('mobile-menu')) {
    expandedNav.classList.toggle('active');
    expandedNav.classList.toggle('active-menu-btn');
    navLinks.classList.toggle('hide');
    navLinks.classList.toggle('mobile-menu');
  }
});

//Variable to store project objects and properties
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
  }
}

//Function to addlist of technologies to portifolio project
function addTechnologies(card) {
  for(let i = 0; i < workProperties[card].technologies.length; i++) {
    let tag = document.createElement("li");
    tag.innerHTML = `<span>${workProperties[card].technologies[i]}</span>`;
    tag.classList.add('tag-item');
    if (document.querySelector('body').contains(document.querySelector('.popup'))) {
      document.querySelector('.popup .tags').appendChild(tag);      
    }
    else {
      document.querySelector(`#${card} .tags`).appendChild(tag);
    }    
  }    
  return ;
};

// Function to add portifolio project html to work section
function addProject (project) {
  let workItem = document.createElement("div");
  workItem.setAttribute('id', project);
  workItem.classList.add("work_item");
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
  document.querySelector('#Works').appendChild(workItem);
  addTechnologies(project);
}

// Iterate through work properties and add elements and project property values to the work section
for (var i in workProperties) {
  addProject(i);
}

// Popup window
const workSection = document.querySelector('#Works');
const overlay = document.createElement('section');
overlay.classList.add('popupOverlay');
overlay.classList.add('hide');
const projectWindow = document.createElement('div');
projectWindow.classList.add('hide');
projectWindow.classList.add('popup');

// Close window
function closePopupWindow(){
  const closePopup = document.querySelector('.popupClose');
  closePopup.addEventListener('click', () => {
    projectWindow.classList.toggle('hide');
    overlay.classList.toggle('hide');
  })
}

//Add popup window html
function popupWindow(id) {
  projectWindow.classList.toggle('hide');
  overlay.classList.toggle('hide');
  document.querySelector('body').appendChild(overlay);
  document.querySelector('body').appendChild(projectWindow);
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
    <img src="Images/Separator Bottom.png" class='popupSeperator' alt="">
    <div class="popupLinks">
      <div class="project_link btn_effect">
        <p>
          <a href="#">See Live</a><img src="Images/External link icon.png" alt="">
        </p>
      </div><div class="project_link btn_effect"><p><a href="#">See Source</a><img src="Images/Github popup icon.png" alt=""></p></div></div></div>`; addTechnologies(id); closePopupWindow(); }
workSection.addEventListener('click', (event) => { if (event.target.className === 'project_link btn_effect') { const getProjectId = event.target.parentElement.parentElement.id; popupWindow(getProjectId); } });