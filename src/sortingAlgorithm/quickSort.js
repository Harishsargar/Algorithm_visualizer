export function getQuickSort(array){
    const animation =[];
    let low=0;
    let high = array.length -1;
    qs(array,low,high,animation);
    return animation;
}

function qs(arr,low,high,animation){
    if(low<high){
        let part_idx = partition(arr,low,high,animation);
        qs(arr,low,part_idx-1,animation);
        qs(arr,part_idx+1,high,animation);
    }
}

function partition(arr,low,high,animation){
    let pivot = arr[high];
    let j=low-1;
    for(let i=low;i<=high-1;i++){
        if(arr[i]<pivot){
            j++;
            swap(arr,j,i,animation);
        }
    }
    swap(arr,j+1,high,animation);
    return j+1;
}


function swap(arr,j,i,animation){
    animation.push([i,j]);
    animation.push([i,arr[j],j,arr[i]]);
    animation.push([i,j]);
    let temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
}