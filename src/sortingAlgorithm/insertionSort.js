export function getInsertionSort(array){
    const animation=[];
    let temp;
    for(let i=0 ; i<array.length; i++){
        let j=i;
        while(j>0 && array[j]<array[j-1]){
            animation.push([j,j-1]);
            animation.push([j,array[j-1],j-1,array[j]]);
            animation.push([j,j-1]);
            temp = array[j];
            array[j]=array[j-1];
            array[j-1]=temp;
            j--;
        }
    }
    return animation;
}