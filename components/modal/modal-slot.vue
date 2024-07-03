<template>
    <div class="wrap-modal">
        <div class="wrap-modal__filter" v-on:click="clickClose"></div>
        <div class="wrap-modal__content">
            <button class="close-button wrap-modal__button" v-on:click="clickClose">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
                </svg>
            </button>
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['close'])
const clickClose = (): void => {
    emit('close')
}
</script>
<style lang="scss" scoped>
.wrap-modal {
    z-index: 5;
    width: calc(100vw - 200px);
    height: calc(100vh - 70px);
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2b4e65;
        opacity: 0.3
    }
    &__content {
        position: relative;
        z-index: 10;
    }
    &__button {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
    }
   
}

.close-button {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: -2px 2px 4px rgba(0,0,0, 0.2);
    box-sizing: border-box;
    svg {
        width: 17px;
        height: 17px;
        path {
            fill: #b3b3b3;
        }
    }
    &:hover {
        border: 1px solid #222;
        svg {
            path {
                fill: #222;
            }
        }
    }
}
</style>