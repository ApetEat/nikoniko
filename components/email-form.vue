<template>
  <span>
    <div class="form-group">
      <label for="name">Introduce tu nombre:</label>
      <input class="form-control" id="name" placeholder="nombre" v-model="theEmail.name" />
    </div>
    <div class="form-group">
      <label for="email">Introduce tu e-mail:</label>
      <input class="form-control" id="email" placeholder="e-mail" v-model="theEmail.email" />
    </div>
  </span>
</template>

<script>
  export default {
    name: 'ProductForm',
    props: ['theEmail']
  }
</script>