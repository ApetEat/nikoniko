<template>
  <section>
    <form v-on:submit.prevent="sendForm">
      <!--<email-form :the-email="EmailUser"></email-form>-->
      <div class="form-group">
        <label for="name">{{ $t('form.label_name') }}</label>
        <input class="form-control" id="name" :name="$t('form.label_placeholder_name')" :placeholder="$t('form.label_placeholder_name')" v-model="EmailUser.name" v-validate="'required'" />
        <span v-show="errors.has($t('form.label_placeholder_name'))" class="error">{{ errors.first($t('form.label_placeholder_name')) }}</span>
      </div>
      <div class="form-group">
        <label for="email">{{ $t('form.label_email') }}</label>
        <input class="form-control" id="email" :name="$t('form.label_placeholder_email')" :placeholder="$t('form.label_placeholder_email')" v-model="EmailUser.email" v-validate="'required|email'" />
        <span v-show="errors.has($t('form.label_placeholder_email'))" class="error">{{ errors.first($t('form.label_placeholder_email')) }}</span>
      </div>
      <button type="submit" class="btn btn-primary">{{ $t('form.button') }}</button>
    </form>
  </section>
</template>

<script>

export default {
  layout: 'niko-niko',
  data () {
    return {
      EmailUser: {name: this.$store.state.name, email: this.$store.state.email}
    }  
  },
  methods: {
    sendForm (e) {
      
      //e.preventDefault()
      //console.log('validator', this.$validator)

      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('addUser', this.EmailUser)
          this.$router.push(this.localePath({ name: 'estado-animo' }))
          return;
        }
      });
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