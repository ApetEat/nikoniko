<template>
  <section>
    <form v-on:submit.prevent="">
      <email-form :the-email="EmailUser"></email-form>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </section>
</template>

<script>

import EmailForm from '../components/email-form.vue'

export default {
  components: { EmailForm },
  layout: 'niko-niko',
  data () {
    return {EmailUser: {email: ''}}
  }
}
</script>

<style>
.form-group {
  max-width: 500px;
}

</style>

