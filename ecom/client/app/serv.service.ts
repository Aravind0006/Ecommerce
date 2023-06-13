import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServService {
  postEmployee(x: { employeeId: number; employeeName: any; mobile: any; userName: any; password: any; confirmPassword: any; createdBy: number; }) {
    throw new Error('Method not implemented.');
  }
  ///////////////////////////////////////////////mobile list ////////////////////////////////////////////////////////////////////
  Prolist = [{
    "productId": 1, "Imgurl": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70", "productName": "realme C33 (Aqua Blue, 32 GB)", "productDesc": "Realme C33 is powered by an octa-core Unisoc T612 processor. It comes with 3GB, 4GB of RAM.  ",
    "categoryId": 1, "price": "1000", "rating": 4, "color": "Skyblue"
  },
  { "productId": 2, "Imgurl": "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg", "productName": "Samsung Galaxy M14 5G", "productDesc": "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color", "categoryId": 1, "price": "2000", "rating": 4.5, "color": "silver" },
  { "productId": 3, "Imgurl": "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg", "productName": "OnePlus Nord CE 2 Lite 5G ", "productDesc": "Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9", "categoryId": 1, "price": "3000", "rating": 4.2, "color": "skyblue" },
  { "productId": 4, "Imgurl": "https://d2xamzlzrdbdbn.cloudfront.net/products/4f20c521-92f3-4fb8-ab72-7ba0109c81de23180644.jpg", "productName": "Vivo V27 5G", "productDesc": "Based on Android 13, Funtouch OS 136.78 inch (17.22cm) FHD+ 120Hz AMOLED Display ,8GB RAM ,128GB ROM", "categoryId": 1, "price": "4000", "rating": 3, "color": "lightBlue" },
  { "productId": 5, "Imgurl": "https://www.sathya.store/img/product/aC1pEwZDoVnQqZ8w.webp", "productName": "Oppo A78 5G (8GB RAM, 128GB, A785G8128GB)", "productDesc": "Memory: 8GB RAM, 128GB ROM, Memory Card up to 1TB Processor: MediaTek Dimensity 700, Octa Core Camera: 50 MP+ 2 MP Dual Rear & 8 MP Front Camera", "categoryId": 1, "price": "4000", "rating": 3.6, "color": "skyblue mixed" },
  { "productId": 6, "Imgurl": "https://m.media-amazon.com/images/I/418G+T7WDaL._SY300_SX300_.jpg", "productName": "realme narzo N55 (Prime Black, 4GB+64GB)", "productDesc": "With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery from 0-50% in just 29 minutes,", "categoryId": 1, "price": "4000", "rating": 4, "color": "Black" },
  { "productId": 7, "Imgurl": "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg", "productName": "OnePlus 11 5G (16GB RAM, 256GB Storage)", "productDesc": "Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming", "categoryId": 1, "price": "4000", "rating": 4.1, "color": "Black" },
  { "productId": 8, "Imgurl": "https://m.media-amazon.com/images/I/81itQPVn-GL._SX569_.jpg", "productName": "Redmi 12C (4GB RAM, 64GB Storage)", "productDesc": "High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery with 10W Charger in-Box", "categoryId": 1, "price": "4000", "rating": 3.6, "color": "Blue" },

  ///////////////////////////////////////////////grosrey list ///////////////////////////////////////////////////////////////////  
  {
    "productId": 9, "Imgurl": "https://m.media-amazon.com/images/I/71qFN+vMbmL._SX679_.jpg",
    "productName": "Taj Mahal South Tea 1 kg Pack, Rich and Flavourful Chai", "productDesc": "Premium Blend;A perfect combination of strength and flavour that leaves you saying WAH TAJ!A legacy of 50 and more years; Also available in Tea bags",
    "categoryId": 2, "price": "755", "rating": 4.6
  },
  { "productId": 10, "Imgurl": "https://m.media-amazon.com/images/I/71nF2crk30L._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg", "productName": "Wonderland Foods - California Almonds & Cashews W320 | 1Kg ", "productDesc": "100% Real Nuts for that crunchy, authentic and delicious taste. It comes in a resealable bag to retain its crunch and freshness. Add a few in your diet and stay energized all day long.", "categoryId": 2, "price": "799", "rating": 4.5 },
  { "productId": 11, "Imgurl": "https://m.media-amazon.com/images/I/71k6Fkb4htL._SX679_.jpg", "productName": " Saffola Oats | Rolled Oats | Delicious Creamy Oats | 100% Natural | High Protein & Fibre", "productDesc": " 100% NATURAL: Made from 100% natural wholegrain oats, Saffola Oats brings you a wholesome breakfast to help kickstart your day", "categoryId": 2, "price": "198", "rating": 4.1 },
  { "productId": 12, "Imgurl": "https://m.media-amazon.com/images/I/510O7shLZyL._SX679_.jpg", "productName": "Nutella Hazelnut Spread with Cocoa (Labels may vary), 350g", "productDesc": "It's so delicious that a little goes a long way Contains no artificial preservatives. Organic : No Contains no artificial colors", "categoryId": 2, "price": "325.00 ", "rating": 3.5 },
  { "productId": 13, "Imgurl": "https://m.media-amazon.com/images/I/71PFaLxovsL._SX679_.jpg", "productName": "DiSano Pure Honey 500 g", "productDesc": "Pure honey - no added sugar, no added c3/ C4 percent/rice/ corn/ cane sugar Disnao honey is loaded with natural anti-oxidants, enzymes and essential minerals", "categoryId": 2, "price": "237.00", "rating": 3.8 },
  { "productId": 14, "Imgurl": "https://m.media-amazon.com/images/I/71W+gL+LS8L._SX679_.jpg ", "productName": "Tropical Fruit Medley 200g | Wholesome & Vitamin Rich Healthy Snack  ", "productDesc": "Plant based protein Minerals vitamins rich Wholesome and natural Healthy snacking Cholesterol free Consists of anti-aging properties Rich source of vitamins ", "categoryId": 2, "price": "206.00", "rating": 2.8 },
  { "productId": 15, "Imgurl": "https://m.media-amazon.com/images/I/71X1L6mSLgL._SX679_.jpg", "productName": "Complan Nutrition and Health Drink Royale Chocolate 750g,", "productDesc": "Complan is a nutrition & health drink for kids with clinically proven formula that supports concentration & memory & delivers 2X faster growth Contains 100% milk protein. Use it to make healthy protein drink for kids", "categoryId": 2, "price": "338", "rating": 4.8 },
  { "productId": 16, "Imgurl": "https://m.media-amazon.com/images/I/71lcDy4P80L._SX679_.jpg", "productName": "Cadbury Oreo Vanilla flavour Cookie Sandwich Cream Biscuit Family pack", "productDesc": "OREO chocolate sandwich biscuit consists of two chocolate wafers and a rich vanilla creme filling.OREO cream biscuits are always made with cocoa, which defines their unique chocolate flavour.", "categoryId": 2, "price": "64", "rating": 4.9 },

  //////////////////////////////////////////////laptops list ///////////////////////////////////////////////////////////////////////
  { "productId": 17, "Imgurl": "https://m.media-amazon.com/images/I/51GXfkEfsML._SX679_.jpg", "productName": "HP Victus Gaming Laptop 12th Gen Intel Core i5-12450H", "productDesc": "Processor: Intel Core i5-12450H (up to 4.4 GHz with Intel Turbo Boost Technology(2g), 12 MB L3 cache, 8 cores, 12 threads) | Memory: 16 GB DDR4-3200 MHz RAM (2 x 8 GB)", "categoryId": 3, "price": "75990", "rating": 4.8 },
  { "productId": 18, "Imgurl": "https://m.media-amazon.com/images/I/51gkDWHPvQL._SX450_.jpg", "productName": "Lenovo IdeaPad D330 Intel Celeron N4020 10.1", "productDesc": " Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache", "categoryId": 3, "price": "20990", "rating": 4.6 },
  { "productId": 19, "Imgurl": "https://m.media-amazon.com/images/I/61UT2VaLQiL._SX679_.jpg", "productName": "LG Gram16-12th Gen Intel Core Processor i7 Window 11/16 GB/512 GB", "productDesc": "Processor & OS: 12th Gen Intel Core Processor i7-1260P (12 Cores: 4P + 8E, P: 2.1 up to 4.7 GHz / E: 1.5 up to 3.4 GHz), L3 Cache 18MB / Window 11", "categoryId": 3, "price": "119000", "rating": 4.8 },
  { "productId": 20, "Imgurl": "https://m.media-amazon.com/images/I/61ZQEkRzQaL._SY450_.jpg", "productName": "Dell 2in1 Inspiron 7420 Laptop, Intel i7-1255U", "productDesc": "Processor: Intel i7-1255U (3.50 GHz up to 4.70 GHz) RAM & Storage: 16GB & 512GB SSD", "categoryId": 3, "price": "105990", "rating": 4.6 },
  { "productId": 21, "Imgurl": "https://m.media-amazon.com/images/I/61edOIPzQ0L._SX679_.jpg", "productName": "ASUS ROG Strix GL10, 6 Cores Intel Core i5-10400F 10th Gen, Gaming Desktop", "productDesc": "Processor: Intel Core i5-10400F, 2.9 GHz Base Speed, 12MB Cache, up to 4.3 GHz Max Turbo Speed, 6 cores) ", "categoryId": 3, "price": "73990", "rating": 4.2 },
  { "productId": 22, "Imgurl": "https://m.media-amazon.com/images/I/81dGEdml2WL._SX679_.jpg", "productName": "ZEBRONICS 24 inch 165Hz Gaming Monitor with FHD 1080p", "productDesc": "IPS Panel,165Hz refresh rate,Free sync support, 1ms MPRT Response time.250 Nits max. Brightness | 10000000:1 Contrast ratio | 16.7 Million colors output.", "categoryId": 3, "price": "10999", "rating": 4.0 },
  { "productId": 23, "Imgurl": "https://m.media-amazon.com/images/I/71rxX1CV65L._SX679_.jpg", "productName": "ZEBRONICS 32 inch WQHD 2K Curved 165Hz Gaming Monitor, HDR10", "productDesc": "165Hz refresh rate | Free sync support | 1ms MPRT Response time. Bezel less design with 1800R curved screen for an immersive view", "categoryId": 3, "price": "23499", "rating": 3.8 },
  { "productId": 24, "Imgurl": "https://m.media-amazon.com/images/I/619Lp1ad9WL._SX679_.jpg", "productName": "Dell Alienware Aurora (R13) Gaming Desktop, Intel i7-12700KF", "productDesc": "Processor: i7-12700KF, 3.60 GHz Up to 5.00 GHz (25MB,12 Cores)RAM & Storage: 16GB DDR5 &1TB HDD + 512GB SSD", "categoryId": 3, "price": "4000", "rating": 3.6 },

  ///////////////////////////////////////////////////games list ///////////////////////////////////////////////////////////////////////////////////

  { "productId": 25, "Imgurl": "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg", "productName": "Sony PS5 PlayStation Console", "productDesc": "Play your favorite PS5 games on your stunning 4K TV.Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.", "categoryId": 4, "price": "49990", "rating": 5 },
  { "productId": 26, "Imgurl": "https://m.media-amazon.com/images/I/81kAitW5qAL._SX522_.jpg", "productName": "PS5 Grand Theft Auto V", "productDesc": "Enhanced fidelity & performance, new graphics modes up to 4K 60FPS, HDR options, ray tracing & more Plus, all-new enhancements to the ever-evolving world of GTA Online", "categoryId": 4, "price": "2099", "rating": 4.6 },
  { "productId": 27, "Imgurl": "https://m.media-amazon.com/images/I/715yugMCFYL._SX450_.jpg", "productName": "A1GRAPHIX Ps5 Skin Protector for PS5 Playstation Console ", "productDesc": "Stylish adhesive skins customize the look of your PlayStation 5 Digital Edition console with a sleek and clean appearance.Easy to apply and remove, leaves no sticky residue, will not damage surfaces.", "categoryId": 4, "price": "589", "rating": 4.2 },
  { "productId": 28, "Imgurl": "https://m.media-amazon.com/images/I/81f3ZmXx3cL._SY679_.jpg", "productName": "Sony God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)", "productDesc": "Those who break fate: Atreus seeks knowledge to help him understand the prophecy of Loki and what role he is to play in Ragnarök.", "categoryId": 4, "price": "4419", "rating": 4.6 },
  { "productId": 29, "Imgurl": "https://m.media-amazon.com/images/I/91ug7DBCdaL._SX569_.jpg", "productName": "Uncharted: Legacy of Thieves Collection | PS5 Game", "productDesc": "UNCHARTEDTM 4: A Thief’s End : -A globe-trotting adventure with the largest and most detailed environments in the UNCHARTED franchise", "categoryId": 4, "price": "1790", "rating": 3.6 },
  { "productId": 30, "Imgurl": "https://m.media-amazon.com/images/I/61baElemZ1L._SX522_.jpg", "productName": "Call of Duty: Vanguard (PS5) - PlayStation 5", "productDesc": "Rise on every front Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper's precision and blast through advancing forces in North Africa", "categoryId": 4, "price": "3112", "rating": 3.2 },
  { "productId": 31, "Imgurl": "https://m.media-amazon.com/images/I/71XzDSkjCFL._SX522_.jpg", "productName": "PS4 Minecraft Starter Collection ", "productDesc": "Slash commands - tweak how the game plays: you can give items away, summon mobs, change the time of day, and more", "categoryId": 4, "price": "1799", "rating": 3.8 },
  { "productId": 32, "Imgurl": "https://m.media-amazon.com/images/I/81em1nszXNS._SX569_.jpg", "productName": "Sony Ghost of Tsushima | Director's Cut | PS5 Game", "productDesc": "The rise of the Ghost: Seek support from old friends and new unlikely allies to reclaim Tsushima.", "categoryId": 4, "price": "2199", "rating": 3.6 }


  ]


  constructor(private http: HttpClient) { }
  getProduct() {
    // return this.http.get<any>("https://fakestoreapi.com/products")
    // .pipe(map((res:any)=>{
    //   return res;
    // })) return 
    this.http.get("http://92.205.109.210:8013/Product/GetProductsByProductId?productId=1")
    return this.Prolist


  }
  // GetLogin() {
  //   return this.http.get("http://92.205.109.210:8013/SignUp/GetSignUp")
  // }

  GetLogin(username: any, password: any) {
    return this.http.get("http://92.205.109.210:8013/SignUp/SignIn?emailId=" + username + "&password=" + password)
  }

  postSign(go: any) {
    return this.http.post("http://92.205.109.210:8013/SignUp/InsertSignUp", go);
  }


  Getproducts() {
    return this.http.get("http://92.205.109.210:8013/Product/GetProductsByProductId?productId=1")
  }


  orderpage() {
    return this.http.get("http://92.205.109.210:8013/Order/InsertOrder")
  }



  checkout() {
    return this.http.get("http://92.205.109.210:8013/Order/GetOrder")
  }
  createOrder(input: any) {
    return this.http.post("http://92.205.109.210:8013/Order/InsertOrder", input);
  }

  GetUserdatas() {
    return this.http.get("http://92.205.109.210:8013/SignUp/GetSignUp")
  }

  Getcat(){
    return this.http.get("https://api.genderize.io?name=luc")
  }
}
