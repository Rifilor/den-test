<template>
    <div class="wrap">
        <div class="panel">
            <button class="panel__button button-plus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="9px" width="9px" version="1.1" id="Layer_1" viewBox="0 0 455 455" xml:space="preserve">
                <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5   455,242.5 "/>
                </svg>
            </button>
            <h1 class="panel__title">{{ $t('arrivals') }} / {{store.getContArrivalList}}</h1>
        </div>
        <div class="wrap-content">
            <div class="wrap-content__list">
                <arrival-list class="" @clickItem="clickItem" :groupsPageMode="groupsPageMode" :shortView="true" :use-simple-list="true"></arrival-list>
            </div>
            <arrival-detail v-if="getBoolShowDetail" @close="clickClose()" class="wrap-content__detail"></arrival-detail>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '../stores/store';
const store = useStore()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();
const clickItem = (id: number): void => {
    router.push(localePath('/groups/'+id))
}
const clickClose = (): void => {
    // alert(1)
    router.push(localePath('/groups'))
}
const getBoolShowDetail = computed((): boolean => {
    return route.params.id !== undefined
})
const props = defineProps<{
    groupsPageMode?: boolean,
}>()


</script>
<style lang="scss" scoped>
    .wrap {
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #F0F3F5;
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
    .wrap-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        &__list {
            width: 466px;
        }
        &__detail {
            height: max-content;
            width: calc(100vw - 466px - 20px - 455px);
        }
    }
</style>