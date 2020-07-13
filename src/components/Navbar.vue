<template>
  <div class="main-navbar">
    <h1><router-link to="/"> Ahmed Mohamed (Qenawi) </router-link></h1>
    <ul class="list-inline">
      <li>
        <router-link to="/blogs"><span>read</span>Blog</router-link>
      </li>
      <li>
        <router-link to="/projects"><span>watch</span>Projects</router-link>
      </li>
      <li>
        <a to="/podcasts"><span>listen</span>Podcasts</a>
      </li>
      <li>
        <a href="https://github.com/JakeWharton"><span>fork</span>GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/JakeWharton"
          ><span>mention</span>Twitter</a
        >
      </li>
    </ul>
  </div>
</template>
