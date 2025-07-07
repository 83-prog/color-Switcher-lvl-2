let random = document.querySelector('.randomBtn');
let apply = document.querySelector('.applyBtn');
let input = document.querySelector('#colorInput');
let colorVal = document.querySelector('.colorValue');
let container =document.querySelector('.container');


const colorArr = ["red","blue","pink","orange","gray","yellow"];
const bgArr = ["pink", "blue", "deeppink", "red", "skyblue", "black"]


const bgColor =()=>{
    const bgRandom = Math.floor(Math.random()*bgArr.length);
    // console.log(bgRandom)
    return bgArr[bgRandom];
}
// yai hamara left side wala value hai
// let lastbg = bgColor();
// console.log(lastbg)



const gColor =()=>{
 const randomColor = Math.floor(Math.random()*colorArr.length) 
 // Math.random se koyi bhi wo value Assin krega or
//  point mai usko intiger mai change krne ke liye ham math.random use krege  
// console.log(colorArr.length)
 return colorArr[randomColor];
}

// yai value dekhne ke liye kiya tha //




const changeColor = (color)=>{
    container.style.backgroundColor = color;
    colorVal.innerHTML = color;
}
// changeColor("black");
// console.log(random, apply, input, colorVal);

const handleRandom =()=>{ 
//    console.log("random pr click huwa hai");
// container.style.backgroundColor = gColor(colorArr); 
let color = gColor();
changeColor(color);
// console.log(str)
// console.log(str);
// container.style.backgroundColor= str;

// let lastbg = bgColor();
// console.log(lastbg)
// container.style.backgroundImage = URL(lastbg);

}




// Apply color 
const handleApply =()=>{
   let inputVal = input.value; 
     changeColor(inputVal);
}


// colorVal //




random.addEventListener('click', handleRandom)
apply.addEventListener('click', handleApply)