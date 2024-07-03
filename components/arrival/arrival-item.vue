<template>
    <div class="item" :class="{'short-view': props.shortView}">
        <p class="item__name" v-if="!props.shortView" :title="item.name">
            {{ item.name }}
        </p>
        <div class="item__dop-icon">
            <div class="wrap-circle">
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.203588 1.601C-0.563412 3.599 1.86859 5.255 3.53759 3.87C5.05059 2.614 4.17559 0 2.24259 0C1.45859 0 0.541588 0.72 0.203588 1.601ZM5.88059 2.5C5.88059 3.708 7.43659 4 13.8806 4C20.3246 4 21.8806 3.708 21.8806 2.5C21.8806 1.292 20.3246 1 13.8806 1C7.43659 1 5.88059 1.292 5.88059 2.5ZM0.203588 7.601C-0.563412 9.599 1.86859 11.255 3.53759 9.87C5.05059 8.614 4.17559 6 2.24259 6C1.45859 6 0.541588 6.72 0.203588 7.601ZM5.88059 8.5C5.88059 9.708 7.43659 10 13.8806 10C20.3246 10 21.8806 9.708 21.8806 8.5C21.8806 7.292 20.3246 7 13.8806 7C7.43659 7 5.88059 7.292 5.88059 8.5ZM0.216588 13.567C-0.693412 15.939 1.43959 17.611 3.35059 16.025C4.53459 15.042 4.63459 14.409 3.77059 13.367C2.27259 11.563 0.957588 11.637 0.216588 13.567ZM5.88059 14.5C5.88059 15.708 7.43659 16 13.8806 16C20.3246 16 21.8806 15.708 21.8806 14.5C21.8806 13.292 20.3246 13 13.8806 13C7.43659 13 5.88059 13.292 5.88059 14.5Z" fill="black"/>
                </svg>
            </div>
            
        </div>
        <div class="item__product">
            <p class="item__product-text1">{{ item.countProduct }}</p>
            <p class="item__product-text2">{{ $t(getNameProduct) }}</p>
        </div>
        <div class="item__date">
            <p class="item__text-style-first">{{ item.date_first ? moment(item.date_first).format('DD / MM') : ''}}</p>
            <p class="item__text-style-second">{{ item.date_second ? moment(item.date_second).format('DD / MMM / YYYY') : '' }}</p>
        </div>
        <div class="item__price" v-if="!props.shortView">
            <p class="item__text-style-first">{{ firstPrice }} $</p>
            <p class="item__text-style-second">{{ secondPrice }} UAH</p>
        </div>
        <div class="item__delete" v-if="!props.shortView" v-on:click="emit('delete')">
            <button class="delete-button">
                <svg viewBox="0 0 110.61 122.88"><title>trash</title><path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>
            </button>
        </div>
        
        <div class="active-page" v-if="groupsPageMode == true && ''+item.id == ''+route.params.id">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
            </svg>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import moment from 'moment'
import type { ArrivalInterface } from '../../interface/interface';
const props = defineProps<{
  item: ArrivalInterface,
  shortView: boolean,
  groupsPageMode?: boolean,
}>()
const emit = defineEmits(['delete'])
const route = useRoute()

const getNameProduct = computed((): string => {
  if(props.item.countProduct > 1) {
    return 'productMore'
  } 
  return 'productOne'
})
const firstPrice = computed((): string => {
    return props.item.price_first.toLocaleString('ru-RU', {minimumFractionDigits: 0, maximumFractionDigits: 2}).replace(',', '.')
})
const secondPrice = computed((): string => {
    return props.item.price_second.toLocaleString('ru-RU', {minimumFractionDigits: 0, maximumFractionDigits: 2}).replace(',', '.')
})
</script>
<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    height: 74px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #CFD8DC;
    border-radius: 4px;
    overflow: hidden;
}
.item {  
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 50px 120px 230px 250px 50px;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "name dop-icon product date price delete";

    &__name {
        grid-area: name;
        padding-left: 34px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #546E7A;
        text-decoration: underline;
    }
    &__dop-icon {     
        grid-area: dop-icon;   
        display: flex;
        justify-content: center;
        svg {
            path {
                fill: #546E7A
            }
        }
    }
    &__product {
        grid-area: product;
        padding-left: 5px;
        box-sizing: border-box;
    }
    &__product-text1 {
        font-weight: 500;
        font-size: 18px;
        color: #546E7A;
    }
    &__product-text2 {
        margin-top: 2px;
        text-transform: capitalize;
        font-size: 13px;
        color: #546E7A;
    }
    &__date {
        grid-area: date;
        
    }
    &__text-style-first {
        font-size: 12px;
        color: #546E7A;
    }
    &__text-style-second {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 13px;
        color: #546E7A;
    }
    &__price {
        grid-area: price;
    }
    &__delete {
        grid-area: delete;
        svg {

        }
    }
}

.wrap-circle {
    width: 34px;
    height: 34px;
    border-radius: 50px;
    border: 1px solid #546E7A;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-button {
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

.short-view {
    padding-left: 23px;
    width: 466px;
    grid-template-areas:
    "dop-icon product date";
    grid-template-columns: 50px 120px 230px
}

.active-page {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #CFD8DC;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 16px;
    }

}

</style>