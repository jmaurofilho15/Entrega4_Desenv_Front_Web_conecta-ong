/*
 * assets/js/projectLoader.js
 * Carrega projetos dinamicamente.
 */
document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('project-list-container');
    if (projectContainer) {
        fetchAndRenderProjects(projectContainer);
    }
});

async function fetchAndRenderProjects(container) {
    try {
        const response = await fetch('assets/data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        renderProjects(projects, container);
    } catch (error) {
        console.error("Falha ao carregar projetos:", error);
        container.innerHTML = "<p class='alert alert-error'>Não foi possível carregar os projetos. Tente novamente.</p>";
    }
}

function renderProjects(projects, container) {
    if (projects.length === 0) {
        container.innerHTML = "<p>Nenhum projeto encontrado.</p>";
        return;
    }
    const projectsHTML = projects.map(project => createProjectCard(project)).join('');
    container.innerHTML = projectsHTML;
}

function createProjectCard(project) {
    return `
    <article class="project-card" id="${project.id}">
        <div class="card-content">
            <div>
                <span class="badge ${project.badgeClass}">${project.badge}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="btn btn-secondary">Saiba Mais</a>
        </div>
    </article>
    `;
}