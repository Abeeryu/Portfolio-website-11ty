---
title: Projects
layout: base.njk
---

<div class="content projects-container">

## My Projects 🚀

Here are some of the projects I’ve built using **Visual Studio** and modern web tools:

<div class="projects-grid">

  <!-- Project 1 -->
  <div class="project-card">
    <img src="/images/eleventy-site.png" alt="Eleventy Static Site Screenshot" />
    <div class="project-card-content">
      <h3>De Voorhoede Project</h3>
      <p>The website is built using the skills learned in the first semester of the FDND program, including HTML, CSS, basic JavaScript, layout, responsive design, accessibility, interaction, and working with a visual identity.</p>
      <p>Framework: Express</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/Abeeryu/the-startup-responsive-interactieve-website" target="_blank">GitHub</a>
      <a href="https://abeeryu.github.io/the-startup-responsive-interactieve-website/" target="_blank">Live Demo</a>
    </div>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <img src="/images/css-animation.png" alt="CSS Animation Project Screenshot" />
    <div class="project-card-content">
      <h3>Oba Project</h3>
      <p>The website is built for everyone</p>
      <p>Framework: Express</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/Abeeryu/the-web-is-for-everyone-interactive-functionality" target="_blank">GitHub</a>
      <a href="https://the-web-is-for-everyone-interactive.vercel.app/" target="_blank">Live Demo</a>
    </div>
  </div>

  <!-- Project 3 -->
  <div class="project-card">
    <img src="/images/css-animation.png" alt="CSS Animation Project Screenshot" />
    <div class="project-card-content">
      <h3>DEPT Weer Planner Project</h3>
      <p>The website is built for everyone</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/Abeeryu/proof-of-concept" target="_blank">GitHub</a>
      <a href="https://the-web-is-for-everyone-interactive.vercel.app/" target="_blank">Live Demo</a>
    </div>
  </div>

  <!-- Project 4 -->
  <div class="project-card">
    <img src="/images/css-animation.png" alt="CSS Animation Project Screenshot" />
    <div class="project-card-content">
      <h3>Profile Card Project</h3>
      <p>The website is built for everyone</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/Abeeryu/your-tribe-for-life-profile-card" target="_blank">GitHub</a>
      <a href="https://your-tribe-for-life-profile-card-sigma.vercel.app/" target="_blank">Live Demo</a>
    </div>
  </div>

  <!-- Project 5 -->
  <div class="project-card">
    <img src="/images/css-animation.png" alt="CSS Animation Project Screenshot" />
    <div class="project-card-content">
      <h3>Squad Page Project</h3>
      <p>The website is built for everyone</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/aliceafanasieva/your-tribe-for-life-squad-page" target="_blank">GitHub</a>
      <a href="https://squad-page-alisa-abeer.netlify.app/" target="_blank">Live Demo</a>
    </div>
  </div>

  <!-- Project 6 -->
  <div class="project-card">
    <img src="/images/css-animation.png" alt="CSS Animation Project Screenshot" />
    <div class="project-card-content">
      <h3>Civicsocialmedia Project</h3>
      <p>The website is built for everyone</p>
    </div>
    <div class="project-links">
      <a href="https://github.com/fdnd-agency/civicsocialmediatoolbox/tree/dev" target="_blank">GitHub</a>
      <a href="https://civicsocialmedia.netlify.app/" target="_blank">Live Demo</a>
    </div>
  </div>

</div>

</div>

<style>
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  grid-auto-rows: 1fr; /* equal row heights */
}

.project-card {
  background: #f8f8f8;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  display: flex;
  flex-direction: column;
}

.project-card-content {
  flex-grow: 1; /* fill vertical space */
}

.project-links {
  margin-top: auto; /* push links to bottom */
}

.project-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.8rem;
}

.project-links a {
  margin: 0 0.5rem;
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
}

.project-links a:hover {
  text-decoration: underline;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
