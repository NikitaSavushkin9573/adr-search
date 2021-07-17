export class city{
    constructor( public Area:string, 
        public Present:string,
        public Warehouses:number,
        public MainDescription:string, 
        public Region:string,
        public SettlementTypeCode:string,
        public Ref:any, 
        public DeliveryCity:any,
        public ParentRegionTypes:string,
        public ParentRegionCode:string ){}
}