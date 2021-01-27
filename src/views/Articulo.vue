<template>
    <main class="Articulo">
    <Header active="1"/>

        <section class="Articulo__Presentacion">
            <article class="Articulo__Presentacion--info">
                <h2> {{ title }} </h2>
                <p> {{ categoria }} </p>
            </article>
            <article class="Articulo__Presentacion--Imagen">
                <img :src="imagen" :alt="title">
            </article>
        </section>
        <div class="Share">
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
        <section class="Articulo__Sinapsis">
            <p>
                {{ sinopsis }} 
            </p>
        </section>

        <button class="Btn_Articulo">
            <span>Leer Artículo</span>
            <img src="../assets/Btn_Leer_Articulo.png" alt="Gato con documentos y gafas">  
        </button>

    <Footer />
    </main>

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Articulo',
    data() {
        return {
            title: '',
            sinopsis: '',
            categoria: '',
            imagen: ''
        }
    },
    components: {
        Header,
        Footer
    },
    created() {
        const idArt = localStorage.getItem('ArtId')
        this.GetArticleData(idArt);
    },
    methods: {
        GetArticleData(id) {
            
            fetch('/api/'+id)
            .then(response => response.json())
            .then((data) => {
                this.title = data.titulo
                this.sinopsis = data.sinapsis
                this.imagen = data.imagen
                this.categoria = data.categoria
            })

        }
    }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.Articulo {

    &__Presentacion {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        margin: 15px auto;

        &--info {

            background-color: $Dark;

            h2 {
                font-size: 20px;
                color: $Principal-Blanco;
                text-align: center;
            }
            
            p {
                font-size: 15px;
                color: $Texto-Gris-Claro;
                text-align: center;
                padding-bottom: 10px;
                font-family: $FuenteContenidos;
            }
        }

        &--Imagen img {
            border-radius: 10px;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
            width: 90%;
        }
    }

    &__Sinapsis {
        font-size: 18px;
        text-align: left;
        font-family: $FuenteContenidos;
        color: $Texto-Gris;
        width: 90%;
        margin: 10px auto;
    }

    .Share {
        width: 90%;
        display: flex;
        justify-content: space-around;
        color: $Dark;
        text-align: center;
        align-items: center;
        font-size: 23px;
        height: 40px;
    }

    .Btn_Articulo {
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

}


</style>