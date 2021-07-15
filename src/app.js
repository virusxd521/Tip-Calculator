const end_bill = document.getElementById("money-input");
const button_inputs = document.getElementById("inside-field-set").children;
const number_of_people = document.getElementById("people-input");
const paragrapth_individual_tip = document.getElementById("tip-pay");
const paragrapth_tip_plus_payment = document.getElementById("total-amoun-of-all");
const erro_number_of_people_p = document.getElementById("cant-be-zero");


// formula ---- 
// percentage / 100 (15 / 100)
// the result (in this example = 0.15)
// multipy the result with the total bill 
// in this example (0.15 * 142.55);
//  the result os 21.3825
// devide by the number of people
// in this example 5 
// 21.3825 / 5 = 4.27


function resultOfDevisionPerPerson(allThePeople, percentageOfTip, TotalBillToPay){
    // only tip calculation
    const num_before_percent = percentageOfTip / 100;
    const afterTgeDevition = num_before_percent * TotalBillToPay;
    const numOfDiners =  allThePeople;
    const tipPerPerson =  afterTgeDevition / numOfDiners;
    
    // tip + payment for each person
    const billsForEachPerson_with_tip = TotalBillToPay / allThePeople;
    const perPersonTip_plusPayment = tipPerPerson + billsForEachPerson_with_tip;

    paragrapth_individual_tip.innerHTML = `$${tipPerPerson}`;
    paragrapth_tip_plus_payment.innerHTML = `$${perPersonTip_plusPayment}`;
    
}




// looping over the button to get the percentages
for(let i = 0; i < button_inputs.length; i++){
    console.log(button_inputs[i]);
    button_inputs[i].addEventListener("click", event => {
        const end_bill_value_number = end_bill.value;
        if( parseInt(number_of_people.value) > 0 ){
            
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

