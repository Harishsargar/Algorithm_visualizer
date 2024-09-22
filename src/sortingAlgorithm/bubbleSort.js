export function getBubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;

    for (let i = array.length; i >= 0; i--) {
        let didSwap = false;
        for (let j = 0; j < i - 1; j++) {
            // Add color change to indicate comparison.
            animations.push([j, j + 1]);
            animations.push([j, j + 1]); // Revert color after comparison.

            if (array[j] > array[j + 1]) {
                // Add animation for swapping the heights.
                animations.push([j, array[j + 1], j + 1, array[j]]);
                // Perform the swap in the array.
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                didSwap = true;
            }
        }
        if (!didSwap) break;  // Exit if no swaps occurred during the pass.
    }

    return animations;
}
