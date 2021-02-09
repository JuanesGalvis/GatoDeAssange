<template>
  <div class="home">
    <Header active="1"/>
    <main class="Articulos">
    <div class="Banner">
      <h1 class="Banner__Home">"Porque las personas que son tan locas y creen que pueden cambiar el mundo, son las que lo hacen"</h1>
    </div>
      <h2>Tecnología</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtTec" :key="art._id">
            <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)" :aria-label="art.titulo">
        </article>
      </section>
      
      <h2>Sociedad</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtSoc" :key="art._id">
            <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)" :aria-label="art.titulo">
        </article>
      </section>

      <h2>Política</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtPol" :key="art._id">
          <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)" :aria-label="art.titulo">
        </article>
      </section>

    <Footer />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data() {
    return {
      articulos: [],
      ArtTec: [],
      ArtSoc: [],
      ArtPol: []
    }
  },
  components: {
    Header,
    Footer
  },
  created() {
      document.querySelector('title').innerText = 'El Gato de Assange';
      /** OG */
      document.querySelector('meta[property="og:image"]').content = "https://i.postimg.cc/fyxSYkhz/Meta-Imagen-2x.png";
      document.querySelector('meta[property="og:url"]').content = "https://gato-assange.herokuapp.com";
      document.querySelector('meta[property="og:description"]').content = "Blog independiente sobre Tecnología 💻 - Política 🗽 y Sociedad 🤝. Además de Caricaturas y futuros Podcasts.";
      document.querySelector('meta[property="og:title"]').content = "El Gato de Assange";
      // twitter Card
      document.querySelector('meta[name="twitter:image:src"]').content = "https://i.postimg.cc/fyxSYkhz/Meta-Imagen-2x.png";
      document.querySelector('meta[name="twitter:url"]').content = "https://gato-assange.herokuapp.com";
      document.querySelector('meta[name="twitter:description"]').content = "Blog independiente sobre Tecnología 💻 - Política 🗽 y Sociedad 🤝. Además de Caricaturas y futuros Podcasts.";
      document.querySelector('meta[name="twitter:title"]').content = "El Gato de Assange";

      this.GetData();
  },
  methods: {
    GetData() {
            fetch('/api/')
            .then(res => res.json())
            .then(data => {
                this.articulos = [...data];
                for (let i = 0; i < this.articulos.length; i++) {
                   
                   let categoria = this.articulos[i].categoria;
                   
                   switch (categoria) {
                     case 'Tecnología':
                          this.ArtTec.push(this.articulos[i])
                       break;

                     case 'Sociedad':
                          this.ArtSoc.push(this.articulos[i])
                       break;

                     case 'Política':
                          this.ArtPol.push(this.articulos[i])
                       break;
                   }
                  
                }
            })
        },

        IdURL(id) {
          window.location.href = `/articulo/${id}`;
        }
  }
}

</script>

<style lang="scss">
@import '../styles/global.scss';

  .home {
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

      @media screen and (min-width: 1000px){
        font-size: 20px;  
      }

      @media screen and (min-width: 1164px){
        width: 350px;
        font-size: 25px;  
      }
    }
  }

  h2 {
    font-family: $FuenteTitlos;
    margin-left: 10px;
    padding: 20px 0px;
  }

  .Secciones {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10px;
    text-align: center;

    @media screen and (min-width: 1164px){
      grid-template-columns: repeat(3, 1fr); 
    }

    .articulo {
      img {
        border-radius: 10px;
        width: 90%;
        margin: 10px auto;

        @media screen and (min-width: 750px){
          width: 70%;  
        }

        @media screen and (min-width: 1164px){
          width: 80%;  
        }
      }
    }
  }


</style>
