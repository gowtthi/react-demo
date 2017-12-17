import React from 'react'
import ReactDom from 'react-dom'


let name='gowtham'
let gow={
	fname:'gowthaman',
	lname:'jayabalakrishnan'
}
const element=<h1>hey hi!!!</h1>:

ReactDom.render(
	<div><h1>Welcome {name}{element}{gow.fname}{gow.lname} 
	{element}</h1></div>,
	
	document.getElementById('root')
	);