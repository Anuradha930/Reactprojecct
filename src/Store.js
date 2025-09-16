// src/Store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// ================== Product Slice ==================
const productSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { id: 1, name: "Carrot", price: 40, image: "/Images/carrotfry.webp", description: "Fresh Carrot", saleEnd: "2025-11-09T23:59:59" },
      { id: 2, name: "Potato", price: 30, image: "/Images/aloofry.jpg", description: "Fresh Potato" },
      { id: 3, name: "Tomato", price: 50, image: "/Images/tomato.webp", description: "Fresh Tomato" },
      { id: 4, name: "Beetroot", price: 80, image: "/Images/beetroot.webp", description: "Fresh Beetroot", saleEnd: "2025-11-09T23:59:59" },
      { id: 5, name: "Brinjal", price: 50, image: "/Images/brinjal.webp", description: "Premium Brinjal" },
      { id: 6, name: "Bendakaya", price: 30, image: "/Images/bendakaya.webp", description: "Organic Bendakaya" },
      { id: 7, name: "Dondakaya", price: 50, image: "/Images/dondakaya.jpg", description: "Premium Dondakaya", saleEnd: "2025-11-09T23:59:59" },
      { id: 8, name: "Cabbage", price: 40, image: "/Images/cabbage.jpg", description: "Fresh Cabbage" },
      { id: 9, name: "Cauliflower", price: 70, image: "/Images/cauliflower.jpg", description: "Fresh Cauliflower" },
      { id: 10, name: "Mushroom", price: 150, image: "/Images/mushroom.webp", description: "Premium mushrooms", saleEnd: "2025-11-09T23:59:59" },
      { id: 11, name: "Capsicum", price: 120, image: "/Images/capsicum.jpg", description: "Fresh Capsicum" },
      { id: 12, name: "Cucumber", price: 70, image: "/Images/cucumber.jpeg", description: "Premium cucumber" },
      { id: 13, name: "Onion", price: 50, image: "/Images/onion.jpg", description: "Premium onion", saleEnd: "2025-11-09T23:59:59" },
      { id: 14, name: "Pea", price: 26, image: "/Images/pea.jpeg", description: "Premium pea" },
      { id: 15, name: "Drumstick", price: 60, image: "/Images/drumstick.webp", description: "Premium drumstick" },
      { id: 16, name: "Colocasia", price: 30, image: "/Images/colocasia.jpg", description: "Premium colocasia" },
      { id: 17, name: "Beans", price: 50, image: "/Images/beans.jpg", description: "Premium beans" }
    ],
    NonVeg: [
      { id: 101, name: "Chicken", price: 200, image: "/Images/chicken leg.jpeg", description: "Spicy fried chicken." },
      { id: 102, name: "Mutton", price: 500, image: "/Images/mutton curry.jpg", description: "Juicy mutton curry." },
      { id: 103, name: "Fish", price: 300, image: "/Images/Fish fry.jpeg", description: "Crispy fish fry." },
      { id: 104, name: "Prawns", price: 450, image: "/Images/prawn-fry.jpg", description: "Succulent prawns curry." },
      { id: 105, name: "Eggs Curry", price: 60, image: "/Images/EggCurry.jpg", description: "Egg curry in onion-tomato gravy." },
      { id: 106, name: "Veg Biryani", price: 150, image: "/Images/veg Biryani.jpg", description: "Aromatic veg biryani." },
      { id: 107, name: "Chicken Dhum Biryani", price: 350, image: "/Images/chicken dhumbiryani.jpg", description: "Spicy chicken biryani." },
      { id: 108, name: "Butter Chicken", price: 400, image: "/Images/butter-chicken.jpg", description: "Creamy butter chicken." },
      { id: 109, name: "Chicken 65", price: 250, image: "/Images/chicken65.webp", description: "Crispy and spicy chicken 65." },
      { id: 110, name: "Chicken Tikka", price: 300, image: "/Images/chickentTikka.jpg", description: "Smoky and flavorful chicken tikka." },
      { id: 111, name: "Prawns Biryani", price: 450, image: "/Images/frawns biryani.webp", description: "Tangy prawns biryani." },
      { id: 112, name: "Grilled Chicken", price: 320, image: "/Images/Grilled Chicken.webp", description: "Tender grilled chicken with spices." },
      { id: 113, name: "Mutton Biryani", price: 550, image: "/Images/mutton-biryani.jpg", description: "Royal mutton dum biryani." },
      { id: 114, name: "Fish Curry", price: 280, image: "/Images/fish-curry.webp", description: "Traditional South Indian fish curry." },
      { id: 115, name: "Crab Curry", price: 600, image: "/Images/crab-curry.webp", description: "Delicious crab curry with spices." },
      { id: 116, name: "Tandoori Chicken", price: 350, image: "/Images/tandoori-chicken.jpg", description: "Smoky tandoori roasted chicken." },
      { id: 117, name: "Egg Biryani", price: 180, image: "/Images/egg-biryani.webp", description: "Flavored rice with spiced eggs." },
      { id: 118, name: "Mutton Kebab", price: 400, image: "/Images/mutton-kebab.jpg", description: "Juicy grilled mutton kebabs." },
      { id: 119, name: "Fish Biryani", price: 350, image: "/Images/fishbiryani.webp", description: "Fragrant rice layered with fish masala." },
      { id: 120, name: "Chicken Shawarma", price: 150, image: "/Images/chicken-shawarma2.jpg", description: "Middle Eastern-style chicken wrap." },
      { id: 121, name: "Keema Curry", price: 320, image: "/Images/keema-curry.jpg", description: "Spiced minced mutton curry." },
      { id: 122, name: "Hyderabadi Chicken Curry", price: 370, image: "/Images/hyderabadi-chicken.jpg", description: "Authentic Hyderabadi-style chicken curry." },
      { id: 123, name: "Fish Tikka", price: 280, image: "/Images/fish-tikka.jpg", description: "Charcoal-grilled fish with spices." },
      { id: 124, name: "Prawn Fry", price: 420, image: "/Images/prawn-fry.jpg", description: "Crispy fried prawns with masala." },
      { id: 125, name: "Chicken Wings", price: 260, image: "/Images/chicken-wings.webp", description: "Hot and crispy chicken wings." }
    ],
    Milk: [
      { id: 201, name: "Milk", price: 80, image: "/Images/milk.jpg", description: "Fresh cow’s milk, rich in calcium and essential nutrients." },
      { id: 202, name: "Curd", price: 50, image: "/Images/curd.webp", description: "Thick homemade curd, perfect for digestion and cooling." },
      { id: 203, name: "Ghee", price: 200, image: "/Images/ghee.jpg", description: "Pure clarified butter made from fresh cream, aromatic and healthy." },
      { id: 204, name: "Lassi", price: 30, image: "/Images/lassi.jpg", description: "Refreshing yogurt-based drink, lightly sweetened and chilled." },
      { id: 205, name: "Buttermilk", price: 40, image: "/Images/buttermilk.webp", description: "Light and spiced buttermilk, perfect for summer hydration." },
      { id: 206, name: "Rose Milk", price: 30, image: "/Images/rosemilk.webp", description: "Chilled milk infused with rose syrup, aromatic and sweet." },
      { id: 207, name: "Paneer", price: 180, image: "/Images/paneer.jpg", description: "Fresh cottage cheese, soft and ideal for curries and snacks." },
      { id: 208, name: "Cheese", price: 250, image: "/Images/cheese.webp", description: "Creamy dairy cheese, perfect for sandwiches and pizzas." },
      { id: 209, name: "Butter", price: 120, image: "/Images/butter.jpg", description: "Smooth and rich butter, ideal for cooking and baking." },
      { id: 210, name: "Flavored Milk", price: 50, image: "/Images/flavored-milk.webp", description: "Chilled milk with chocolate, vanilla, and strawberry flavors." },
      { id: 211, name: "Milk Powder", price: 200, image: "/Images/milk-powder.jpeg", description: "High-quality milk powder, great for tea, coffee, and baking." },
      { id: 212, name: "Khoa / Mawa", price: 220, image: "/Images/mawa.webp", description: "Traditional condensed milk base used for Indian sweets." },
      { id: 213, name: "Whipped Cream", price: 150, image: "/Images/whipped-cream.jpeg", description: "Fluffy whipped cream, perfect for desserts and toppings." },
      { id: 214, name: "Condensed Milk", price: 180, image: "/Images/condensed-milk.jpeg", description: "Sweetened thick milk, commonly used in desserts." },
      { id: 215, name: "Milkshake", price: 70, image: "/Images/milkshake.webp", description: "Creamy blended milkshake available in chocolate and vanilla." },
      { id: 216, name: "Kulfi", price: 60, image: "/Images/kulfi.webp", description: "Traditional Indian frozen milk dessert with cardamom and saffron." },
      { id: 217, name: "Ice Cream", price: 100, image: "/Images/ice-cream.webp", description: "Creamy dairy ice cream in multiple flavors." },
      { id: 218, name: "Milk Bread", price: 40, image: "/Images/milk-bread.webp", description: "Soft milk bread loaf, fluffy and lightly sweet." },
      { id: 219, name: "Basundi", price: 120, image: "/Images/basundi.webp", description: "Rich Indian dessert made from thickened milk and dry fruits." },
      { id: 220, name: "Rabri", price: 150, image: "/Images/rabri.jpeg", description: "Sweet thickened milk dessert flavored with cardamom and saffron." }
    ],
    Drinks: [
      { id: 301, name: "sapota", price: 80, image: "/Images/sapotajuice.jpeg", description: "A creamy and naturally sweet sapota juice, rich in energy and vitamins." },
      { id: 302, name: "Papaya", price: 50, image: "/Images/papaya Juice.jpeg", description: "Refreshing papaya juice packed with antioxidants and digestive enzymes." },
      { id: 303, name: "Muskmelon", price: 50, image: "/Images/muskmelon drink.jpg", description: "Cool and hydrating muskmelon juice, perfect for hot summer days." },
      { id: 304, name: "Strawberry", price: 30, image: "/Images/strawberrymilkshake.jpg", description: "Delicious strawberry milkshake made with fresh berries and creamy milk." },
      { id: 305, name: "Pineapple", price: 40, image: "/Images/Pinapple drink.jpg", description: "Tangy and sweet pineapple juice, a tropical delight for every sip." },
      { id: 306, name: "Vanilla", price: 30, image: "/Images/vanilla .jpeg", description: "Smooth vanilla milkshake with a rich and creamy flavor." },
      { id: 307, name: "Mango", price: 60, image: "/Images/mangojuice.webp", description: "Classic mango juice made from ripe Alphonso mangoes." },
      { id: 308, name: "Orange", price: 45, image: "/Images/orange.webp", description: "Fresh orange juice, rich in Vitamin C and natural sweetness." },
      { id: 309, name: "Apple", price: 55, image: "/Images/applejuice.jpeg", description: "Crisp and refreshing apple juice full of natural goodness." },
      { id: 310, name: "Banana", price: 40, image: "/Images/bananashake.webp", description: "Thick and creamy banana shake with natural sweetness." },
      { id: 311, name: "Grapes", price: 50, image: "/Images/grapes.webp", description: "Sweet grape juice made from fresh black grapes." },
      { id: 312, name: "Watermelon", price: 35, image: "/Images/watermelonjuice.webp", description: "Juicy watermelon drink to keep you cool and refreshed." },
      { id: 313, name: "Lemon", price: 25, image: "/Images/lemonjuice.webp", description: "Tangy lemon juice with a dash of sweetness and salt." },
      { id: 314, name: "Coconut Water", price: 30, image: "/Images/coconutWater.webp", description: "Natural coconut water, hydrating and refreshing." },
      { id: 315, name: "Guava", price: 45, image: "/Images/guavajuice.jpeg", description: "Tropical guava juice with a sweet and tangy flavor." },
      { id: 316, name: "Kiwi", price: 70, image: "/Images/kiwijuice.jpeg", description: "Exotic kiwi juice, loaded with Vitamin C and antioxidants." },
      { id: 317, name: "Pomegranate", price: 75, image: "/Images/pomegranatejuice.jpeg", description: "Rich pomegranate juice known for its antioxidants and sweetness." },
      { id: 318, name: "Lychee", price: 65, image: "/Images/lycheejuice.webp", description: "Sweet lychee juice with a refreshing tropical twist." },
      { id: 319, name: "Blackberry", price: 80, image: "/Images/blackberryjuice.webp", description: "Delicious blackberry juice full of tangy-sweet flavors." },
      { id: 320, name: "Peach", price: 60, image: "/Images/peachjuice.webp", description: "Juicy peach drink with a refreshing fruity taste." },
      { id: 321, name: "Blueberry", price: 85, image: "/Images/blueberryjuice.webp", description: "Sweet and tangy blueberry juice, a superfruit refreshment." },
      { id: 322, name: "Custard Apple", price: 90, image: "/Images/custardapplejuice.jpg", description: "Unique custard apple juice with a creamy tropical flavor." },
      { id: 323, name: "Chikoo", price: 55, image: "/Images/chikoojuice.jpeg", description: "Sweet chikoo shake with a naturally malty flavor." },
      { id: 324, name: "Carrot", price: 40, image: "/Images/carrotjuice.webp", description: "Healthy carrot juice rich in Vitamin A and antioxidants." },
      { id: 325, name: "Beetroot", price: 50, image: "/Images/beetrootjuice.webp", description: "Detoxifying beetroot juice, great for stamina and health." }
    ],
    Chocolate: [
      { id: 401, name: "Dairy Milk", price: 50, image: "/Images/dairy-milk.jpg", description: "Classic Cadbury Dairy Milk, smooth and creamy milk chocolate." },
      { id: 402, name: "KitKat", price: 60, image: "/Images/kitkat.webp", description: "Crispy wafer fingers covered with rich chocolate." },
      { id: 403, name: "Perk", price: 20, image: "/Images/perk.webp", description: "Light wafer chocolate bar, crunchy and delightful." },
      { id: 404, name: "5 Star", price: 30, image: "/Images/fivestar.webp", description: "Chewy caramel and nougat wrapped in smooth chocolate." },
      { id: 405, name: "Nestle", price: 50, image: "/Images/nestle.jpg", description: "Delicious Nestle chocolate with a rich cocoa taste." },
      { id: 406, name: "Mars", price: 60, image: "/Images/mars.jpg", description: "Chocolate bar with nougat, caramel, and a chocolate coating." },
      { id: 407, name: "Lindt", price: 80, image: "/Images/lindt.webp", description: "Premium Swiss chocolate with a velvety texture." },
      { id: 408, name: "Bounty", price: 70, image: "/Images/bounty.webp", description: "Coconut filled bar covered in chocolate." },
      { id: 409, name: "Toblerone", price: 90, image: "/Images/toblerone.jpg", description: "Triangular Swiss chocolate with honey and almond nougat." },
      { id: 410, name: "Snickers", price: 40, image: "/Images/snickers.jpg", description: "Chocolate bar with peanuts, nougat, and caramel." },
      { id: 411, name: "Ferrero Rocher", price: 120, image: "/Images/ferrero.jpg", description: "Hazelnut chocolate ball with crispy layers." },
      { id: 412, name: "Amul Dark", price: 50, image: "/Images/amul-dark.jpg", description: "Rich and intense dark chocolate by Amul." },
      { id: 413, name: "Milkybar", price: 30, image: "/Images/milkybar.jpg", description: "White chocolate bar with a smooth milky flavor." },
      { id: 414, name: "Galaxy", price: 60, image: "/Images/galaxy.jpg", description: "Silky and creamy milk chocolate." },
      { id: 415, name: "Hershey’s", price: 70, image: "/Images/hersheys.jpg", description: "American chocolate with a distinct cocoa flavor." },
      { id: 416, name: "Temptations", price: 80, image: "/Images/temptations.webp", description: "Exotic chocolate with fruit and nut blends." },
      { id: 417, name: "Cadbury Silk", price: 100, image: "/Images/silk.jpg", description: "Smooth and rich Cadbury Silk chocolate." },
      { id: 418, name: "Munch", price: 20, image: "/Images/munch.webp", description: "Crunchy wafer chocolate coated with milk chocolate." },
      { id: 419, name: "Choco Pie", price: 30, image: "/Images/chocopie.jpg", description: "Soft cake filled with marshmallow and coated in chocolate." },
      { id: 420, name: "Bar One", price: 25, image: "/Images/barone.jpg", description: "Caramel and nougat-filled chocolate bar." }
    ]
  },
  reducers: {}
});

// ================== Cart Slice ==================
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;
