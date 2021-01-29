<template>
    <main class="Error">
        <h1>Te has equivocado de ruta 😄</h1>
        <router-link to="/">Volver a casa 🏠</router-link>
    </main>
</template>

<script>
export default {
    name: 'NotFound',
    created() {
        document.querySelector('title').innerText = 'Página no encontrada';
    }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.Error {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-family: $FuenteTitlos;
    font-size: 20px;

    a {
        margin: 15px auto;
        background-color: $Dark;
        padding: 5px 10px;
        border-radius: 10px;
        color: $Principal-Blanco;
    }
}

</style>