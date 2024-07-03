<template>
    <modal-slot @close="closeModal">
        <div class="content-modal">
            <h2 class="content-modal__title">{{ title }}</h2>
            <slot></slot>
            <div class="content-modal__bottom-panel bottom-panel">
                <div class="bottom-panel__wrap-button">
                    <button class="bottom-panel__button-cancel" v-on:click="closeModal">{{ $t('cancel') }}</button>
                    <button class="bottom-panel__button-delete" v-on:click="clickDelete"> 
                        <svg viewBox="0 0 110.61 122.88"><title>trash</title><path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>
                        {{ $t('delete') }}
                    </button>
                </div>
            </div>
        </div>
    </modal-slot>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string, 
}>()
const emit = defineEmits(['close', 'delete'])

const closeModal = (): void => {
    emit('close')
}
const clickDelete = (): void => {
    emit('delete')
}
</script>
<style scoped lang="scss">
.content-modal {
    overflow-y: hidden;
    width: 792px;
    
    background-color: #fff;
    border-radius: 8px;
    &__title {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 40px 35px 40px;
        font-size: 21px;
        line-height: 110%;
        font-weight: 600;
    }
    // &__bottom-panel {
        
    // }
   
}
.bottom-panel {
    height: 110px;
    background-color: #88C049;
    width: 100%;
    padding-right: 35px;
    box-sizing: border-box;
    padding-bottom: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    &__button-cancel {
        font-size: 13px;
        line-height: 110%;
        color: #fff;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline;
        }
        font-weight: 600;
    }
    &__button-delete {
        font-size: 13px;
        line-height: 110%;
        text-transform: uppercase;
        width: 176px;
        height: 50px;
        background-color: #fff;
        color: #E8364F;
        border-radius: 50px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            margin-right: 11px;
            width: 14px;
            path {
                fill: #E8364F
            }
        }
        margin-left: 27px;
        &:hover {
            background-color: #e8e8e8;
        }
    }
    &__wrap-button {
        display: flex;
        align-items: center;
    }
}
</style>