
<template>
    <div class="wrap">
         
        <div class="panel">
            <button class="panel__button button-plus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="9px" width="9px" version="1.1" id="Layer_1" viewBox="0 0 455 455" xml:space="preserve">
                <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5   455,242.5 "/>
                </svg>
            </button>
            <h1 class="panel__title">{{ $t('arrivals') }} / {{ store.getContArrivalList }}</h1>
        </div>
        <arrival-list></arrival-list>
    </div>
</template>
<script setup lang="ts">
import { useStore } from '../stores/store';
const store = useStore()
</script>

<style scoped lang="scss">
    .wrap {
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 60px;
        padding-left: 120px;
        padding-right: 140px;
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 80px;
    }
    .panel {
        margin-bottom: 60px;
        display: flex;
        align-items: center;
        &__button {
            margin-right: 17px;
        }
        &__title {
            font-size: 21px;
            font-weight: 600;
        }
    }
    .button-plus {
        border-radius: 50px;
        width: 38px;
        height: 38px;
        box-sizing: border-box;
        background-color: #86be4d;
        border: 5px solid #75AB40;
    }
</style>