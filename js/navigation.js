(function() {
    // Initialize homepage
    loadDoc('/html/biography.html', (xhttp) => {
        document.getElementById('title').innerHTML = 'Biography';
        document.getElementById('content').innerHTML = xhttp.responseText;
    });

    let about = {
        menu: document.getElementById('about'),
        submenu: document.getElementById('about-submenu')
    }

    let portfolio = {
        menu: document.getElementById('portfolio'),
        submenu: document.getElementById('portfolio-submenu')
    }

    let contact = {
        menu: document.getElementById('contact'),
        submenu: document.getElementById('contact-submenu')
    }
    // Setup event listeners for menu options.
    about.menu.addEventListener('click', () => revealSubMenu(about));
    addEventListener('click', (obj) => hideSubMenu(obj, about));
    
    portfolio.menu.addEventListener('click', () => revealSubMenu(portfolio));
    addEventListener('click', (obj) => hideSubMenu(obj, portfolio));

    contact.menu.addEventListener('click', () => revealSubMenu(contact));
    addEventListener('click', (obj) => hideSubMenu(obj, contact));

    // About Me submenu.
    let biography = document.getElementById('biography');
    biography.addEventListener('click', () => changeWindow('Biography', 'biography'));

    let education = document.getElementById('education');
    education.addEventListener('click', () => changeWindow('Education', 'education'));

    let experience = document.getElementById('experience');
    experience.addEventListener('click', () => changeWindow('Work Experience', 'experience'));

    let skills = document.getElementById('skills');
    skills.addEventListener('click', () => changeWindow('Skills', 'skills'));

    // Portfolio submenu.
    let games = document.getElementById('games');
    games.addEventListener('click', () => changeWindow('Games', 'games'));

    let software = document.getElementById('software');
    software.addEventListener('click', () => changeWindow('Software', 'software'));

    let web = document.getElementById('web');
    web.addEventListener('click', () => changeWindow('Web Development', 'web'));

    let photography = document.getElementById('photography');
    photography.addEventListener('click', () => changeWindow('Photography', 'photography'));
    
    // Contact submenu.
    let social = document.getElementById('social');
    social.addEventListener('click', () => changeWindow('Social Media', 'social'));

    let email = document.getElementById('email');
    email.addEventListener('click', () => changeWindow('E-mail', 'email'));

})();

function revealSubMenu(object) {
    object.menu.classList.add('select');
    object.submenu.classList.remove('hidden');
    object.submenu.classList.add('roll-down');
}

function hideSubMenu(clicked, object) {
    if (clicked.target.id == object.menu.id ||
        clicked.target.id == object.submenu.id) return;

    object.menu.classList.remove('select');
    object.submenu.classList.add('hidden');
    object.submenu.classList.remove('roll-down');
}

function changeWindow(title, url) {
    let window = document.getElementById('window');
    let newWindow = window.cloneNode(true);

    window.addEventListener('animationend', () => createWindow());
    window.addEventListener('webkitAnimationEnd', () => createWindow());
    window.classList.add('pop-down');

    function createWindow() {
        window.remove();
        loadDoc('/html/' + url + '.html', (xhttp) => {
            document.getElementById('title').innerHTML = title;
            document.getElementById('content').innerHTML = xhttp.responseText;
        });
        document.body.append(newWindow);
    }
}

function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
   };
    xhttp.open("GET", url, true);
    xhttp.send();
}