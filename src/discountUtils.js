export function calculateTotal(cartItems){
    return cartItems.reduce((total, item) => total + (item.price||0) * (item.quantity||1), 0);
}
export function calculateButtonDiscount(total, discountRate){
    return total * (discountRate / 100);
}
   
export function getCouponDiscount(coupon, totalPrice) {
  let discountPercent = 0;

  
  switch (coupon) {
    case "ANU10":
      discountPercent = 10;
      break;
    case "ANU20":
      discountPercent = 20;
      break;
    case "ANU30":
      discountPercent = 30;
      break;
    default:
      discountPercent = 0; // invalid
  }

  const discountAmount = (totalPrice * discountPercent) / 100;

  return {
    isValid: discountPercent > 0,
    discountPercent,
    discountAmount,
  };
}