const end_bill = document.getElementById("money-input");
const button_inputs = document.getElementById("inside-field-set").children;
const number_of_people = document.getElementById("people-input");
const paragrapth_individual_tip = document.getElementById("tip-pay");
const paragrapth_tip_plus_payment = document.getElementById("total-amoun-of-all");
const erro_number_of_people_p = document.getElementById("cant-be-zero");
const customTipButton = document.getElementById("custom-tip");



function resultOfDevisionPerPerson(allThePeople, percentageOfTip, TotalBillToPay){
    // only tip calculation
    const num_before_percent = percentageOfTip / 100;
    const afterTgeDevition = num_before_percent * TotalBillToPay;
    const numOfDiners =  allThePeople;
    const tipPerPerson =  afterTgeDevition / numOfDiners;
    
    // tip + payment for each person
    const billsForEachPerson_with_tip = TotalBillToPay / allThePeople;
    const perPersonTip_plusPayment = tipPerPerson + billsForEachPerson_with_tip;

    paragrapth_individual_tip.innerHTML = `$${tipPerPerson.toFixed(2)}`;
    paragrapth_tip_plus_payment.innerHTML = `$${perPersonTip_plusPayment.toFixed(2)}`;

}







// looping over the button to get the percentages
for(let i = 0; i < button_inputs.length; i++){
    console.log(button_inputs[i]);
    button_inputs[i].addEventListener("click", event => {
        const end_bill_value_number = end_bill.value;
        if( parseInt(number_of_people.value) > 0 ){
            
            // Adding Custom tag to the input
            // customTipButton.innerHTML = "Custom";
            if (button_inputs[i].value.toUpperCase() === "CUSTOM"){
                customTipButton.setAttribute("type", "number");

                customTipButton.addEventListener("change", event => {
                  
                    resultOfDevisionPerPerson(parseInt(number_of_people.value), 
                    parseInt(customTipButton.value),
                    parseFloat(end_bill_value_number))
                
                
                })

            }

            resultOfDevisionPerPerson(parseInt(number_of_people.value), 
                            parseInt(button_inputs[i].value),
                            parseFloat(end_bill_value_number)
                            );
                            
        } else {
            erro_number_of_people_p.style.display = "inline-block";
            number_of_people.style.border = "solid 2px red"
        }

    })
    
}

