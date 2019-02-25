<template>
  <section>
    <form v-on:submit.prevent="createProduct" novalidate="true">
      <email-form :the-email="EmailUser"></email-form>
      <button type="submit" class="btn btn-primary">{{ $t('form.button') }}</button>
    </form>
    <p class="error" v-if="errors.length">
      <b>Por favor corrige los siguientes errores:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
  </section>
</template>

<script>

import EmailForm from '../components/email-form.vue'

export default {
  components: { EmailForm },
  layout: 'niko-niko',
  data () {
    return {
      EmailUser: {name: this.$store.state.name, email: this.$store.state.email},
      errors:[]
    }  
  },
  methods: {
    createProduct (e) {
      this.errors = [];
      if (!this.EmailUser.name) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.EmailUser.email) {
        this.errors.push('El e-mail es obligatorio.');
      } else if (!this.validEmail(this.EmailUser.email)) {
        this.errors.push('Introduce un e-mail válido.');
      }
      if (!this.errors.length) {
        this.$store.dispatch('addUser', this.EmailUser)
        //this.$router.push('/estado-animo')
        //this.$router.push(this.localePath('animo'))
        this.$router.push(this.localePath({ name: 'estado-animo' }))
        //console.log(this.localePath)
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style>
.form-group {
  max-width: 500px;
}

.error {
  margin-top: 20px;
  color:red;
}

</style>