

const imgs = document.querySelectorAll('img');
console.log(imgs)

imgs.forEach(function(item, index, array){
   console.log(item, index);
});


const titulos = document.getElementsByClassName('titulo');
console.log(titulos);

const titulosArray = Array.from(titulos);

console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    console.log(item);
})



