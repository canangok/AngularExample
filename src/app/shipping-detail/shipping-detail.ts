export class ShippingDetail{
    constructor(
        public fullName:string,
        public address:string,
        public isGift:boolean,
        public cityId:number){}

//yani bu işlemi yaptığımız zaman
//hem contructprdan tanımlayabilirz hem de 
//shipping detailin nesnelerini rahatlıkla kullanabilriz. 
//isGift hediye paketi olsun mu onun için
}