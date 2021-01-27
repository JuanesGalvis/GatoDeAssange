<template>
  <div class="home">
    <Header active="1"/>
    <div class="Banner">
      <h1 class="Banner__Home">"Porque las personas que son tan locas y creen que pueden cambiar el mundo, son las que lo hacen"</h1>
    </div>
    <main class="Articulos">
      <h2>Tecnología</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtTec" :key="art._id">
            <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)">
        </article>
      </section>
      
      <h2>Sociedad</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtSoc" :key="art._id">
            <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)">
        </article>
      </section>

      <h2>Política</h2>
      <section class="Secciones">
        <article class="articulo" v-for="art in ArtPol" :key="art._id">
          <img :src="art.imagen" :alt="art.titulo" @click="IdURL(art._id)">
        </article>
      </section>

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
          localStorage.setItem('ArtId', id)
          window.location.href = '/articulo';
        }
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

  .Secciones {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10px;
    
    .articulo {
      img {
        border-radius: 10px;
        width: 90%;
      }
    }
  }


</style>
