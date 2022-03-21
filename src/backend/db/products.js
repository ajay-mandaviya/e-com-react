import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Firangi Yarn",
    price: 700,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/739427/brown-ajrakh-hand-block-printed-cotton-half-sleeve-shirt-193711-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Printed Cotton Half-Sleeve Shirt",
    inStock: true,
    fastDelivery: true,
    categoryName: "shirt",
    rating: 4,
    offRate: "50%",
    originalPrice: 1599,
  },
  {
    _id: uuid(),
    name: "Surhi",
    price: 538,
    img: "https://rukminim1.flixcart.com/image/496/595/kkr72q80/shirt/s/w/h/m-mp-dg3-gritsmad-original-imagyf5fzvhhhuqq.jpeg?q=50",
    infoTitle: "Multicolour Full-Sleeve Shirt",
    inStock: false,
    fastDelivery: false,
    categoryName: "shirt",
    rating: 5,
    offRate: "55%",
    originalPrice: 1199,
  },
  {
    _id: uuid(),
    name: "Red Chief",
    price: 1374,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/771097/black-hearts-and-blocks-pattern-printed-casual-shirt-156819-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Half Sleeve Cotton Shirt",
    inStock: false,
    fastDelivery: false,
    categoryName: "shirt",
    rating: 3,
    offRate: "45%",
    originalPrice: 2499,
  },
  {
    _id: uuid(),
    name: "FASHIONFRICKS",
    price: 649,
    img: "https://img.mensxp.com/media/shop/catalog/products/W/744128/white-half-sleeve-cotton-shirt-137112-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Hearts & Blocks Pattern",
    inStock: false,
    fastDelivery: false,
    categoryName: "shirt",
    rating: 2,
    offRate: "57%",
    originalPrice: 1499,
  },
  {
    _id: uuid(),
    name: "Fancy Pastels",
    price: 893,
    img: "https://img.mensxp.com/media/shop/catalog/products/J/728038/journee-pink-floral-print-cotton-half-sleeves-shirt-183253-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Black Hear ts Pattern",
    inStock: true,
    fastDelivery: false,
    categoryName: "shirt",
    rating: 5,
    offRate: "40%",
    originalPrice: 1399,
  },

  // jeans
  {
    _id: uuid(),
    name: "BEN MARTIN ",
    price: 500,
    img: "https://rukminim1.flixcart.com/image/496/595/kbb49zk0/jean/f/z/a/38-bmw-darklevis-d-ben-martin-original-imafszrt2eye6n7b.jpeg?q=50",
    infoTitle: "Regular Men White Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "jeans",
    rating: 4,
    offRate: "83%",
    originalPrice: 2999,
  },
  {
    _id: uuid(),
    name: "Provogue",
    price: 835,
    img: "https://rukminim1.flixcart.com/image/496/595/kwpam4w0/jean/c/s/z/32-praw21jn0100a-provogue-original-imag9bzzzfk3pref.jpeg?q=50",
    infoTitle: "Skinny Men Grey Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "jeans",
    rating: 3,
    offRate: "62%",
    originalPrice: 2199,
  },
  {
    _id: uuid(),
    name: "Ben Martin",
    price: 500,
    img: "https://rukminim1.flixcart.com/image/329/395/kbb49zk0/jean/p/g/p/32-bmw-darklevis-d-ben-martin-original-imafszrthheg5usf.jpeg?q=50",
    infoTitle: "Regular Men Blue Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "jeans",
    rating: 2,
    offRate: "83%",
    originalPrice: 2999,
  },

  {
    _id: uuid(),
    name: "Kultprit",
    price: 759,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/739286/black-cotton-extra-pocket-jeans-128268-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Black Cotton  Pocket Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "jeans",
    rating: 1,
    offRate: "60%",
    originalPrice: 759,
  },

  {
    _id: uuid(),
    name: "Campus Sutra",
    price: "700",
    img: "https://rukminim1.flixcart.com/image/496/595/knhsgi80/jean/n/c/q/34-ud0032-united-denim-original-imag25w5y4beythd.jpeg?q=50",
    infoTitle: "Navy Blue Torn Casual Jeans",
    inStock: false,
    fastDelivery: true,
    categoryName: "jeans",
    rating: 4,
    offRate: "20%",
    originalPrice: 600,
  },

  // shervani
  {
    _id: uuid(),
    name: "Hangup",
    price: 3999,
    img: "https://img.mensxp.com/media/shop/catalog/products/W/750734/white-polyester-viscose-sherwani-235681-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Navy Blue Torn Casual Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "sherwani",
    rating: 3,
    offRate: "60%",
    originalPrice: 9999,
  },

  {
    _id: uuid(),
    name: "Hangup",
    price: 3999,
    img: "https://img.mensxp.com/media/shop/catalog/products/W/750698/white-polyester-viscose-indo-western-sherwani-169325-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Navy Blue Torn Casual Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "sherwani",
    rating: 4,
    offRate: "60%",
    originalPrice: 9999,
  },
  {
    _id: uuid(),
    name: "Avata Sherwani",
    price: 1534,
    img: "https://rukminim1.flixcart.com/image/310/372/jt8yxe80/sherwani/f/r/m/3xl-101-sherwani-black-white-silk-churidar-varmohey-original-imafen8f3wgzdczt.jpeg?q=50",
    infoTitle: "Varmohey Solid Sherwani",
    inStock: true,
    fastDelivery: true,
    categoryName: "sherwani",
    rating: 5,
    offRate: "69%",
    originalPrice: 4999,
  },
  {
    _id: uuid(),
    name: "Print Sherwani",
    price: 1794,
    img: "https://rukminim1.flixcart.com/image/496/595/kp78e4w0/sherwani/6/e/o/l-cokurta2-nb-avaeta-original-imag3hmftehugyzh.jpeg?q=50",
    infoTitle: "Navy Green Torn Casual Jeans",
    inStock: true,
    fastDelivery: true,
    categoryName: "sherwani",
    rating: 3,
    offRate: "70%",
    originalPrice: 5999,
  },

  // t-shirt

  {
    _id: uuid(),
    name: "Blive",
    price: 209,
    img: "https://rukminim1.flixcart.com/image/329/395/kzllrbk0/t-shirt/b/6/d/l-bylrn-z31-blive-original-imagbkqgknxgmncw.jpeg?q=50",
    infoTitle: "Printed Men  Yellow T-Shirt",
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 3,
    offRate: "89%",
    originalPrice: 1999,
  },

  {
    _id: uuid(),
    name: "Tripr",
    price: 299,
    img: "https://rukminim1.flixcart.com/image/329/395/kyrlifk0/t-shirt/2/a/v/xxl-tbrblhenful-d37-tripr-original-imagax9ucbwhf7wn.jpeg?q=50",
    infoTitle: "Printed Men Round T-Shirt",
    inStock: true,
    fastDelivery: false,
    categoryName: "tshirt",
    rating: 2,
    offRate: "85%",
    originalPrice: 1999,
  },

  {
    _id: uuid(),
    name: "Eyebogler",
    price: 249,
    img: "https://rukminim1.flixcart.com/image/329/395/kiyw9e80-0/t-shirt/z/s/j/m-t2-seven-rocks-original-imafyn68m9v2pvwh.jpeg?q=50",
    infoTitle: "Men Hooded Black T-Shirt",
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 5,
    offRate: "85%",
    originalPrice: 1299,
  },

  {
    _id: uuid(),
    name: "Tripr",
    price: 800,
    img: "https://rukminim1.flixcart.com/image/310/372/kziqvm80/t-shirt/e/l/c/xl-tlorblhenful-d37-tripr-original-imagbgsyfdqhzgmz.jpeg?q=50",
    infoTitle: "Men Mandarin Collar Pink",
    inStock: true,
    fastDelivery: false,
    categoryName: "tshirt",
    rating: 4,
    offRate: "52%",
    originalPrice: 1550,
  },

  {
    _id: uuid(),
    name: "Adidas",
    price: 1200,
    img: "https://rukminim1.flixcart.com/image/496/595/km9ht3k0/t-shirt/p/r/z/m-gq2221-adidas-original-imagf7g6urzet67q.jpeg?q=50",
    infoTitle: "Printed Men Round Neck Yellow",
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 5,
    offRate: "85%",
    originalPrice: 3069,
  },

  // shoes

  {
    _id: uuid(),
    name: "WalkStyle",
    price: 799,
    img: "https://img.mensxp.com/media/shop/catalog/products/A/740311/air-series-blue-white-and-black-knitted-mesh-shoes-34644-default.jpg",
    infoTitle: "Mesh Sports Running Shoes",
    inStock: true,
    fastDelivery: true,
    categoryName: "shoes",
    rating: 5,
    offRate: "73%",
    originalPrice: 2999,
  },
  {
    _id: uuid(),
    name: "Extrimos",
    price: 1299,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/744344/brown-suede-knee-length-boot-sneakers-63052-default.jpg",
    infoTitle: "Brown Knee Length Boot Sneakers",
    inStock: true,
    fastDelivery: false,
    categoryName: "shoes",
    rating: 3,
    offRate: "71%",
    originalPrice: 2999,
  },
  {
    _id: uuid(),
    name: "San Frissco",
    price: 712,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/733963/black-billy-patent-monk-shoes-135269-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Black Billy Patent Monk Shoes",
    inStock: false,
    fastDelivery: true,
    categoryName: "shoes",
    rating: 5,
    offRate: "20%",
    originalPrice: 2999,
  },
  {
    _id: uuid(),
    name: "Duke",
    price: 1048,
    img: "https://img.mensxp.com/media/shop/catalog/products/B/725159/black-printed-skinny-fit-jeans-272677-default.jpg?w=500&h=700&cc=1&q=75",
    infoTitle: "Black Printed Skinny Fit Jeans",
    inStock: true,
    fastDelivery: false,
    categoryName: "jeans",
    rating: 3,
    offRate: "60%",
    originalPrice: 2998,
  },
];
