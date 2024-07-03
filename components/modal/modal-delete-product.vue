<template>
    <modal-delete-slot :title="$t('your_sure_delete_product')" @close="closeModal" @delete="clickDelete">
        <div class="product">
                <div class="product__indicator" :class="{'product__indicator--black': !itemDelete.access}"></div>
                <div class="product__img">
                    <img :src="itemDelete.image_url" alt="img">
                </div>
                <div class="product__text-block">
                    <p class="product__name" :title="itemDelete.name">{{ itemDelete.name }}</p>
                    <p class="product__series">{{ itemDelete.series }}</p>
                </div>
            </div>
    </modal-delete-slot>
</template>
<script setup lang="ts">
import type {ProductInterface } from '~/interface/interface';

const emit = defineEmits(['close', 'delete'])
const props = defineProps<{
    itemDelete: ProductInterface 
}>()
const closeModal = (): void => {
    emit('close')
}
const clickDelete = (): void => {
    emit('delete')
}

</script>
<style lang="scss" scoped>

.product {
    border-top: 1px solid #CFD8DC;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-left: 42px;
    padding-right: 42px;
    box-sizing: border-box;
    &__indicator {
       border-radius: 90px;
        width: 12px;
        height: 12px;
        background: #8BC34A;
    }
    &__img {
        width: 152px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 50px;
            max-height: 55px;
        }
    }
    &__text-block {
        width: 520px;
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: max-content;
            max-width: 100%;
        }
    }
    &__series {
        margin-top: 5px;
        font-size: 11px;
        color: #90A4AE;
        text-decoration: underline;
    }
    &__name {
        border-bottom: 1px solid #CFD8DC;        
        color: #2C3C44;
        font-size: 13px;
    }
}
</style>