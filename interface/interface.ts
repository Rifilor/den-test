export interface Topic {
    title: string;
    description: string;
 }

 export interface StateInterface {
    arrivalList: ArrivalInterface[],
    productsList: ProductInterface[],
    typeProduct: string,
    typeSpecification: string,
    search: string,
}

export interface ArrivalInterface {
    id: number,
    name: string,
    countProduct: number,
    date_first: Date | null,
    date_second: Date | null,
    price_first: number,
    price_second: number,
}

export interface ProductInterface {
    id: number,
    name: string,
    series: string,
    access: boolean,
    image_url: string,
    date_start: Date,
    date_end: Date,
    state: 'new' | 'used',
    price_first: number,
    price_second: number,
    group_name: string,
    first_name: string,
    last_name: string,
    arrival_name: string,
    arrival_start_date: Date,
    arrival_end_date: Date,
    arrival_id: number,
}