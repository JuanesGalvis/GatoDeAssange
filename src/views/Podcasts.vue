<template>
  <div class="podcasts">
    <Header active="3"/>
    <div class="Banner">
      <h1 class="Banner__Podcasts">"Facebook y EEUU te escuchan. Tú escuchame a mí"</h1>
    </div>

    <button class="Btn_Caricatura">
      <span>Sugerir Podcast</span>
      <img src="../assets/Btn_Pedir_Podcast.png" alt="Gato con audifonos">  
    </button>

    <div id="Podcasts"></div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'podcasts',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">
@import '../styles/global.scss';

  .Banner {
    background-image: url('../assets/Banner.png');
    background-size: cover;
    width: 100%;
    height: 170px;

    &__Podcasts {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 270px;
      margin: 0 auto;
      height: 100%;
      font-family: $FuenteTitlos;
      font-size: 18px;
      text-align: center;
    }
  }

  .Btn_Caricatura {
    width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 10px auto;
    font-family: $FuenteTitlos;
    border: $Principal-Azul 5px solid;
    border-radius: 100px;
    background-color: $Principal-Blanco;

    span {
      text-align: left;
      font-size: 16px;
      padding-left: 10px;
      width: 100%;
      color: $Principal-Azul;
      font-weight: bold;
    }

    img {
      width: 50%;
      margin-top: -80px;
    }
  }

</style>
