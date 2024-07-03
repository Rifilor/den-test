<template>
    <div class="wrap">
        <div class="top-panel">
            <h1 class="title">
                {{$t('products')}} / {{ store.getCountProductsList }}
            </h1>
            <p class="top-panel__label-drop">{{ $t('type') }}:</p>
            <Dropdown :name-drop="'type-product'" :use-localization="true" class="top-panel__dropdown-first" v-model="typeProduct" :list="list"></Dropdown>
            <p class="top-panel__label-drop">{{ $t('specification') }}:</p>
            <Dropdown :name-drop="'type-spec'" :use-localization="true" class="" v-model="typeSpecification" :list="listSpec"></Dropdown>
        </div>
        <products-list class="list"></products-list>
        
    </div>
</template>
<script setup lang="ts">
import Dropdown from '~/components/products/dropdown.vue';
// import {useI18n} from "vue-i18n";
// const i18n = useI18n();
import { useStore } from '../stores/store';
const store = useStore()
const {typeProduct, typeSpecification} = storeToRefs(store)
const list: string[] = ['new', 'used']
const listSpec: string[] = ['free', 'under_repair']
</script>
<style lang=scss scoped>
.top-panel {
    height: 38px;
    display: flex;
    align-items: center;
    &__label-drop {
        text-transform: capitalize;
        font-size: 13px;
        color: #546E7A;
        margin-right: 12px;
    }
    &__dropdown-first {
        margin-right: 40px;
    }
}
.wrap {      
    box-sizing: border-box;
    width: calc(100vw - 200px);  
    padding-top: 60px;
    padding-left: 120px;
    padding-right: 65px;       
    padding-bottom: 75px;
    overflow-y: auto;
    overflow-x: hidden;
}
.title {
    text-transform: capitalize;
    font-size: 21px;
    font-weight: 600;
    margin-right: 35px;
}
.list {
    margin-top: 63px;

}

</style>