<template>
  <div class="container">
    <header class="page-header">
      
      <div style="float:right;">
        <nuxt-link class="Header__Link" to="/" active-class="none" exact>
            CA
        </nuxt-link>
        |
        <nuxt-link class="Header__Link" to="/" active-class="none" exact>
            ES
        </nuxt-link>
        |
        <nuxt-link class="Header__Link" to="/" active-class="none" exact>
            EN
        </nuxt-link>
      </div>
      
      <div class="branding">
        <nuxt-link to="/"><img src="../assets/logo-apeteat.svg" alt="Logo" title="Apeteat - NikoNiko" class="logo"/></nuxt-link>
        <h2>NikoNiko v1.0</h2>
      </div>
      
    </header>
    <nuxt/>
  </div>
</template>

<style>
  .logo {
    width: 150px;
    float: left;
    margin-right: 15px;
  }
</style>