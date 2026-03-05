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
// GITHUB API - MOSTRAR APENAS REPOS ESPECÍFICOS
// ============================

async function loadRepos() {
    try {
        const response = await fetch("https://api.github.com/users/guelitoo/repos");
        const repos = await response.json();

        const repoList = document.getElementById("repo-list");
        if (!repoList) return;

        // 👇 COLOQUE AQUI APENAS OS REPOSITÓRIOS QUE VOCÊ QUER MOSTRAR
        const allowedRepos = [
            "projeto-reobote-final",
            "PFE1",
            "PBE2",
            "PSOF2",
            "PPDM"
        ];

        const filteredRepos = repos.filter(repo =>
            allowedRepos.includes(repo.name)
        );

        repoList.innerHTML = ""; // limpa antes de renderizar

        filteredRepos.forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("repo-card");

            div.innerHTML = `
                <h3>
                    <a href="${repo.html_url}" target="_blank">
                        ${repo.name}
                    </a>
                </h3>
                <p>${repo.description || "Projeto desenvolvido por Miguel Silva Santos."}</p>
            `;

            repoList.appendChild(div);
        });

    } catch (error) {
        console.error("Erro ao carregar repositórios:", error);
    }
}

loadRepos();