// Crie dois arrays, um com mais de 5 elementos e outro com menos
// Faça uma função que verifica o número de elementos
// Se possuir menos que 5, imprima "Poucos elementos" no console, se tiver mais imprima "Muitos elementos"

arr1 = [1,2,3,4,5,6]
arr2 = [1,2,3]


const tamanhoArray = (arr) => {
    tamanho = arr.length
    if(tamanho > 5){
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos")
    }
}

tamanhoArray(arr1) 
tamanhoArray(arr2)
