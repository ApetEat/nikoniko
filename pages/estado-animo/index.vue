<template>
  <div class="container" style="margin-top:50px;">
    <div class="row">
      <div class="col-xs-12 col-sm-5 center" v-for="estado in estados" :key="estado.id">
        <img v-on:click="estadoClick(estado.id)" :src="require('@/assets/'+(estado.image))" :alt="estado.txt" :title="estado.txt" class="img-responsive"/>
        <p class="ico-text">{{ estado.txt }}</p> 
      </div>
    </div>
  </div>
</template>

<script>
  import axiospost from '@/plugins/axios-post';
  export default {
    layout: 'niko-niko',
    data() {
      return { 
        estados: this.$store.state.estados
      }
    },
    methods: {
      estadoClick (id) {
        document.body.className = 'wait';
        this.$store.dispatch('addEstado', id); 
      }
    }
  }
</script>

<style>
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5 {
    min-height: 1px; 
    position: relative;
  }

  .col-xs-5 {
    float: left;
    width: 20%;
  }

  .center{
    text-align:center;
    margin-bottom:4rem;
  }

  p.ico-text{
    margin:10px 0 0 0;
  }

  .ico-text {
    text-align:center;
    font-size: 2.2rem;
  }

  .img-responsive{
    min-width: 100px;
    max-width:100px;
    display:inline-block;
  }

  .img-responsive:hover{
    cursor: pointer;
  }


  @media (min-width: 768px) {
    .col-sm-5 {
      float: left;
      width: 20%;
    }
    .ico-text {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    .col-md-5 {
      float: left;
      width: 20%;
    }
    .ico-text {
      font-size: 2.0rem;
    }
  }

  @media (min-width: 1200px) {
    .col-lg-5 {
      float: left;
      width: 20%;
    }
    .ico-text {
      font-size: 2.0rem;
    }
  }

</style>