function calculateTotal(){
    let total = 0;
    let deliveryFee = 150;
    let discount = 0;
  
    let productA = document.getElementById("productA").checked;
    let productB = document.getElementById("productB").checked;
    let productC = document.getElementById("productC").checked;
    let productD = document.getElementById("productD").checked;
    let productE = document.getElementById("productE").checked;

    
    if (productA){
      total+=200;
    }
    if (productB){
      total+=500;
    }
    if (productC){
      total+=3000;
    }
    if (productD){
        total+=2000;
      }
      if (productE){
        total+=450;
      }

    if (total > 1500){
      deliveryFee = 0;
      discount = total * 0.1;
      
    }else {
        discount = 0;
        deliveryFee = 150;
    }
  
    total += deliveryFee;
    total -=discount;
  
    document.getElementById("displayTotal").style.display ="block";
    document.getElementById("totalValue").innerHTML = total;
  };
  