<template>
    <div class="Share">
        <div class="sharethis-inline-share-buttons"></div>
    </div>
</template>

<script>
export default {
    name: 'Share'
}
</script>

<style lang="scss">
@import '../styles/global.scss';

    .Share {
        width: 100%;
        display: flex;
        justify-content: space-around;
        color: $Dark;
        text-align: center;
        align-items: center;
        font-size: 23px;
        height: 40px;
    }

</style>