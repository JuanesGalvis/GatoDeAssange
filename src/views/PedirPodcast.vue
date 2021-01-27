<template>
  <div class="PedirPodcast">
    <Header active="0"/>
    <main class="Form_PedirPodcast">
    <h1>Sugerir Podcast</h1>

    <form>
      <div>
        <label for="Name">Nombre:</label>
        <input v-model="name" type="text" placeholder="Nombre:" id="Name">
        <i :class=" errorName ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

      <div>
        <label for="Tema">Tema del Podcast: </label>
        <input v-model="Tema" type="text" placeholder="Qué Tema te gustaría?" id="Tema">
        <i :class=" errorTema ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

      <div>
        <label for="invitado">Invitado <span>~ Opcional ~</span> : </label>
        <input v-model="invitado" type="text" placeholder="¿Tienes un invitado en mente?" id="invitado">
      </div>

    <button v-on:click="SendForm($event)" type="submit" class="PedirPodcast_Submit">
        <i class="far fa-paper-plane"></i>
        Enviar
        <i class="far fa-paper-plane"></i>
    </button>

    </form>

    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PedirPodcast',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: '',
      Tema: '',
      invitado: '',
      errorName: true,
      errorTema: true
    }
  },
  methods: {

    SendForm(event) {
      event.preventDefault();

      // TODO: Falta validar si alguien ya se encuentra registrado

      if ( this.errorName ) {
        alert('Nombre Invalido')
      }

      if ( this.errorTema ) {
        alert('Campo del tema está vacio')
      }
      
      if ( !this.errorName && !this.errorTema ) {
        
        const RequestPodcast = {
              name: this.name,
              tema: this.Tema,
              invitado: this.invitado
        }
        
        fetch('/pedir_podcast', {
          method: 'POST',
          body: JSON.stringify(RequestPodcast),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(() => { 

          alert('🎉 Proceso finalizado correctamente! 🎉')
          this.$router.push({name: 'Home'});
         } )
      }

    }

  },
  watch: {
    name(value, oldValue) {

      // TODO: FALTA AGREGAR EXPRESIÓN REGULAR PARA VALIDAR QU NO HAYAN NÚMEROS EN EL CAMPO DE NOMBRE

      if (value.length <= 1) {
        this.errorName = true;
      } else {
        this.errorName = false;
      }
    },

    Tema(value, oldValue) {
      // Actual, Anterior
      if (value.length <= 1) {
        this.errorTema = true;
      } else {
        this.errorTema = false;
      }
    },
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.Form_PedirPodcast {
  width: 90%;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: $Principal-Azul;
    font-family: $FuenteTitlos;
    font-size: 30px;
    margin: 10px auto;
  }

  ul, li {
    text-align: left;
  }

  form {
    label {
      font-size: 18px;
      font-family: $FuenteTitlos;
      color: $Dark;
      text-align: left;

      span {
          color: $Texto-Gris-Claro;
      }
    }

    div {
      margin: 20px auto;
      position: relative;

      .fa-check-circle {
        font-size: 20px;
        color: $Dark;
        position: absolute;
        right: 20px;
        top: 45px;
      }

      .check {
        color: $Positivo;
      }

      .error {
        color: $Negativo;
      }
    }

    #Name, #Tema, #invitado {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: $Fondo-Blanco;
      font-family: $FuenteContenidos;
      border: 0;
      margin-top: 10px;
    }

    .PedirPodcast_Submit {
      background-color: $Principal-Azul;
      color: $Principal-Blanco;
      border: 0;
      display: flex;
      justify-content: space-around;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      align-items: center;
      width: 100%;
      border-radius: 100px;
      height: 50px;
      font-size: 20px;
      margin: 20px auto;
    }
  }
}


</style>