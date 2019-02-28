<template>
  <div class="container">
    <header class="page-header">
      
      <div class="right">
        <nuxt-link 
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">
            {{ locale.name }}
        </nuxt-link>
      </div>
      
      <div class="branding">
        <nuxt-link :to="localePath('index')"><img src="../static/logo-apeteat.svg" alt="Logo" title="Apeteat - NikoNiko" class="logo"/></nuxt-link>
        <h2>NikoNiko v1.0</h2>
      </div>
      
    </header>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    computed: {
      availableLocales () {
        return this.$i18n.locales
      }
    }
  }
</script>

<style>
  .logo {
    width: 150px;
    float: left;
    margin-right: 15px;
  }
  .right {
    float:right;
  }
</style>