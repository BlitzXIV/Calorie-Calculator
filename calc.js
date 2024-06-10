document.addEventListener('DOMContentLoaded', function(){
    
    let finCalContain = document.getElementById('finCalContain');
    const calcBtn = document.getElementById('button');
    let finLabel = document.createElement('p')
    const mealBtn = document.createElement('button');
    let mealTotal = 0
    const mealLabel =  document.createElement('p')
    let finalCals;
    const reset = document.createElement('button')
    reset.textContent = 'Reset'

    const mealContain = document.getElementById('mealContain');
    mealBtn.textContent = 'Add to Meal'

        form.addEventListener('submit', function(event){
            event.preventDefault();
    
        
            let cals = parseFloat(document.getElementById('calPerServ').value);
            let serv = parseFloat(document.getElementById('servAmt').value);
            let measure = parseFloat(document.getElementById('cstmServ').value);

           
        
            let calsPerGram = cals / serv;
            finalCals = calsPerGram * measure;
            finalCals = parseFloat(finalCals.toFixed(1))

            
               
            finLabel.textContent = 'Calories in Food ' + finalCals 
            finCalContain.appendChild(finLabel);
            mealContain.appendChild(mealBtn)
            mealContain.appendChild(reset)
         });

        mealBtn.addEventListener('click', function(){
            mealTotal += finalCals.toFixed(1)
            mealLabel.textContent = 'Total Meal Calories ' + mealTotal;
            reset.addEventListener('click' , function(){
            mealContain.removeChild(mealBtn)
            mealContain.removeChild(mealLabel)
            mealContain.removeChild(reset)
            finCalContain.removeChild(finLabel)
            finalCals = 0
            mealTotal = 0
            })

            
        });

            
            mealContain.appendChild(mealLabel);
            

})


