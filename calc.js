
let finalCals = 0
let mealTotal = 0

function calcCalories(event){
    event.preventDefault()

    const finCalContain = document.getElementById('finCalContain')
    
    let cals = parseFloat(document.getElementById('calPerServ').value);
    let serv = parseFloat(document.getElementById('servAmt').value);
    let measure = parseFloat(document.getElementById('cstmServ').value);

    let calsPerGram = cals / serv;
    finalCals = calsPerGram * measure;
    finalCals = parseFloat(finalCals.toFixed(1));

    finCalContain.innerText = finalCals;
}

function mealAdd(event){
    
    const mealContain = document.getElementById('mealContain')
    mealTotal += finalCals
    mealContain.innerText = mealTotal; 
    

}

function resetBtn(event){
    const mealContain = document.getElementById('mealContain');
    const finCalContain = document.getElementById('finCalContain')
    finalCals = 0
    mealTotal = 0
    mealContain.innerText = ''
    finCalContain.innerText = ''
}

function openCustomFood(event){
    const customFoodEle = document.getElementById('add-custom-food')
    customFoodWindow.style.display = 'block'
}
function closeCustomFood(event){
    const customFoodEle = document.getElementById('add-custom-food')
    customFoodWindow.style.display = 'none' 
}