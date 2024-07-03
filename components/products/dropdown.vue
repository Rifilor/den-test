<template>
    <details  class="dropdown">
        <summary ref="drop" class="dropdown__panel">{{ getNameValue }} <span class="placeholder" v-if="!model">{{ $t('select') }}</span></summary>
        <ul class="dropdown__content">
            <li v-for="(name, i) in getList" :key="i" class="dropdown__option" :class="{'dropdown__option--active': model == props.list[i]}" v-on:click="select(props.list[i])">{{ name }}</li>
        </ul>
    </details>
</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";
const i18n = useI18n();
const props = defineProps<{
  list: string[],
  useLocalization?: boolean,
  nameDrop?: string,
}>()
const model = defineModel()

const drop = ref();

const select = (name: string): void => {
  drop.value.click()
  
  model.value = name != model.value ? name : ''
  if(props.nameDrop) {
    localStorage.setItem(props.nameDrop, JSON.stringify(name != model.value ? name : ''))
  }
}

const getNameValue = computed((): string => {
    return props.useLocalization == true ? ''+i18n.t(''+model.value) : ''+model.value
})
const getList = computed((): string[] => {
    return props.useLocalization == true ? props.list.map(el=> i18n.t(el)) : props.list
})

onMounted(() : void => {
  if(props.nameDrop && localStorage.getItem(props.nameDrop))
  model.value = JSON.parse(''+localStorage.getItem(props.nameDrop))
  
})

</script>
<style lang="scss" scoped>
.dropdown {       
    position: relative;
    &__content {
        position: absolute;
        top: 32px;
        border: 1px solid #CFD8DC;
        border-radius: 4px;
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
    &__option {
        text-transform: capitalize;
        width: 100%;
        padding: 7px 10px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: #f7f7f7;
        }

        &--active {
          background-color: #ebe8e8;
        }
    }
    &__panel {
        text-transform: capitalize;
        border-radius: 4px;
        position: relative;
        width: 200px;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #CFD8DC;
        background-color: #fff;
        font-size: 14px;
        font-weight: 500;
    }
    .placeholder {
      font-size: 14px;
      font-weight: 500;
      color: #546E7A;
    }
        
}

summary {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px;
}
summary::after {
  content: '';
  width: 24px;
  height: 24px;
  background: url('https://www.svgrepo.com/show/335062/dropdown.svg') no-repeat;
  background-size: 24px 24px;
  margin-left: auto;
}

details[open] > summary::after {
  transform: rotate(180deg);
}

summary::-webkit-details-marker {
  display: none;
}
</style>