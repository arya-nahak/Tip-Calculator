function TipCalculator() {
  let mainObj = {
    isinit: false,
    billData: 0,
    rate_gv: 0,
    share_bill_person:0,
    init: function (bill, rating,sharing_bill,calc,result) {
      if (!mainObj.isinit) {
        mainObj.billing = document.querySelector(bill);
        mainObj.rate = document.querySelector(rating);
        mainObj.share = document.querySelector(sharing_bill);
        mainObj.calculator = document.querySelector(calc);
        mainObj.res = document.querySelector(result)

        mainObj.displaybill(mainObj.billing,mainObj.rate,mainObj.share);
        // mainObj.checkRating(mainObj.rate);
        // mainObj.share_bill(mainObj.share)
        mainObj.calculate(mainObj.calculator);
      }
    },
    displaybill(a,b,c) {
      a.addEventListener("change", (e) => {
        mainObj.billData = e.target.value;
      });

      b.addEventListener("change", (e) => {
        mainObj.rate_gv = e.target.value;
      });

      c.addEventListener('change',(e)=>{
        mainObj.share_bill_person = e.target.value
      })
    },
    calculate(clk) {
      clk.addEventListener("click", (e) => {

        e.preventDefault()
       mainObj.result=((mainObj.billData)/mainObj.share_bill_person)*mainObj.rate_gv

       mainObj.res.innerHTML=`Rs ${mainObj.result} Each Person`

      });
    },
  };
  return {
    init: mainObj.init,
  };
}

let tipCalculator = new TipCalculator();

tipCalculator.init("#Bill", "#rating","#sharing_bill","#calculate","#result");
