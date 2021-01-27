<template>
    <footer class="Footer">
        <h2>Si te gusta mi contenido:</h2>
        <div class="Footer__Botones">
            <router-link to="/suscripcion"><button class="Btn_Suscp">Suscribirse <i class="far fa-bell"></i> </button></router-link>
            <router-link to="/donar"><button class="Btn_Donar"><i class="fas fa-hand-holding-usd"></i> Donar</button></router-link>
        </div>
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
        align-items: center;
        align-content: center;
        padding-bottom: 20px;

        a {
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

}

</style>