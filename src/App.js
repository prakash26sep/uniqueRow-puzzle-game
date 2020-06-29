import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles, createStyles } from '@material-ui/core';

const style = makeStyles(theme => createStyles({
  '@global': {
    li: {
      padding: '0px',
      listStyleType: 'none',
      margin: '0',
      border: '1px solid black',
      display: 'flex',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'yellow',
      }
    },
    body: {
      textAlign: 'center'
    },
    ul: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0'
    },
    span: {
      fontSize: '30px',
      padding: '10px 30px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        padding: '5px 10px'
      }
    }
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '15px 10px brown',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  main: {
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reset: {
    padding: '15px 25px',
    margin: '15px 0',
    fontSize: '24px',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer'
    }
  },
  win: {
    color: 'green'
  },


})
);



function App() {

  const classes = style();

  const [win, setWin] = useState('');

  function reset() {
    window.location.reload();
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
  }

  function drop(ev) {

    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("src"));

    //Swapping Values
    try {
      let temp;
      temp = ev.target.innerHTML;
      ev.target.innerHTML = src.innerHTML;
      src.innerHTML = temp;
    }
    catch (c) {
      console.log(c + " " + "Not swapped");
    }


    let checkingCount = 0;

    for (let i = 0; i < 10; i++) {

      let arr = [];
      let val = document.getElementById(`drag${i}`).innerHTML;
      arr.push(val);

      for (let j = 1; j < 10; j++) {
        let val = document.getElementById(`drag${j}${i}`).innerHTML;
        arr.push(val);
      }

      // arr.push(document.getElementById(`drag${i}`).innerHTML);

      console.log(arr + " " + arr.length)
      console.log("set " + new Set(arr).size)

      if (arr.length === new Set(arr).size) {
        checkingCount++;


        document.getElementById(`drag${i}`).style.backgroundColor = 'grey';
        for (let j = 1; j < 10; j++) {
          document.getElementById(`drag${j}${i}`).style.backgroundColor = 'grey';
        }

        console.log('Line Distinct succeed');

      } else {
        console.log('Line not Distinct');
        document.getElementById(`drag${i}`).style.backgroundColor = 'white';
        for (let j = 1; j < 10; j++) {
          document.getElementById(`drag${j}${i}`).style.backgroundColor = 'white';
        }
      }

    }


    if (checkingCount === 10) {
      setWin('YOU WIN!!!');
    }


  }

  var arr1 = [];
  while (arr1.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr1.indexOf(r) === -1) arr1.push(r);
  }

  var arr2 = [];
  while (arr2.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr2.indexOf(r) === -1) arr2.push(r);
  }

  var arr3 = [];
  while (arr3.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr3.indexOf(r) === -1) arr3.push(r);
  }

  var arr4 = [];
  while (arr4.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr4.indexOf(r) === -1) arr4.push(r);
  }

  var arr5 = [];
  while (arr5.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr5.indexOf(r) === -1) arr5.push(r);
  }

  var arr6 = [];
  while (arr6.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr6.indexOf(r) === -1) arr6.push(r);
  }

  var arr7 = [];
  while (arr7.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr7.indexOf(r) === -1) arr7.push(r);
  }

  var arr8 = [];
  while (arr8.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr8.indexOf(r) === -1) arr8.push(r);
  }

  var arr9 = [];
  while (arr9.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr9.indexOf(r) === -1) arr9.push(r);
  }

  var arr10 = [];
  while (arr10.length < 10) {
    let r = Math.floor(Math.random() * 10);
    if (arr10.indexOf(r) === -1) arr10.push(r);
  }

  let count = -1;



  return (
    <div className={classes.main}>

      <h2>ReactJS DND Game</h2>
      <h3 className={classes.win}>{win}</h3>


      <div className={classes.box}>
        <ul>
          {arr1.map((val) => {

            count++;
            console.log(count);
            return (<li className={classes.li} key={count} id={`div${count}`} onDrop={drop} onDragOver={allowDrop} ><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })
          }
        </ul>
        <ul>
          {arr2.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr3.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr4.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr5.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr6.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr7.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr8.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr9.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
        <ul>
          {arr10.map(val => {

            count++;
            console.log(count);
            return (<li className={classes.li} id={`div${count}`} onDrop={drop} onDragOver={allowDrop}><span id={`drag${count}`} onDragStart={drag} draggable="true">{val}</span></li>)

          })}
        </ul>
      </div>


      <div className={classes.reset} onClick={reset}>Reset</div>
      <div><h4>Instructions</h4></div>
      <div>Drag and drop any number from any place to other.
        <br /> Goal is to sort the grid as each row contain 1 number exactly 1 time.
        <br />
        <br /> Once a row is sorted its color is changed.
        <br /> Sort All the rows to win the Game</div>


    </div>
  );
}

export default App;
