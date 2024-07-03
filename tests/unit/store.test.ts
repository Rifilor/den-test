import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../../stores/store';
import { describe, expect, it, beforeEach } from 'vitest';


describe('test store', ()=> {
    beforeEach(()=> {
        setActivePinia(createPinia())
    })

    it('delete arrival', () => {
        const store = useStore()
        let countArrival: number = store.getContArrivalList - 1
        console.log(store.getContArrivalList - 1);
        store.deleteArrival(store.arrivalList[0].id)
        expect(store.getContArrivalList).toBe(countArrival)
    })
    it('delete product', () => {
        const store = useStore()
        let countArrival: number = store.getCountProductsList - 1
        console.log(store.getContArrivalList - 1);
        store.deleteProduct(store.productsList[0].id)
        expect(store.getCountProductsList).toBe(countArrival)
    })
})