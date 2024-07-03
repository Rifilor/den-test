<template>
    <groups :groupsPageMode="true"></groups>
</template>
<script setup lang="ts">
import groups from '~/layouts/groups.vue';
// import { useStore } from '../../stores/store';
// const store = useStore()
// const localePath = useLocalePath();
// const idArrival = computed((): number => {
//     return store.arrivalList.length !== 0 ? store.arrivalList[0].id : 0
// })

// if(idArrival) {
//     await navigateTo(localePath('/groups/' + idArrival.value))
// }
</script>