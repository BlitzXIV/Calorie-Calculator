function html(strings, ...values) {
    const parsedArgs = strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
    const parser = new DOMParser();
    const doc = parser.parseFromString(parsedArgs, 'text/html');

    const newElement = doc.body.firstChild;
    return newElement;
}

let finalCals = 0
let mealTotal = 0
foodData = {}

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

function saveFood(event){
    event.preventDefault()

    const foodNameEle = document.getElementById('foodName')
    const windowCalPerServ = document.getElementById('window-calPerServ')
    const windowServAmt = document.getElementById('window-servAmt')
    const list = document.getElementById('food-list')
    
    

    const ele = html`<button onclick='getFood(event)'>${foodName}</button>`
    
    foodName = foodNameEle.value
    foodData[foodName] = [ele, windowCalPerServ.value, windowServAmt.value]
    localStorage.setItem('foodData', JSON.stringify(foodData));

    list.appendChild(ele)
}

function getFood(event){
    event.preventDefault()

    const getData = localStorage.getItem('foodData')
    const parsedData = JSON.parse(getData)

    let cals = parseFloat(document.getElementById('calPerServ').value);
    let serv = parseFloat(document.getElementById('servAmt').value);

    closeCustomFood()

    cals = parsedData.windowCalPerServ
    serv = parsedData.windowServAmt


}

