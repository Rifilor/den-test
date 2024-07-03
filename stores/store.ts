import { defineStore } from 'pinia'

import type { StateInterface, ArrivalInterface, ProductInterface } from '~/interface/interface'

export const useStore = defineStore({
    id: 'use-store',
    state: (): StateInterface => ({ 
        arrivalList: [
            {
                id: 1,
                name: '1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab!',
                countProduct: 1,
                date_first: new Date(5, 7, 2015),
                date_second: new Date(),
                price_first: 25000,
                price_second: 50.5,
            },
            {
                id: 2,
                name: '2224 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab!',
                countProduct: 25,
                date_first: null,
                date_second: new Date(),
                price_first: 2000.21,
                price_second: 4000000.2,
            },
            {
                id: 3,
                name: '3333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab!',
                countProduct: 25,
                date_first: new Date(2015, 5, 1),
                date_second: new Date(2020, 6, 4),
                price_first: 0.33,
                price_second: 500.67,
            },
            {
                id: 4,
                name: '4444 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab!',
                countProduct: 25,
                date_first: new Date(2015, 7, 5),
                date_second: new Date(),
                price_first: 100.4,
                price_second: 1000,
            },
        ],
        productsList: [
            {
                id: 1,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LG_L194WT-SF_LCD_monitor.jpg/1200px-LG_L194WT-SF_LCD_monitor.jpg',
                name: '11 Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3 283728372837823',
                series: 'SN_15 2456780',
                access: false,
                date_start: new Date(2015, 1, 5),
                date_end: new Date(2022, 12, 12),
                state: 'new',
                price_first: 2500000.4,
                price_second: 2500000.50,
                group_name: '',
                first_name: 'Ahmad',
                last_name: 'Jacobson',
                arrival_name: 'orem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                arrival_start_date: new Date(2019, 1, 2),
                arrival_end_date: new Date(2019, 7, 12),
                arrival_id: 4,
            },
            {
                id: 2,
                image_url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/p-series/p2424ht/media-gallery/monitor-p2424ht-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3459&hei=3148&qlt=100,1&resMode=sharp2&size=3459,3148&chrss=full&imwidth=5000',
                name: '334 Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
                series: 'SN_12 2456780',
                access: true,
                date_start: new Date(2023, 7, 12),
                date_end: new Date(2023, 8, 22),
                state: 'new',
                price_first: 10000.1,
                price_second: 20000,
                group_name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                first_name: 'Ahmad',
                last_name: 'Jacobson',
                arrival_name: '',
                arrival_start_date: new Date(2022, 7, 1),
                arrival_end_date: new Date(2023, 4, 7),
                arrival_id: 3,
            },
            {
                id: 3,
                image_url: 'https://marketing.brain.com.ua/static/articles_icon/7474.png',
                name: '23 Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
                series: 'SN_12 2456780',
                access: true,
                date_start: new Date(2020, 5, 4),
                date_end: new Date(2020, 5, 5),
                state: 'used',
                price_first: 1000,
                price_second: 200000.6,
                group_name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                first_name: 'Ahmad',
                last_name: 'Jacobson',
                arrival_name: 'orem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                arrival_start_date: new Date(2021, 7, 6),
                arrival_end_date: new Date(2021, 4, 20),
                arrival_id: 2,
            },
            {
                id: 4,
                image_url: 'https://i.moyo.ua/img/gallery/5465/20/1689340_middle.jpg',
                name: '12 Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
                series: 'SN_12 2456780',
                access: false,
                date_start: new Date(2020, 5, 10),
                date_end: new Date(2020, 5, 12),
                state: 'used',
                price_first: 1000,
                price_second: 200000,
                group_name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                first_name: '',
                last_name: '',
                arrival_name: 'orem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime sunt impedit voluptate nam mollitia facilis fugiat aliquam! Quibusdam in voluptatum culpa corrupti perferendis at voluptatem officia praesentium quos ab',
                arrival_start_date: new Date(2022, 7, 6),
                arrival_end_date: new Date(2023, 4, 5),
                arrival_id: 1,
            }
        ],
        typeProduct: '',
        typeSpecification: '',
        search: '',
     }),
    actions: {
      deleteProduct(id: number) : void {
        this.$state.productsList = this.$state.productsList.filter(el => el.id !== id)
      },
      deleteArrival(id: number): void {
        this.$state.arrivalList = this.$state.arrivalList.filter(el => el.id !== id)
      }
    },
    getters: {
        //   doubleCount: (state) => state.count * 2,
        getArrivalList: (state): ArrivalInterface[] => {
            return state.arrivalList.filter(el => {
                if(el.name.toLowerCase().indexOf(state.search.toLowerCase().trim()) >= 0) {
                    return el
                }
            })
        },
        getContArrivalList: (state): number => {
            return state.arrivalList.length;
        },
        getProductsList: (state): ProductInterface[] => {
            return state.productsList.filter(el=> {
                let filterAcces: number = 0;
                if(state.typeProduct && el.state == state.typeProduct) {
                    return el
                }
                if(!state.typeProduct) {
                    return el
                }
            }).filter(el=> {
                if(state.typeSpecification && el.access == (state.typeSpecification == 'free')) {
                    return el
                }
                if(!state.typeSpecification) {
                    return el
                }
            }).filter(el => {
                if(el.name.toLowerCase().indexOf(state.search.toLowerCase().trim()) >= 0) {
                    return el
                }
            })
        },
        getCountProductsList: (state): number => {
            return state.productsList.length;
        },
    },
  })