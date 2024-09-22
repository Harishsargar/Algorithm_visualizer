export function getSelectionSort(array){
    const animation=[];
    let temp;
    for(let i=0 ; i< array.length ; i++){
        let didswap = false;
        for(let y=i ; y< array.length ; y++){
            animation.push([i,y]);
            if(array[i]>array[y]){
                animation.push([i,y]);
                animation.push([i,array[y],y,array[i]]);
                temp = array[i];
                array[i]=array[y];
                array[y]=temp;
                didswap=true;
            }else{
                animation.push([i,y]);
            }
        }
        if(!didswap){
            break;
        }
    }
    return animation;
}