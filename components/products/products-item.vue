<template>
    <div class="product">
        <div class="product__indicator">
            <div class="indicator" :class="{'indicator--green': item.access, 'indicator--dark': !item.access}"></div>
        </div>
        <div class="product__name-product product-block">
            <img class="product-block__img" :src="item.image_url" alt="img">
            <div class="product-block__wrap-text">
                <p class="product-block__name-text" :title="item.name">{{ item.name }}</p>
                <p class="product-block__series-text" :title="item.series">{{ item.series }}</p>
            </div>
            
        </div>
        <div class="product__access" :class="{'product__access--green': item.access}">
            {{ item.access ? $t('free') : $t('under_repair') }}
        </div>
        <div class="product__date date-block" v-if="!shortView">
            <p class="date-block__text"> <span class="date-block__text-additionaly"> {{ $t('from') }} </span> {{ moment(item.date_start).format('DD / MM / YYYY') }}</p>
            <p class="date-block__text"> <span class="date-block__text-additionaly"> {{ $t('to') }} </span> {{ moment(item.date_end).format('DD / MM / YYYY') }}</p>
        </div>
        <div class="product__state" v-if="!shortView">
            {{ $t(item.state) }}
        </div>
        <div class="product__price price-block" v-if="!shortView">
            <p class="price-block__price_first">{{ firstPrice }} <span class="price-block__additionaly-text">UAH</span></p>
            <p class="price-block__price_second">{{ secondPrice }} $</p>
        </div>
        <div class="product__group-name group-name" v-if="!shortView">
            <div class="empty" v-if="!item.group_name"></div>
            <p class="group-name__text overflow-dots" :title="item.group_name">{{ item.group_name }}</p>
        </div>
        <div class="product__user-name" v-if="!shortView">
            <div class="empty" v-if="!getFullNameUser.replace('<br/>', '')"></div>
            <span class="overflow-dots" v-html="getFullNameUser"></span>
        </div>
        <div class="product__arrival-name" v-if="!shortView">
            <div class="empty" v-if="!item.arrival_name"></div>
            <p class="group-name__text overflow-dots" :title="item.arrival_name">{{ item.arrival_name }}</p>
        </div>
        <div class="product__arrival-date date-block-arrival" v-if="!shortView">
            <p class="date-block-arrival__date1"> {{ moment(item.arrival_start_date).format('DD / MM') }}</p>
            <p class="date-block-arrival__date2"> {{ moment(item.arrival_end_date).format('DD / MMM / YYYY') }}</p>
        </div>
        <div class="product__delete" v-on:click="emit('clickDelete')">
            <button class="delete-button">
                <svg viewBox="0 0 110.61 122.88"><title>trash</title><path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import moment from 'moment'
import type { ProductInterface } from '~/interface/interface';

const props = defineProps<{
  item: ProductInterface,
  shortView?: boolean,
}>()

const emit = defineEmits(['clickDelete'])

const firstPrice = computed((): string => {
    return props.item.price_first.toLocaleString('ru-RU', {minimumFractionDigits: 0, maximumFractionDigits: 2}).replace(',', '.')
})
const secondPrice = computed((): string => {
    return props.item.price_second.toLocaleString('ru-RU', {minimumFractionDigits: 0, maximumFractionDigits: 2}).replace(',', '.')
})
const getFullNameUser = computed((): string => {
    return  `${props.item.first_name} <br/> ${props.item.last_name}`
})

</script>
<style scoped lang="scss">
.product {  
    display: grid;
    grid-template-columns: 75px 516px 165px 170px 135px 160px 410px 300px 410px 167px 52px;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "indicator name-product access date state price group-name user-name arrival-name arrival-date delete";


    height: 72px;
    box-sizing: border-box;
    border: 1px solid #CFD8DC;
    background-color: #fff;
    border-radius: 4px;
    width: max-content;

    &>* {
        display: flex;
        align-items: center;
    }

    &__indicator {
        grid-area: indicator;
        justify-content: center;
    }
    &__name-product {
        grid-area: name-product;
    }
    &__access {
        grid-area: access;
        justify-content: center;
        font-size: 12px;
        color: #2C3C44;
        &--green {
            color: #CDDC39;
        }
    }
    &__date {
        grid-area: date;
    }
    &__state { 
        grid-area: state; 
        font-size: 13px;
        line-height: 110%;
        color: #546E7A
    }
    &__price { 
        grid-area: price;
     }
    &__group-name {
         grid-area: group-name;
     }
    &__user-name {
         grid-area: user-name;
     }
     &__arrival-name {
        grid-area: arrival-name
     }
    &__arrival-date {
         grid-area: arrival-date;
     }
    &__delete { 
        justify-content: center;
        grid-area: delete;
     }
}

.indicator {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    &--dark {
        background-color: #2C3C44;
    }
    &--green {
        background-color: #CDDC39;
    }
}

.product-block {
    &__img {
        width: 46px;
        max-height: 46px;
        padding-right: 35px;
    }
    &__wrap-text {
        color: #2C3C44;
        font-size: 13px;
        width: calc(100% - 81px);
        flex: 1;
        box-sizing: border-box;

    }
    &__name-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: max-content;
        max-width: 100%;
        border-bottom: 1px solid #CFD8DC;
    }
    &__series-text {
        margin-top: 5px;
        font-size: 11px;
        color: #90A4AE;
    }

}

.date-block {
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    &__text {
        display: flex;
        color: #546E7A;
        font-size: 13px;
        line-height: 110%;
        font-weight: 500;
    }
    &__text-additionaly {
        font-weight: normal;
        width: 35px;
        padding-right: 5px;
        text-align: right;
        display: block;
        font-size: 11px;
        line-height: 110%;
        color: #90A4AE;
    }
    &>&__text:nth-child(2) {
         margin-top: 4px;
    }
}

.price-block {
    position: relative;
    &__price_first {
        font-size: 14px;
        line-height: 110%;
        color: #546E7A;
    }
    &__additionaly-text {
        font-size: 10px;
    }
    &__price_second {
        position: absolute;
        top: 11px;
        font-size: 9px;
        color: #90A4AE;
    }
}

.empty {
    width: 14px;
    height: 1px;
    background-color: #546E7A;
}

.overflow-dots {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 18px;
    line-height: 130%;
    color: #546E7A;
    text-decoration: underline;
    padding-right: 5px;

}

.date-block-arrival {
    position: relative;
    flex-direction: column;
    justify-content: center;
    &__date1 {
        color: #90A4AE;
        font-size: 9px;
        position: absolute;
        top: 11px;
    }
    &__date2 {
        font-weight: 500;
        text-transform: capitalize;
        font-size: 14px;
        line-height: 110%;
        color: #546E7A;
    }
}

.delete-button {
    position: relative;
    left: -12px;
    svg {
        width: 15px;
        path {
            fill: #546E7A;
            transition: .1s linear;
        }
    }
    &:hover {
        svg {
            path {
                fill: rgb(255, 104, 70);
            }
        }
    }
}


</style>