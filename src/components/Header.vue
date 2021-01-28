<template>
  <header class="Cabecera">
      <figure>
        <img class="Cabecera__Logo" alt="Vue logo" src="../assets/logo.png">
      </figure>
      <ul class="Cabecera__Menu">
        <li v-bind:id="active == '1' ? 'Activo' : 'Normal'"> <router-link to="/">Artículos</router-link></li>
        <li v-bind:id="active == '2' ? 'Activo' : 'Normal'"><router-link to="/caricaturas">Caricaturas</router-link></li>
        <li v-bind:id="active == '3' ? 'Activo' : 'Normal'"><router-link to="/podcast">Podcasts</router-link></li>
      </ul>
  </header>
</template>

<script>
export default {
  props: [
    'active'
  ],
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/global.scss';

.Cabecera{
  background-color: $Dark;
  width: 100%;

  @media screen and (min-width: 530px){
      display: flex;
      flex-direction: column;
      align-content: center;

      figure {
        position: fixed;
        width: 50%;
        left: 1vw;
        top: 25vh;
      }

      &__Menu {
        flex-direction: column;
        position: fixed;
        top: 50vh;
        left: 19vw;
        
        li {
          margin: 5px auto;
        }
      }
  }

  @media screen and (min-width: 1040px){
    &__Menu {
        top: 55vh;
        left: 21vw;
        
        li {
          margin: 10px auto;
        }
      }
  }

  &__Logo {
      width: 60%;
      margin: 0 auto;
      display: flex;
      padding: 15px 0px;
  }

  &__Menu {
    display: flex;
    justify-content: space-around;
    text-align: center;
    list-style: none;
    padding-bottom: 10px;

    li {
      padding-bottom: 4px;
      font-family: $FuenteTitlos;
    }

    #Activo a {
      
      border-bottom: 3px solid $Principal-Azul-Claro;
      color: $Principal-Azul-Claro;
      
    }

    a {
      text-decoration: none;
      color: $Principal-Blanco;
    }
  }
}
</style>
