import { describe, expect, it } from 'vitest';
describe('import vue components', ()=> {
    it('normal imports as expected', async () => {
        const cmp = await import('../components/top-panel.vue')
        expect(cmp).toBeDefined()
    })
    it('normal imports as expected', async () => {
        const menu = await import('../components/menu-component.vue')
        expect(menu).toBeDefined()
    })
})

