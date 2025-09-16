// src/Store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";


// ================== Product Slice ==================
const productSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { id: 1, name: "Carrot", price: 40, image: "public/Images.jsx/carrotfry.webp", description: "Fresh Carrot",saleEnd: "2025-11-09T23:59:59"  },
      { id: 2, name: "Potato", price: 30, image: "public/Images.jsx/aloofry.jpg", description: "Fresh Potato" },
      { id: 3, name: "Tomato", price: 50, image: "public/Images.jsx/tomato.webp", description: "Fresh Tomato" },
      { id: 4, name: "Beetroot", price: 80, image: "public/Images.jsx/beetroot.webp", description: "Fresh Beetroot",saleEnd: "2025-11-09T23:59:59" },
      { id: 5, name: "Brinjal", price: 50, image: "public/Images.jsx/brinjal.webp", description: "Premium Brinjal" },
      { id: 6, name: "Bendakaya", price: 30, image: "public/Images.jsx/bendakaya.webp", description: "Organic Bendakaya" },
      { id: 7, name: "Dondakaya", price: 50, image: "public/Images.jsx/dondakaya.jpg", description: "Premium Dondakaya",saleEnd: "2025-11-09T23:59:59" },
      { id: 8, name: "Cabbage", price: 40, image: "public/Images.jsx/cabbage.jpg", description: "Fresh Cabbage" },
      { id: 9, name: "Cauliflower", price: 70, image: "public/Images.jsx/cauliflower.jpg", description: "Fresh Cauliflower" },
      { id: 10, name: "Mushroom", price: 150, image: "public/Images.jsx/mushroom.webp", description: "Premium mushrooms",saleEnd: "2025-11-09T23:59:59" },
      { id: 11, name: "Capsicum", price: 120, image: "public/Images.jsx/capsicum.jpg", description: "Fresh Capsicum" },
      { id: 12, name: "Cucumber", price: 70, image: "public/Images.jsx/cucumber.jpeg", description: "Premium cucumber" },
      { id: 13, name: "Onion", price: 50, image: "public/Images.jsx/onion.jpg", description: "Premium onion" ,saleEnd: "2025-11-09T23:59:59"},
      { id: 14, name: "Pea", price: 26, image: "public/Images.jsx/pea.jpeg", description: "Premium pea" },
      { id: 15, name: "Drumstick", price: 60, image: "public/Images.jsx/drumstick.webp", description: "Premium drumstick" },
      { id: 16, name: "Colocasia", price: 30, image: "public/Images.jsx/colocasia.jpg", description: "Premium colocasia" },
      
      { id: 17, name: "Beans", price: 50, image: "public/Images.jsx/beans.jpg", description: "Premium beans" }
    ],
   NonVeg: [
  { id: 101, name: "Chicken", price: 200, image: "public/Images.jsx/chicken leg.jpeg", description: "Spicy fried chicken." },
  { id: 102, name: "Mutton", price: 500, image: "public/images.jsx/mutton curry.jpg", description: "Juicy mutton curry." },
  { id: 103, name: "Fish", price: 300, image: "public/images.jsx/Fish fry.jpeg", description: "Crispy fish fry." },
  { id: 104, name: "Prawns", price: 450, image: "public/Images.jsx/prawn-fry.jpg", description: "Succulent prawns curry." },
  { id: 105, name: "Eggs Curry", price: 60, image: "public/images.jsx/EggCurry.jpg", description: "Egg curry in onion-tomato gravy." },
  { id: 106, name: "Veg Biryani", price: 150, image: "public/images.jsx/veg Biryani.jpg", description: "Aromatic veg biryani." },
  { id: 107, name: "Chicken Dhum Biryani", price: 350, image: "public/Images.jsx/chicken dhumbiryani.jpg", description: "Spicy chicken biryani." },
  { id: 108, name: "Butter Chicken", price: 400, image: "public/images.jsx/butter-chicken.jpg", description: "Creamy butter chicken." },
  { id: 109, name: "Chicken 65", price: 250, image: "public/Images.jsx/chicken65.webp", description: "Crispy and spicy chicken 65." },
  { id: 110, name: "Chicken Tikka", price: 300, image: "public/Images.jsx/chickentTikka.jpg", description: "Smoky and flavorful chicken tikka." },
  { id: 111, name: "Prawns Biryani", price: 450, image: "public/Images.jsx/frawns biryani.webp", description: "Tangy prawns biryani." },

  // ✅ Added items
  { id: 112, name: "Grilled Chicken", price: 320, image: "public/Images.jsx/Grilled Chicken.webp", description: "Tender grilled chicken with spices." },
  { id: 113, name: "Mutton Biryani", price: 550, image: "public/Images.jsx/mutton-biryani.jpg", description: "Royal mutton dum biryani." },
  { id: 114, name: "Fish Curry", price: 280, image: "public/Images.jsx/fish-curry.webp", description: "Traditional South Indian fish curry." },
  { id: 115, name: "Crab Curry", price: 600, image: "public/Images.jsx/crab-curry.webp", description: "Delicious crab curry with spices." },
  { id: 116, name: "Tandoori Chicken", price: 350, image: "public/Images.jsx/tandoori-chicken.jpg", description: "Smoky tandoori roasted chicken." },
  { id: 117, name: "Egg Biryani", price: 180, image: "public/Images.jsx/egg-biryani.webp", description: "Flavored rice with spiced eggs." },
  { id: 118, name: "Mutton Kebab", price: 400, image: "public/Images.jsx/mutton-kebab.jpg", description: "Juicy grilled mutton kebabs." },
  { id: 119, name: "Fish Biryani", price: 350, image: "public/Images.jsx/fishbiryani.webp", description: "Fragrant rice layered with fish masala." },
  { id: 120, name: "Chicken Shawarma", price: 150, image: "public/Images.jsx/chicken-shawarma2.jpg", description: "Middle Eastern-style chicken wrap." },
  { id: 121, name: "Keema Curry", price: 320, image: "public/Images.jsx/keema-curry.jpg", description: "Spiced minced mutton curry." },
  { id: 122, name: "Hyderabadi Chicken Curry", price: 370, image: "public/Images.jsx/hyderabadi-chicken.jpg", description: "Authentic Hyderabadi-style chicken curry." },
  { id: 123, name: "Fish Tikka", price: 280, image: "public/Images.jsx/fish-tikka.jpg", description: "Charcoal-grilled fish with spices." },
  { id: 124, name: "Prawn Fry", price: 420, image: "public/Images.jsx/prawn-fry.jpg", description: "Crispy fried prawns with masala." },
  { id: 125, name: "Chicken Wings", price: 260, image: "public/Images.jsx/chicken-wings.webp", description: "Hot and crispy chicken wings." }
],
    Milk: [
  { id: 201, name: "Milk", price: 80, image: "public/images.jsx/milk.jpg", description: "Fresh cow’s milk, rich in calcium and essential nutrients." },
  { id: 202, name: "Curd", price: 50, image: "public/images.jsx/curd.webp", description: "Thick homemade curd, perfect for digestion and cooling." },
  { id: 203, name: "Ghee", price: 200, image: "public/images.jsx/ghee.jpg", description: "Pure clarified butter made from fresh cream, aromatic and healthy." },
  { id: 204, name: "Lassi", price: 30, image: "public/images.jsx/lassi.jpg", description: "Refreshing yogurt-based drink, lightly sweetened and chilled." },
  { id: 205, name: "Buttermilk", price: 40, image: "public/images.jsx/buttermilk.webp", description: "Light and spiced buttermilk, perfect for summer hydration." },
  { id: 206, name: "Rose Milk", price: 30, image: "public/Images.jsx/rosemilk.webp", description: "Chilled milk infused with rose syrup, aromatic and sweet." },

  // ✅ Added milk items
  { id: 207, name: "Paneer", price: 180, image: "public/Images.jsx/paneer.jpg", description: "Fresh cottage cheese, soft and ideal for curries and snacks." },
  { id: 208, name: "Cheese", price: 250, image: "public/Images.jsx/cheese.webp", description: "Creamy dairy cheese, perfect for sandwiches and pizzas." },
  { id: 209, name: "Butter", price: 120, image: "public/Images.jsx/butter.jpg", description: "Smooth and rich butter, ideal for cooking and baking." },
  { id: 210, name: "Flavored Milk", price: 50, image: "public/Images.jsx/flavored-milk.webp", description: "Chilled milk with chocolate, vanilla, and strawberry flavors." },
  { id: 211, name: "Milk Powder", price: 200, image: "public/Images.jsx/milk-powder.jpeg", description: "High-quality milk powder, great for tea, coffee, and baking." },
  { id: 212, name: "Khoa / Mawa", price: 220, image: "public/Images.jsx/mawa.webp", description: "Traditional condensed milk base used for Indian sweets." },
  { id: 213, name: "Whipped Cream", price: 150, image: "public/Images.jsx/whipped-cream.jpeg", description: "Fluffy whipped cream, perfect for desserts and toppings." },
  { id: 214, name: "Condensed Milk", price: 180, image: "public/Images.jsx/condensed-milk.jpeg", description: "Sweetened thick milk, commonly used in desserts." },
  { id: 215, name: "Milkshake", price: 70, image: "public/Images.jsx/milkshake.webp", description: "Creamy blended milkshake available in chocolate and vanilla." },
  { id: 216, name: "Kulfi", price: 60, image: "public/Images.jsx/kulfi.webp", description: "Traditional Indian frozen milk dessert with cardamom and saffron." },
  { id: 217, name: "Ice Cream", price: 100, image: "public/Images.jsx/ice-cream.webp", description: "Creamy dairy ice cream in multiple flavors." },
  { id: 218, name: "Milk Bread", price: 40, image: "public/Images.jsx/milk-bread.webp", description: "Soft milk bread loaf, fluffy and lightly sweet." },
  { id: 219, name: "Basundi", price: 120, image: "public/Images.jsx/basundi.webp", description: "Rich Indian dessert made from thickened milk and dry fruits." },
  { id: 220, name: "Rabri", price: 150, image: "public/Images.jsx/rabri.jpeg", description: "Sweet thickened milk dessert flavored with cardamom and saffron." }
],
   Drinks: [
  { id: 301, name: "sapota",price: 80, image: "public/Images.jsx/sapotajuice.jpeg",description: "A creamy and naturally sweet sapota juice, rich in energy and vitamins."},
  { id: 302, name: "Papaya", price: 50, image: "public/Images.jsx/papaya Juice.jpeg",description: "Refreshing papaya juice packed with antioxidants and digestive enzymes."},
  {id: 303,  name: "Muskmelon", price: 50, image: "public/Images.jsx/muskmelon drink.jpg",description: "Cool and hydrating muskmelon juice, perfect for hot summer days."},
  {id: 304,  name: "Strawberry", price: 30, image: "public/Images.jsx/strawberrymilkshake.jpg",description: "Delicious strawberry milkshake made with fresh berries and creamy milk."},
  {id: 305, name: "Pineapple", price: 40, image: "public/Images.jsx/Pinapple drink.jpg",description: "Tangy and sweet pineapple juice, a tropical delight for every sip."},
  {id: 306, name: "Vanilla", price: 30, image: "public/Images.jsx/vanilla .jpeg",description: "Smooth vanilla milkshake with a rich and creamy flavor."},
  {id: 307, name: "Mango", price: 60, image: "public/Images.jsx/mangojuice.webp",description: "Classic mango juice made from ripe Alphonso mangoes."},
  {id: 308, name: "Orange",price: 45, image: "public/Images.jsx/orange.webp",description: "Fresh orange juice, rich in Vitamin C and natural sweetness."},
  {id: 309, name: "Apple", price: 55, image: "public/Images.jsx/applejuice.jpeg",description: "Crisp and refreshing apple juice full of natural goodness."},
  { id: 310,name: "Banana", price: 40, image: "public/Images.jsx/bananashake.webp",description: "Thick and creamy banana shake with natural sweetness."},
  {id: 311,name: "Grapes", price: 50, image: "public/Images.jsx/grapes.webp",description: "Sweet grape juice made from fresh black grapes."},
  {id: 312, name: "Watermelon", price: 35, image: "public/Images.jsx/watermelonjuice.webp",description: "Juicy watermelon drink to keep you cool and refreshed."},
  { id: 313,name: "Lemon", price: 25, image: "public/Images.jsx/lemonjuice.webp",description: "Tangy lemon juice with a dash of sweetness and salt."},
  { id: 314, name: "Coconut Water", price: 30, image: "public/Images.jsx/coconutWater.webp",description: "Natural coconut water, hydrating and refreshing."},
  { id: 315, 
    name: "Guava", 
    price: 45, 
    image: "public/Images.jsx/guavajuice.jpeg",
    description: "Tropical guava juice with a sweet and tangy flavor."
  },
  { 
    id: 316, 
    name: "Kiwi", 
    price: 70, 
    image: "public/Images.jsx/kiwijuice.jpeg",
    description: "Exotic kiwi juice, loaded with Vitamin C and antioxidants."
  },
  { 
    id: 317, 
    name: "Pomegranate", 
    price: 75, 
    image: "public/Images.jsx/pomegranatejuice.jpeg",
    description: "Rich pomegranate juice known for its antioxidants and sweetness."
  },
  { 
    id: 318, 
    name: "Lychee", 
    price: 65, 
    image: "public/Images.jsx/lycheejuice.webp",
    description: "Sweet lychee juice with a refreshing tropical twist."
  },
  { 
    id: 319, 
    name: "Blackberry", 
    price: 80, 
    image: "public/Images.jsx/blackberryjuice.webp",
    description: "Delicious blackberry juice full of tangy-sweet flavors."
  },
  { 
    id: 320, 
    name: "Peach", 
    price: 60, 
    image: "public/Images.jsx/peachjuice.webp",
    description: "Juicy peach drink with a refreshing fruity taste."
  },
  { 
    id: 321, 
    name: "Blueberry", 
    price: 85, 
    image: "public/Images.jsx/blueberryjuice.webp",
    description: "Sweet and tangy blueberry juice, a superfruit refreshment."
  },
  { 
    id: 322, 
    name: "Custard Apple", 
    price: 90, 
    image: "public/Images.jsx/custardapplejuice.jpg",
    description: "Unique custard apple juice with a creamy tropical flavor."
  },
  { 
    id: 323, 
    name: "Chikoo", 
    price: 55, 
    image: "public/Images.jsx/chikoojuice.jpeg",
    description: "Sweet chikoo shake with a naturally malty flavor."
  },
  { 
    id: 324, 
    name: "Carrot", 
    price: 40, 
    image: "public/Images.jsx/carrotjuice.webp",
    description: "Healthy carrot juice rich in Vitamin A and antioxidants."
  },
  { 
    id: 325, 
    name: "Beetroot", 
    price: 50, 
    image: "public/Images.jsx/beetrootjuice.webp",
    description: "Detoxifying beetroot juice, great for stamina and health."
  }
],
    Chocolate: [
  { id: 401, name: "Dairy Milk", price: 50, image: "public/images.jsx/dairy-milk.jpg", description: "Classic Cadbury Dairy Milk, smooth and creamy milk chocolate." },
  { id: 402, name: "KitKat", price: 60, image: "public/images.jsx/kitkat.webp", description: "Crispy wafer fingers covered with rich chocolate." },
  { id: 403, name: "Perk", price: 20, image: "public/images.jsx/perk.webp", description: "Light wafer chocolate bar, crunchy and delightful." },
  { id: 404, name: "5 Star", price: 30, image: "public/Images.jsx/fivestar.webp", description: "Chewy caramel and nougat wrapped in smooth chocolate." },
  { id: 405, name: "Nestle", price: 50, image: "public/images.jsx/nestle.jpg", description: "Delicious Nestle chocolate with a rich cocoa taste." },
  { id: 406, name: "Mars", price: 60, image: "public/images.jsx/mars.jpg", description: "Chocolate bar with nougat, caramel, and a chocolate coating." },
  { id: 407, name: "Lindt", price: 80, image: "public/images.jsx/lindt.webp", description: "Premium Swiss chocolate with a velvety texture." },
  { id: 408, name: "Godiva", price: 90, image: "public/images.jsx/godiva.webp", description: "Luxurious Belgian chocolate with a refined taste." },
  { id: 409, name: "Gems", price: 30, image: "public/images.jsx/gems.webp", description: "Colorful candy-coated chocolate buttons, fun for kids." },

  // ✅ Added chocolates
  { id: 410, name: "Toblerone", price: 120, image: "public/Images.jsx/toblerone.webp", description: "Iconic triangular Swiss chocolate with honey and almond nougat." },
  { id: 411, name: "Ferrero Rocher", price: 150, image: "public/images.jsx/ferrero-rocher.webp", description: "Crispy wafer shell filled with hazelnut cream and covered in chocolate." },
  { id: 412, name: "Bournville", price: 80, image: "public/images.jsx/bournville.webp", description: "Rich dark chocolate with an intense cocoa flavor." },
  { id: 413, name: "Milky Bar", price: 40, image: "public/images.jsx/milky-bar.webp", description: "Creamy white chocolate loved by kids and adults alike." },
  { id: 414, name: "Galaxy", price: 70, image: "public/images.jsx/galaxy.webp", description: "Silky smooth chocolate with a creamy melt-in-mouth feel." },
  { id: 415, name: "Snickers", price: 60, image: "public/Images.jsx/snickers.jpeg", description: "Chocolate bar filled with nougat, caramel, and crunchy peanuts." },
  { id: 416, name: "Twix", price: 65, image: "public/images.jsx/twix.webp", description: "Crispy biscuit layered with caramel, covered in chocolate." },
  { id: 417, name: "Crunch", price: 50, image: "public/Images.jsx/crunch.jpeg", description: "Nestle Crunch with crispy rice and creamy chocolate." },
  { id: 418, name: "Hershey’s", price: 90, image: "public/images.jsx/hersheys.webp", description: "Classic American chocolate with a distinct cocoa taste." },
  { id: 419, name: "After Eight", price: 100, image: "public/images.jsx/after-eight.webp", description: "Mint-flavored dark chocolate thins for a refreshing taste." },
  { id: 420, name: "Ritter Sport", price: 110, image: "public/images.jsx/ritter-sport.webp", description: "Square German chocolate bar available in many flavors." },
  { id: 421, name: "Ghirardelli", price: 120, image: "public/images.jsx/ghirardelli.webp", description: "Premium American chocolate with rich cocoa blends." },
  { id: 422, name: "Cadbury Silk", price: 90, image: "public/images.jsx/cadbury-silk.webp", description: "Smooth and creamy Silk chocolate for indulgent moments." },
  { id: 423, name: "Milka", price: 80, image: "public/images.jsx/milka.webp", description: "Famous Alpine milk chocolate from Switzerland." },
  { id: 424, name: "Patchi", price: 200, image: "public/images.jsx/patchi.webp", description: "Luxury Lebanese chocolates made with high-quality cocoa." },
  { id: 425, name: "Choco Pie", price: 50, image: "public/images.jsx/choco-pie.webp", description: "Soft marshmallow-filled cake coated with chocolate." },
  { id: 426, name: "Kinder Bueno", price: 100, image: "public/images.jsx/kinder-bueno.webp", description: "Crispy wafer filled with creamy hazelnut chocolate." },
  { id: 427, name: "Kinder Joy", price: 40, image: "public/images.jsx/kinder-joy.webp", description: "Fun chocolate treat with a toy surprise for kids." },
  { id: 428, name: "Loacker", price: 60, image: "public/images.jsx/loacker.webp", description: "Wafer-based chocolate with creamy hazelnut filling." },
  { id: 429, name: "Dark Fantasy Choco Fills", price: 70, image: "public/images.jsx/dark-fantasy.webp", description: "Soft chocolate cookie filled with molten chocolate inside." },
  { id: 430, name: "Bar One", price: 50, image: "public/images.jsx/bar-one.webp", description: "Layered nougat and caramel wrapped in milk chocolate." }
]
  },
  reducers: {}
});
// ================== Cart Slice ==================
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.find(i => i.id === item.id);
      if (existing) existing.quantity += 1;
      else state.push({ ...item, quantity: 1 });
    },
    removeFromCart: (state, action) => state.filter(i => i.id !== action.payload),
    incrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else return state.filter(i => i.id !== action.payload);
      }
    },
    clearCart: () => [],
  },
});

// ================== Orders Slice ==================
const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
        date: new Date().toLocaleString(),
      };
      state.push(newOrder);
    },
    clearOrders: () => [],
     deleteOrder: (state, action) => state.filter(order => order.id !== action.payload),
  },
});


// ================== Auth Slice ==================
const initialAuthState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      const existing = state.users.find(u => u.username === username);
      if (existing) state.error = "User already exists!";
      else {
        state.users.push({ username, password });
        state.error = null;
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(u => u.username === username && u.password === password);
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else state.error = "Invalid credentials!";
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

// ================== Store ==================
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    auth: authSlice.reducer,
  },
});

// ================== Persist cart & orders ==================
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("orders", JSON.stringify(state.orders));
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const { addOrder, clearOrders, deleteOrder } = ordersSlice.actions;
export const { register, login, logout } = authSlice.actions;


export default store;
