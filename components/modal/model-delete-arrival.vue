<template>
    <modal-delete-slot @close="closeModal" @delete="clickDelete" :title="$t('your_sure_delete_arrival')">
        <arrival-item class="arrival" :shortView="true" :item="itemDelete"></arrival-item>
    </modal-delete-slot>
</template>
<script lang="ts" setup>
import type { ArrivalInterface } from '~/interface/interface';

const emit = defineEmits(['delete', 'close'])
const props = defineProps<{
    itemDelete: ArrivalInterface
}>()
const closeModal = (): void => {
    emit('close')
}
const clickDelete = (): void => {
    emit('delete')
}
</script>
<style lang="scss" scoped>
    .arrival {
        width: 100%;
        border-left: none;
        border-right: none;
        border-bottom: none;
    }
</style>