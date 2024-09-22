import React from "react";
import { Link } from 'react-router-dom';
import './sortingVisualizer.css'
import {getMergeSortAnimations} from '../sortingAlgorithm/mergeSort.js'
import { getSelectionSort } from "../sortingAlgorithm/selectionSort.js";
import { getBubbleSort } from "../sortingAlgorithm/bubbleSort.js";
import { getInsertionSort } from "../sortingAlgorithm/insertionSort.js";
import { getQuickSort } from "../sortingAlgorithm/quickSort.js";


const ANIMATION_SPEED_MS = 20 ;

const NUMBER_OF_ARRAY_BARS = 70;

const PRIMARY_COLOR = 'black';

const SECONDARY_COLOR = 'red';



export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state={   //whenever their is change in array component well be updated (not mounted) 
            array : [],
            animationSpeed: ANIMATION_SPEED_MS,  // it controlles the speed of animation
        }
    }
    
    componentDidMount(){   
        
        this.resetArray();
    }


    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 400));
        }
        this.setState({ array }, () => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = PRIMARY_COLOR;  // Reset color to primary
            }
        });
    }
    

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.animationSpeed);
            }
            
        }
    }

    selectionSort(){
        const animations = getSelectionSort(this.state.array);
        let flag=0;
        for(let i=0 ; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const size = animations[i].length;
            let color;
            if(size===2){  // color changne
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                if(flag===0){          
                    color = SECONDARY_COLOR;
                    flag=1;
                }else{
                    color = PRIMARY_COLOR;
                    flag=0;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationSpeed);
            }else{
                const [barOneIdx, oneHeight , barTwoIdx ,twoHeight ] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=>{
                    barOneStyle.height = `${oneHeight}px`;
                    barTwoStyle.height = `${twoHeight}px`;
                },i * this.state.animationSpeed);
                
            }
        }
    }
    
    bubbleSort(){
        const animations = getBubbleSort(this.state.array);
        let flag=0;
        for(let i=0 ; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const size = animations[i].length;
            let color;
            if(size===2){  // color changne
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                if(flag===0){          
                    color = SECONDARY_COLOR;
                    flag=1;
                }else{
                    color = PRIMARY_COLOR;
                    flag=0;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationSpeed);
            }else{
                const [barOneIdx, oneHeight , barTwoIdx ,twoHeight ] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=>{
                    barOneStyle.height = `${oneHeight}px`;
                    barTwoStyle.height = `${twoHeight}px`;
                },i * this.state.animationSpeed);
                
            }
        }
            
    }



        
    insertionSort(){
        const animations = getInsertionSort(this.state.array);
        let flag=0;
        for(let i=0 ; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const size = animations[i].length;
            let color;
            if(size===2){  // color changne
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                if(flag===0){          
                    color = SECONDARY_COLOR;
                    flag=1;
                }else{
                    color = PRIMARY_COLOR;
                    flag=0;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationSpeed);
            }else{
                const [barOneIdx, oneHeight , barTwoIdx ,twoHeight ] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=>{
                    barOneStyle.height = `${oneHeight}px`;
                    barTwoStyle.height = `${twoHeight}px`;
                },i * this.state.animationSpeed);
                
            }
          
        }
    }


    quickSort(){
        const animations = getQuickSort(this.state.array);
        let flag=0;
        for(let i=0 ; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const size = animations[i].length;
            let color;
            if(size===2){  // color changne
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                if(flag===0){          
                    color = SECONDARY_COLOR;
                    flag=1;
                }else{
                    color = PRIMARY_COLOR;
                    flag=0;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationSpeed);
            }else{
                const [barOneIdx, oneHeight , barTwoIdx ,twoHeight ] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=>{
                    barOneStyle.height = `${oneHeight}px`;
                    barTwoStyle.height = `${twoHeight}px`;
                },i * this.state.animationSpeed);
                
            }
        }

       
    
    }

    
    handleSpeedChange = (event) => {   //controlls the speed of animation
        this.setState({ animationSpeed: event.target.value });
    }


    render() {
        const { array , animationSpeed} = this.state;
        return (
            <div>
                <text>
                    <p>{`( Developed by ) => HARISH SARGAR`}</p>
                </text> 
                {/* Bars container */}
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                height: `${value}px`,
                                backgroundColor: PRIMARY_COLOR,
                            }}>
                        </div>
                    ))}
                </div>
    
                {/* Buttons container */}
                <div className="button-container">
                    <button className="button-17" onClick={() => this.resetArray()} >Generate new Array</button>
                    <button className="button-23" onClick={() => this.mergeSort()} >Merge Sort</button>
                    <button className="button-23" onClick={() => this.selectionSort()} >Selection Sort</button>
                    <button className="button-23" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="button-23" onClick={() => this.insertionSort()} >Insertion Sort</button>
                    <button className="button-23" onClick={() => this.quickSort()} >Quick Sort</button>
                    <div>
                    <label>Animation Speed (ms): </label>
                    <input
                        type="range"
                        min="0"
                        max="300"
                        value={animationSpeed}
                        onChange={this.handleSpeedChange}
                    />
                    <span>{animationSpeed} ms</span>
                </div>
                </div>

                <div className="button-container">
                <Link to="/" className="button-83">Back to Home</Link>  {/* Link to Home Page */}
            </div>
            
                
            </div>
        );
    }
    
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
