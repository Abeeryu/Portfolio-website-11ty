---
title: Home
layout: base.njk
---

<section id="home" class="hero">
  <h1 class="big-title">
    <span>
    PORTFOLIO
    </span>
  </h1>
  <p class="small-text">Curious? come and have a look!</p>
  <p class="small-text btn-hover">
    <a href="/projects/">Bekijk projecten</a>
  </p>
</section>

<style>
  .big-title {
    /* background: hotpink; */
    font-size: 15vw;
    animation-name: scale-down;
    animation-range: 60% exit;
    animation-timeline: view();
    padding: 10vw 0;
}

@keyframes scale-down {
    from {
        font-size: 15vw;
    }
    to {
        font-size: 3vw;
    }

}


.hero p {
    animation-name: fade-in;
    animation-range: entry contain 20%;
    animation-timeline: view();

}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }

}
</style>
