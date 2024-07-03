<template>
    <div class="">
        <div class="wrap-list" v-if="store.getProductsList.length">
            <products-item @clickDelete="clickDelete(item)" v-for="(item, i) in store.getProductsList" :key="i" :item="item"></products-item>
        </div>
        <div class="list-is-empty" v-else>
            <p class="list-is-empty__text">{{ !store.search ? $t('list_is_empty') : $t('search_not_found')}}</p>
        </div>
        <lazy-modal-delete-product @delete="deleteItem" @close="itemDelete = null" :item-delete="itemDelete" v-if="itemDelete"></lazy-modal-delete-product>
    </div>
    

</template>
<script setup lang="ts">
import type { ProductInterface } from '~/interface/interface';
import { useStore } from '~/stores/store';
const store = useStore()

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
    .wrap-list {
        padding-bottom: 30px;
        width: 100%;
        overflow-x: auto;
        &>*:not(:last-child) {
            margin-bottom: 10px;
        }   
    }
    .list-is-empty {
    padding-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    &__text {
        font-size: 21px;
        line-height: 110%;
        color: #546E7A;
        font-weight: 600;
    }
}

</style>