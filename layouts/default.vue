<template>
    <top-panel class="top-panel"></top-panel>
    <section class="wrap">
        <menu-component class="menu"></menu-component>
        <main class="main">
            <slot></slot>
        </main>
        
    </section>
   
  </template>
  <script setup>
  import 'moment/dist/locale/uk.js'
  import 'moment/dist/locale/en-ca.js'
  import moment from 'moment'
  const {locale} = useI18n()
  </script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
    }
    .main {
        flex: 1;
        display: flex;
        align-items: stretch;
        height: calc(100vh - 70px);
   }
   .menu {
    position: relative;
    z-index: 2
   }
   .top-panel {
    position: relative;
    z-index: 16;
   }
</style>