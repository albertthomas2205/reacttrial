import React, { useState } from 'react'
import headerCss from './Header.module.css'
import {Button} from 'react-bootstrap';

const Header = () => {
    const [colour,setcolor] = useState ("black");
    const changecolor = () => {
        setcolor('blue');
    };
    const [count ,setcount] = useState(0);
    const increment = () => {
        setcount(count+1)
    }
    const decrement = () => {
        setcount(count-1)
    }

    const clickme = () => {
        console.log('you clicked me...');

    };
    const doubleclick = (name) => {
        alert('haii '+ name)
    };
    const onchange = () => {
        alert ('onchange keydown machaneeeee...')
    }; 
     const mouseover = () => {
        alert ('machaneeeee...')
    };



  return (
    <div>
        <h1 className={headerCss.header}> hellow world </h1>

        <br/>
        <br/>
        <h3> My fevorite color is {colour} </h3>
        <Button variant="warning" onClick={changecolor} >click me</Button>

        <br/>
        <br/>
        <h3> counter is {count} </h3>
        <Button className='m-5' variant="success" onClick={increment} >+</Button>
        <Button variant="danger" onClick={decrement} >-</Button>




        <Button variant="danger" onClick={clickme} >click me</Button>
        <h5  onDoubleClick= {() => doubleclick('Albert')}>dobble click</h5>
        <input type='text' onKeyDown={onchange} ></input>
        <h6 onKeyDown={mouseover}>mouse over</h6>




    </div>
  )
}

export default Header