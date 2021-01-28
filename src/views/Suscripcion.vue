<template>
  <div class="Suscripcion">
    <Header active="0"/>
    <main class="Form_Suscripcion">
    <h1>Suscribirse</h1>
  
    <p>Al suscribirte:</p>
    <ul>
      <li> Recibir notificaciones al correo cuando se publiquén nuevos artículos, caricaturas y Podcast relacionados con los temas que eligas seguir.</li>
      <li> Recibir notificaciones cuando se lancen futuras funcionalidades o colaboraciones</li>
    </ul>

    <form>
      <div>
        <label for="Name">Nombre:</label>
        <input v-model="name" type="text" placeholder="Nombre:" id="Name">
        <i :class=" errorName ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

      <div>
        <label for="Email">Correo Electrónico: </label>
        <input v-model="email" type="email" placeholder="example@email.com:" id="Email">
        <i :class=" errorEmail ? 'far fa-check-circle error' : 'far fa-check-circle check'"></i>
      </div>

      <h3>Áreas de interes:</h3>

      
        <input value="T" v-model="CheckTec" type="checkbox" name="Tecnología" id="Tec">  <span> Tecnología </span>
        <br>

        <input value="S" v-model="CheckSoc" type="checkbox" name="Sociedad" id="Soc">  <span> Sociedad </span>
        <br>
       
        <input value="P" v-model="CheckPol" type="checkbox" name="Política" id="Pol">  <span> Política </span>
        <br>

        <button v-on:click="SendForm($event)" type="submit" class="Suscripcion_Submit">
          <i class="far fa-bell"></i>
          Suscribirse
          <i class="far fa-bell"></i>
        </button>
    </form>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Suscripcion',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      email: '',
      CheckTec : '',
      CheckSoc : '',
      CheckPol : '',
      errorName: false,
      errorEmail: false
    }
  },
  methods: {

    SendForm(event) {
      event.preventDefault();

      // TODO: Falta validar si alguien ya se encuentra registrado

      if ( this.errorName ) {
        alert('Nombre Invalido')
      }

      if ( this.errorEmail ) {
        alert('Correo Electrónico Invalido')
      }

      if (this.CheckTec == '' && this.CheckSoc == '' && this.CheckPol == '') {
        alert('Tienes que marcar mínimo una área de interes')
      } 
      
      if ( !this.errorName && !this.errorEmail && ( this.CheckTec || this.CheckSoc || this.CheckPol ) ) {
        
        const Newsuscript = {
              name: this.name,
              email: this.email,
              areas: [ this.CheckTec, this.CheckSoc, this.CheckPol ]
        }
        
        fetch('/suscriptor', {
          method: 'POST',
          body: JSON.stringify(Newsuscript),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(() => { 

          alert('🎉 Te has registrado con exito! 🎉')
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

    email(value, oldValue) {
      // Actual, Anterior
      if (value.includes('@') && value.includes('.')) {
        this.errorEmail = false;

      } else {
        this.errorEmail = true;
      } 
    },
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

 .Suscripcion { 
   @media screen and (min-width: 530px){
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
 }

.Form_Suscripcion {
  width: 90%;
  margin: 0 auto;

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
    width: 90%;
    text-align: center;
    margin: 20px auto;
  }

  ul {
    margin: 0 auto;
    width: 90%;
    li {
      color: $Texto-Gris;
      font-family: $FuenteContenidos;
      margin: 10px auto;
    }
  }

  ul, li {
    text-align: left;
  }

  form {
    label, h3 {
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
      }

      .check {
        color: $Positivo;
      }

      .error {
        color: $Negativo;
      }
    }

    #Name, #Email {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: $Fondo-Blanco;
      font-family: $FuenteContenidos;
      border: 0;
      margin-top: 10px;
    }

    input[type=checkbox] {
      font-family: $FuenteContenidos;
      width: 26px;
      height: 26px;
      border-radius: 10%;
      background-color: $Dark;
      cursor: pointer;
      border: 1px solid $Dark;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      text-align: left;
    }

    span {
      text-align: left;
      color: $Dark;
      font-size: 20px;
      font-family: $FuenteContenidos;
    }

    .Suscripcion_Submit {
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