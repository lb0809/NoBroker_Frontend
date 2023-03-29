import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 0
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
        margin:0,
		textAlign: 'right',
        padding:0
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progress_bar;
