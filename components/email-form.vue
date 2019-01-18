<template>
  <span>
    <div class="form-group">
      <label for="edit-name">Introduce tu e-mail:</label>
      <input class="form-control" id="edit-name" placeholder="e-mail" v-model="theEmail.email" required/>
    </div>
  </span>
</template>

<script>
  export default {
     name: 'ProductForm',
    props: ['theEmail']
  }
</script>