// Pounds Conversion

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value
   document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
   document.getElementById('kgOutput').innerHTML = lbs/2.2046;
   document.getElementById('ozOutput').innerHTML = lbs*16;
   
});



// Grams Conversion

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('gramsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let grams = e.target.value
   document.getElementById('lbsOutput').innerHTML = grams*0.00220462;
   document.getElementById('kgOutput').innerHTML = grams/0.001;
   document.getElementById('ozOutput').innerHTML = grams*0.035274;
  
});

// // Kilograms Conversion 

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kgInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let kg = e.target.value
   document.getElementById('gramsOutput').innerHTML = kg*1000;
   document.getElementById('lbsOutput').innerHTML = kg*2.2046;
   document.getElementById('ozOutput').innerHTML = kg*35.274;

});

// // Ounces Conversion

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('ozInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let oz = e.target.value
   document.getElementById('gramsOutput').innerHTML = oz*28.3495;
   document.getElementById('kgOutput').innerHTML = oz*0.0283495;
   document.getElementById('lbsOutput').innerHTML = oz/16;
   
});

