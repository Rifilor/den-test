<template>
    <div class="detail">
        <button class="close-button wrap-modal__button" v-on:click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
                </svg>
            </button>
        <div class="detail__top-panel">
            <h2 class="detail__title" :title="getActiveArrival.name">{{ getActiveArrival.name }}</h2>
            <button class="button-add" >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="9px" width="9px" version="1.1" id="Layer_1" viewBox="0 0 455 455" xml:space="preserve" data-v-inspector="layouts/groups.vue:5:17" data-v-5fe4586a=""><polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5   455,242.5 " data-v-inspector="layouts/groups.vue:6:17" data-v-5fe4586a=""></polygon></svg>
                {{ $t('add_product') }}
            </button>
        </div>
        <ProductsItem @clickDelete="clickDelete(item)" class="product-short" :shortView="true" v-for="(item, i) in getProductsById" :key="i" :item="item"></ProductsItem>
        <LazyModalDeleteProduct @delete="deleteItem" @close="itemDelete = null" :item-delete="itemDelete" v-if="itemDelete"></LazyModalDeleteProduct>
        
    </div>
</template>
<script setup lang="ts">
import {useStore} from '../../stores/store'
const store = useStore();
const route = useRoute()
const emit = defineEmits(['close'])
const getActiveArrival = computed((): ArrivalInterface => {
    let item = store.arrivalList.find(el => el.id == route.params.id)
    return item ? item : ''
})
const getProductsById = computed((): ProductInterface[] => {
    return store.productsList.filter(el=> el.arrival_id == route.params.id)
})
const itemDelete: Ref<ProductInterface | null> = ref(null) 
const clickDelete = (item: ProductInterface): void => {
    itemDelete.value = item
}

const deleteItem = (): void => {
    store.deleteProduct(itemDelete.value ? itemDelete.value.id : 0)
    itemDelete.value = null
}
</script>
<style scoped lang="scss">
.detail {
    position: relative;
    background-color: #fff;
    border: 1px solid #CFD8DC;
    box-sizing: border-box;
    border-radius: 4px;
    
    &__top-panel {
        padding: 26px 37px 15px 37px;
        width: 100%;
        box-sizing: border-box;
    }
    &__title {
        margin-bottom: 25px;
        font-size: 21px;
        line-height: 110%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #2C3C44;
        font-weight: 600;
    }
}

.button-add {
    display: flex;
    align-items: center;
    width: max-content;
    svg {
        margin-right: 8px;
        width: 11px;
        height: 11px;
        background-color: #86be4d;
        border-radius: 50px;
        border: 5px solid #86be4d;
    }
    color: #94C75C;
    font-size: 13px;
    line-height: 110%;
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
}

.product-short {
    border-radius: 0;
    border-bottom: none;
    border-right: none;
    border-left: none;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    grid-template-columns: 75px calc(100% - 75px - 120px - 78px) 120px  78px;
    grid-template-areas: "indicator name-product access  delete";
}

.close-button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
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