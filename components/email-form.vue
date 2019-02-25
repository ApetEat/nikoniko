<template>
  <span>
    <div class="form-group">
      <label for="name">{{ $t('form.label_name') }}</label>
      <input class="form-control" id="name" :placeholder="$t('form.label_placeholder_name')" v-model="theEmail.name" />
    </div>
    <div class="form-group">
      <label for="email">{{ $t('form.label_email') }}</label>
      <input class="form-control" id="email" :placeholder="$t('form.label_placeholder_email')" v-model="theEmail.email" />
    </div>
  </span>
</template>

<script>
  export default {
    name: 'ProductForm',
    props: ['theEmail']
  }
</script>