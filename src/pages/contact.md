---
title: Contact
layout: base.njk
---

<div class="content contact-container">

## Let's Connect! ✨

Whether you want to collaborate, ask a question, or just say hi, I’d love to hear from you.  

<div class="contact-cards">

  <div class="contact-card">
    <h3>📧 Email</h3>
    <p><a href="mailto:sadsonata96@gmail.com">sadsonata96@gmail.com</a></p>
  </div>

  <div class="contact-card">
    <h3>💻 GitHub</h3>
    <p><a href="https://github.com/Abeeryu" target="_blank">github.com/Abeeryu</a></p>
  </div>

  <div class="contact-card">
    <h3>🔗 LinkedIn</h3>
    <p><a href="https://www.linkedin.com/in/abeer-younes-b1a986226/" target="_blank">linkedin.com/in/abeer-younes</a></p>
  </div>

</div>

</div>

<style>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.contact-card {
  background: #f8f8f8;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.contact-card a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.contact-card a:hover {
  text-decoration: underline;
}
</style>
