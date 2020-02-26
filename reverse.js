let array = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = array.length - 1;
let aux; //Bien phu, ho tro doi cho
while (first < last) {
    aux = array[first];
    array[first] = array[last];
    array[last] = aux;
    first++;
    last--;
}
document.write(array);
