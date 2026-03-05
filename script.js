// ============================
// MENU MOBILE
// ============================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// ============================
// ANIMAÇÃO AO CLICAR NA NAVBAR
// ============================

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }

        // Fecha menu mobile após clique
        navLinks.classList.remove('active');
    });
});

// ============================
// SCROLL SUAVE + FECHAR MENU
// ============================

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }

        navLinks.classList.remove('active');
        toggle.classList.remove('open');
    });
});


// ============================
// FUTURA INTEGRAÇÃO GITHUB API
// ============================

// Exemplo base (caso queira ativar novamente)
async function loadRepos() {
    try {
        const response = await fetch("https://api.github.com/users/guelitoo/repos");
        const repos = await response.json();

        const repoList = document.getElementById("repo-list");
        if (!repoList) return;

        repos.slice(0, 6).forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("repo-card");

            div.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || "Sem descrição"}</p>
            `;

            repoList.appendChild(div);
        });

    } catch (error) {
        console.error("Erro ao carregar repositórios:", error);
    }
}

// Ativar se quiser usar:
loadRepos();