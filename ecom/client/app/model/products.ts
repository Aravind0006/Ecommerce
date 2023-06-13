export class Products {
     proId: any
     proName: any; desc: any; price: any; Imgurl: any;rating:any;color:any;

     Products(proId: number, proName: string, desc: string, price: number, Imgurl: string ,rating :number,color:any) {
          this.proId = proId;
          this.proName = proName;
          this.desc = desc;
          this.price = price;
          this.Imgurl = Imgurl;
          this.rating = rating;
          this.color = color ;
     }

}
