<template>
  <div class="PodcastRoot">

    <Header active="3"/>
    <main id="Podcasts">
    <div class="Banner">
      <h1 class="Banner__Podcasts">"Facebook y EEUU te escuchan. Tú escuchame a mí"</h1>
    </div>

    <router-link to="/pedir_podcast">
    <button class="Btn_Caricatura">
      <span>Sugerir Podcast</span>
      <img src="../assets/Btn_Pedir_Podcast.png" alt="Gato con audifonos">  
    </button>
    </router-link>
      <article class="Podcast" v-for="podcast in Podcasts" :key="podcast._id">
        <img class="Podcast__Disco" :src="podcast.imagen" :alt="podcast.descripcion">
        <h4> {{ podcast.titulo }} </h4>
        <p> {{ podcast.descripcion }} </p>
        <h3 v-if="podcast.invitado != 'Ninguno'" > Invitado: {{ podcast.invitado  }} </h3>
      </article>
    <Footer />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import { ref } from 'vue'

export default {
  name: 'podcasts',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      Podcasts: []
    }
  },
  created() {
    document.querySelector('title').innerText = 'Podcasts';
    this.GetPodcasts();
  },
  methods: {
    GetPodcasts() {
        fetch('/api/podcasts')
         .then(res => res.json()      
         )
         .then((data) => {
           this.Podcasts = {...data}
         })
    }
  }
}

</script>

<style lang="scss">
@import '../styles/global.scss';

  .PodcastRoot {
    @media screen and (min-width: 530px){
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
  }

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
    
      @media screen and (min-width: 1000px){
        font-size: 22px;  
      }

      @media screen and (min-width: 1164px){
        width: 350px;
        font-size: 25px;  
      }
    
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

  #Podcasts {
    width: 100%;
    margin: 0 auto;
      .Podcast {
        width: 90%;
        margin: 20px auto 36px auto;
        text-align: center;

        &__Disco {
          width: 220px;
          height: 220px;
          border-radius: 100%;
        }

        h4 {
          font-family: $FuenteTitlos;
          font-size: 30px;
          color: $Principal-Azul;
          width: 100%;
          margin-bottom: 16px;
        }

        p {
          font-family: $FuenteContenidos;
          font-size: 18px;
          color: $Texto-Gris;
          width: 100%;
          margin: 16px auto;
        }

        h3 {
          font-family: $FuenteTitlos;
          font-size: 18px;
          color: $Texto-Gris;
          width: 100%;
          margin: 16px auto;
        }
      }
  }

</style>
