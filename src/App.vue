<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import './styles/global.scss';

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: $Principal-Blanco;

  a {
    text-decoration: none;

    button {
      cursor: pointer;
    }
  }

  button {
    cursor: pointer;
  }
}
</style>
