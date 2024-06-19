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
localStorage.setItem('foodData', JSON.stringify(foodData));
const getData = localStorage.getItem('foodData')
const parsedData = JSON.parse(getData)

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
    customFoodWindow.style.display = 'block'
}
function closeCustomFood(event){
    customFoodWindow.style.display = 'none' 
}

function saveFood(event){
    event.preventDefault()

    
    const windowCalPerServ = document.getElementById('window-calPerServ')
    const windowServAmt = document.getElementById('window-servAmt')
    const list = document.getElementById('food-list')
    
    const foodNameEle = document.getElementById('foodName')
    let foodName = foodNameEle.value

    const ele = html`<button onclick='getFood(event)'>${foodName}</button>`
    
   
    foodData[foodName] = [ele, windowCalPerServ.value, windowServAmt.value]
    

    list.appendChild(ele)
}

function getFood(event){
    event.preventDefault()

    const foodName = event.target.textContent;
   

    const [ele, calPerServ, servAmt] = parsedData[foodName]

    document.getElementById('calPerServ').value = calPerServ;
    document.getElementById('servAmt').value = servAmt;

    
    closeCustomFood()



}

