let sum = 0;
function handleClick(target){
    const selectContainer = document.getElementById("selectContainer");
    const total  = document.getElementById("total");
    const totalPrice  = document.getElementById("totalPrice");
    const discountPrice  = document.getElementById("discountPrice");
    const purchaseBtn = document.getElementById("purchaseBtn");
    const applyBtn = document.getElementById("applyBtn");
    const inputValue = document.getElementById("inputValue");
   
    const count = selectContainer.childElementCount;
    const itemName = target.childNodes[3].childNodes[1].innerText;
   //console.log(target.childNodes[3].childNodes[1].innerText);
   const li = document.createElement("li");
   
   li.innerText = (count + 1) + ". " + itemName;
   selectContainer.appendChild(li);
   li.style.listStyle = "none";
   const price = target.childNodes[3].childNodes[5].innerText;
  //console.log(target.childNodes[3].childNodes[5].innerText);
   sum = parseFloat(sum) + parseFloat(price);

   totalPrice.innerText = sum.toFixed(2);
  
   if(totalPrice.innerText > 0){
            purchaseBtn.removeAttribute("disabled");
            
        } 
        if(totalPrice.innerText >= 200){
            applyBtn.removeAttribute("disabled");
            
        } 
        applyBtn.addEventListener("click" ,() => {
            if(inputValue.value === "SELL200")  {
              discountPrice.innerText= (parseFloat(totalPrice.innerText) * 0.20).toFixed(2); 
               totalPrice.innerText  = (totalPrice.innerText - 40).toFixed(2);
               inputValue.value  = "";
               total.innerText = (totalPrice.innerText);
               

// Calculate the discounted price
// var discountedTotal = totalPrice - discount;

// // Update the discountPrice element with the calculated value
// discountPriceElement.innerText = discountedTotal.toFixed(2); 
purchaseBtn.addEventListener("click",() => {
  
})
            }
        })
        
}



