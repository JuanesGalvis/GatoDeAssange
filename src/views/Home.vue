<template>
  <div class="home">
    <Header active="1"/>
    <div class="Banner">
      <h1 class="Banner__Home">"Porque las personas que son tan locas y creen que pueden cambiar el mundo, son las que lo hacen"</h1>
    </div>
    <main class="Articulos">
      <h2>Tecnología</h2>
      <section id="Tec"></section>
      
      <h2>Sociedad</h2>
      <section id="Soc"></section>

      <h2>Política</h2>
      <section id="Pol"></section>

    </main>
    <Footer />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  async created() {
    const data = await fetch('/api/');
    console.log(data.json());
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

    &__Home {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 240px;
      margin: 0 auto;
      height: 100%;
      font-family: $FuenteTitlos;
      font-size: 18px;
      text-align: center;
    }
  }

  h2 {
    font-family: $FuenteTitlos;
    margin-left: 10px;
    padding: 20px 0px;
  }

</style>
