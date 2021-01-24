<template>
  <div class="caricatura">
    <Header active="2"/>
    <div class="Banner">
      <h1 class="Banner__Caricatura">"Este país se escandaliza porque uno dice HIJUEPUTA en televisión, pero no se escandaliza cuando hay niños limpiando vidrios y pidiendo limosnas"</h1>
    </div>

    <button class="Btn_Caricatura">
      <span>Pedir Caricatura</span>
      <img src="../assets/Btn_Pedir_Caricatura.png" alt="Gato con una tableta digitalizadora">  
    </button>

    <div id="Caricaturas"></div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'caricatura',
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

    &__Caricatura {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 245px;
      margin: 0 auto;
      height: 100%;
      font-family: $FuenteTitlos;
      font-size: 15px;
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
    }

    img {
      width: 50%;
      margin-top: -80px;
    }
  }

</style>
