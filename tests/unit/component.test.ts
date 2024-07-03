import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import modalDeleteSlot from '../../components/modal/modal-delete-slot.vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'en',
    messages: {
      en: {
        delete: 'Delete',
        cancel: 'Cancel',
      },
      ua: {
        delete: 'Delete',
        cancel: 'Cancel',
      }
    }
  })

describe('MessageDisplay.vue', () => {
  it('renders props.message when passed', async () => {
    const wrapper = await mount(modalDeleteSlot, {
      props: { title: 'Title' },
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.find('h2').text()).toContain('Title')
  })
})