<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body,#app {
  width: 100%;
  height: 100%;
}
html { overflow:auto;} 
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
