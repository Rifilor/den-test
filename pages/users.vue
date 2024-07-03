<template>
    <div class="wrap">
        <lazy-chart class="chart"></lazy-chart>
    </div>
   
</template>
<script lang="ts" setup></script>
<style scoped>
    .wrap {
        padding: 50px;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: calc(100vh - 70px);
    }
    .chart {
        position: absolute;
        top: 0;
        left: 50px;
        width: calc(100% - 100px);
        height: 100%;
    }
</style>