<template>
    <div class="Donar_Principal">
        <Header active="0"/>
        <main class="Donar">
            <h1>Donar</h1>
            <p>Gracias por apoyar el contenido! Puedes donar mediante Nequi con el siguiente código QR:</p>

            <section class="Donar__Nequi">
                <img src="../assets/QR-Tutorial.jpg" alt="Tutorial dentro de Nequi para pagar con el QR">
                <img src="../assets/QR.jpg" alt="Código QR para donar mediante Nequi Bancolombia">            
            </section>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Donar',
    components: {
        Header
    },
    created() {
        document.querySelector('title').innerText = 'Donar';
    }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

    .Donar_Principal {
        height: 100vh;
        @media screen and (min-width: 530px){
            display: grid;
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .Donar {
        width: 90%;
        margin: 10px auto;

        h1 {
            text-align: center;
            color: $Principal-Azul;
            font-family: $FuenteTitlos;
            font-size: 30px;
            margin: 10px auto;
        }

        p {
            color: $Texto-Gris;
            font-family: $FuenteContenidos;
            width: 100%;
            text-align: center;
            margin: 20px auto;
        }

        &__Nequi {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
            justify-content: center;
            align-items: center;

            img {
                width: 95%;
                border-radius: 10px;
            }
        }
    }
</style>