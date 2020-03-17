
export const formatPrice = price => {
  return typeof(price) != 'number'
    ? price
    : Math.ceil(price)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
};

export const handleIcons =  (stylesActive, stylesIcon) => {
  const select = document.querySelectorAll('.'+stylesIcon);
  for(let index in select){
    if(document.querySelectorAll('.'+stylesIcon)[index].classList){
      if(document.querySelectorAll('.'+stylesIcon)[index].classList.contains(stylesActive))
        document.querySelectorAll('.'+stylesIcon)[index].classList.remove(stylesActive);
    }
  }
};
