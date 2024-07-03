<template>
    <div class="list" v-if="getList.length">
         <arrival-item :class="{'groups-page-mode': groupsPageMode == true}" :groupsPageMode="groupsPageMode" v-on:click="clickItem(item)" @delete="clickDelete(item)" :shortView="shortView ? shortView : false " :item="item" v-for="(item, i) in getList" :key="i"></arrival-item>
    </div>

    <div class="list-is-empty" v-else>
        <p class="list-is-empty__text">{{ !store.search ? $t('list_is_empty') : $t('search_not_found')}}</p>
    </div>
    <lazy-modal-delete-arrival @close="itemDelete = null" @delete="deleteItem" :itemDelete="itemDelete" v-if="itemDelete"></lazy-modal-delete-arrival>
</template>
<script setup lang="ts">
import LazyModalDeleteArrival from '../modal/model-delete-arrival.vue'
const props = defineProps<{
  shortView?: boolean,
  useSimpleList?: boolean,
  groupsPageMode?: boolean,
}>()
const emit = defineEmits(['clickItem'])
import type { ArrivalInterface } from '~/interface/interface';
import { useStore } from '~/stores/store';

const store = useStore()

const getList = computed((): ArrivalInterface[] => {
    return props.useSimpleList == true ? store.arrivalList : store.getArrivalList
})

const itemDelete: Ref<ArrivalInterface | null> = ref(null)

const clickDelete = (item: ArrivalInterface): void => {
    itemDelete.value = item
}
const deleteItem = (): void => {
    store.deleteArrival(itemDelete.value ? itemDelete.value.id : 0)
    itemDelete.value = null
}

const clickItem = (item: ArrivalInterface): void => {
    if(props.groupsPageMode == true) {
        emit('clickItem', item.id)
    }
}

</script>
<style lang="scss" scoped>
.list {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &>*:not(:last-child) {
        margin-bottom: 12px;
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
.groups-page-mode {
    position: relative;
    cursor: pointer;
}
</style>