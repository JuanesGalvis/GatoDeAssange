<template>
  <div class="PedirCaricatura">
    <Header active="0"/>
    <main class="Form_PedirCaricatura">
    <h1>Pedir Caricatura</h1>

    <form>
      <div>
        <label for="Name">Nombre:</label>
        <input v-model="name" type="text" placeholder="Nombre:" id="Name">
        <i :class=" errorName ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

      <div>
        <label for="Tema">Tema de la caricatura: </label>
        <input v-model="Tema" type="text" placeholder="Qué Tema te gustaría?" id="Tema">
        <i :class=" errorTema ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

    <button v-on:click="SendForm($event)" type="submit" class="PedirCaricatura_Submit">
        <i class="far fa-paper-plane"></i>
        Enviar
        <i class="far fa-paper-plane"></i>
    </button>

    </form>

    <Footer />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PedirCaricatura',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: '',
      Tema: '',
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
        
        const RequestCaricatura = {
              name: this.name,
              tema: this.Tema,
        }
        
        fetch('/pedir_caricatura', {
          method: 'POST',
          body: JSON.stringify(RequestCaricatura),
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
  },
  created() {
    document.querySelector('title').innerText = 'Pedir Caricatura';
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.PedirCaricatura{
  height: 100vh;
  @media screen and (min-width: 530px){
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
}

.Form_PedirCaricatura {
  width: 100%;
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
    width: 90%;
    margin: 0 auto;
    height: 80vh;
    label {
      font-size: 18px;
      font-family: $FuenteTitlos;
      color: $Dark;
      text-align: left;
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
      @media screen and (min-width: 930px){
          right: 40px;
        }
      }

      .check {
        color: $Positivo;
      }

      .error {
        color: $Negativo;
      }
    }

    #Name, #Tema {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: $Fondo-Blanco;
      font-family: $FuenteContenidos;
      border: 0;
      margin-top: 10px;
    }

    .PedirCaricatura_Submit {
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