import React from 'react'
import ReactDom from 'react-dom'

function gow(name='gowthaman'){
	return <div><h1>hello{name}</h1></div>
}


ReactDom.render(
	gow(),


	document.getElementById('root')
	);