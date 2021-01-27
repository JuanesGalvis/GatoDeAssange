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

        <a :href="link" target="_blank"><button class="Btn_Articulo">
            <span>Leer Artículo</span>
            <img src="../assets/Btn_Leer_Articulo.png" alt="Gato con documentos y gafas">  
        </button></a>

        <h2>Comentarios</h2>
        <hr>
        <div class="Input__Comentario">
            <textarea name="Comentario" id="Comentario" cols="30" rows="4" placeholder="Comentario" v-model="newComentario"></textarea>
            <i class="far fa-paper-plane" @click="SendComentario()"></i>
        </div>  
        <hr>

        <section class="Comentarios">
            <article class="Comentarios__Item" v-for="comentario in comentarios" :key="comentario.id">
                <p> {{ comentario.contenido }} </p>
            </article>
        </section>

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
            imagen: '',
            link: '',
            comentarios: [],
            newComentario: ''
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
                this.link = data.Link
                this.GetComentarios(id)
            })
        },

        GetComentarios(id) {
            fetch('/api/'+id)
            .then(response => response.json())
            .then((data) => {
                this.comentarios = [...data.Comentarios]
            })
        },

        SendComentario () {
            const id = localStorage.getItem('ArtId')
            const AddComentario = {
                contenido: this.newComentario
            }

            fetch('/api/comentario/'+id, {
                method: 'POST',
                body: JSON.stringify(AddComentario),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(() => { 
                this.GetComentarios(id)
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

    a {
        text-decoration: none;

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
    hr {
        width: 90%;
        text-align: center;
        margin: 0 auto;
        padding: 3px 0px;
        background-color: $Dark;
        border-radius: 10px;
    }

    .Input__Comentario {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        position: relative;
        textarea {
            width: 85%;
            margin: 0 auto;
            border: 0;
            border-radius: 10px;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
            background-color: $Fondo-Blanco;
            font-family: $FuenteContenidos;
            padding: 10px;
        }

        i.fa-paper-plane {
            position: absolute;
            bottom: 10px;
            right: 20px;
            color: $Principal-Blanco;
            background-color: $Dark;
            font-size: 18px;
            padding: 5px;
            border-radius: 100%;
        }
    }

    .Comentarios {
        width: 90%;
        margin: 0 auto;
        text-align: left;
        font-family: $FuenteContenidos;
        color: $Principal-Blanco;

        &__Item {
            width: 95%;
            padding: 10px 5px;
            border-radius: 5px;
            background-color: $Dark;
            margin: 10px auto;
        }
    }
}


</style>