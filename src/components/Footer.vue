<template>
    <footer class="Footer">
        <h2>Si te gusta mi contenido:</h2>
        <div class="Footer__Botones">
            <router-link to="/suscripcion" class="routerLink"><button class="Btn_Suscp">Suscribirse <i class="far fa-bell"></i> </button></router-link>
            <router-link to="/donar" class="routerLink"><button class="Btn_Donar"><i class="fas fa-hand-holding-usd"></i> Donar</button></router-link>
        </div>
        <div class="Redes">
            <a target="_blank" href="https://www.instagram.com/elgatodeassange/"><i class="fab fa-instagram"></i> <span>Instagram</span></a>
            <a target="_blank" href="https://twitter.com/ElGatoDeAssange"><i class="fab fa-twitter"></i> <span>Twitter</span></a>
            <a target="_blank" href="https://www.facebook.com/GatoDeAssange"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
        </div>
        <p>Versión: 1.0.0 <i class="fab fa-github"></i> </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.Footer {
    width: 100%;
    background-color: $Dark;

    h2 {
        color: $Principal-Azul-Claro;
        font-family: $FuenteTitlos;
        text-align: center;
        font-size: 20px;
    }

    &__Botones {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 0 auto;
        align-items: center;
        align-content: center;
        padding-bottom: 20px;

        .routerLink {
            text-decoration: none;
            .Btn_Suscp, .Btn_Donar {
                border: $Principal-Blanco 5px solid;
                background-color: $Dark;
                color: $Principal-Blanco;
                font-size: 15px;
                font-family: $FuenteTitlos;
                padding: 10px 25px 10px 15px;
                border-radius: 100px;
                display: flex;
                align-items: center;
            } 

            .Btn_Suscp {
                text-align: left;
                i {
                    margin-left: 5px;
                    font-size: 25px;
                    text-align: right;
                }
            }

            .Btn_Donar {
                text-align: right;
                i {
                    margin-right: 5px;
                    font-size: 25px;
                    text-align: left;
                }
            }
        }
    }
    p {
        font-size: 15px;
        color: $Texto-Gris-Claro;
        font-family: $FuenteTitlos;
        text-align: center;
        width: 100%;
        padding: 10px 0px;
        margin-top: 10px;
    }

    .Redes {
        font-size: 25px;
        margin: 10px auto;
        text-align: center;
        font-family: $FuenteContenidos;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: fit-content;
        margin: 0 auto;

        a {
            color: $Principal-Azul-Claro;
            text-decoration: none;

            i {
                margin-top: 20px;
            }
    
            span {
                font-size: 15px;
            }
        }

        @media screen and (min-width: 530px){
            flex-direction: row;
            justify-content: space-between;

            i {
                margin-top: 0px;
                margin-left: 20px;
            }
        }
    }
}

</style>