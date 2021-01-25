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

    <main id="Caricaturas">
      <article class="caricatura" v-for="caricatura in caricaturas" :key="caricatura._id">
        <img :src="caricatura.caricatura" :alt="caricatura.descripcion">
        <div class="Share">
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </article>
    </main>

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
  },
  data() {
    return {
      caricaturas: []
    }
  },
  created() {
    this.GetCaricaturas();
  },
  methods: {
      GetCaricaturas() {
          fetch('/api/caricaturas')
            .then(res => res.json()
            )
            .then((data) => {
              this.caricaturas = {...data}
            })
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

  #Caricaturas {
    width: 90%;
    margin: 0 auto;

    .caricatura {

        margin: 28px auto;

        img {
          width: 100%;
        }

        .Share {
          width: 100%;
          background-color: $Dark;
          display: flex;
          justify-content: space-around;
          color: $Principal-Blanco;
          text-align: center;
          align-items: center;
          font-size: 23px;
          border-radius: 0px 0px 10px 10px;
          height: 40px;
        }
    }
  }

</style>
