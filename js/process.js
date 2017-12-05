let process = {
	menu:function(){
		let content = <ul>
		<center><h1><a href='#' onClick={process.MINOR1}>MINOR CHORDS</a></h1></center>
			<center><h1><a href='#' onClick={process.page1}>MAJOR CHORDS</a></h1><img src="img/m.jpg" height="400" width="300"></img></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR1:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Aminor.jpg" height="400" width="300"></img><br/>
				A MINOR <br/>
				<a href='#' onClick={process.MINOR7}>prev</a><br/>
				<a href='#' onClick={process.MINOR2}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR2:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Bminor.jpg" height="400" width="300"></img><br/>
				B MINOR <br/>
				<a href='#' onClick={process.MINOR1}>prev</a><br/>
				<a href='#' onClick={process.MINOR3}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR3:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Cminor.jpg" height="400" width="300"></img><br/>
				C MINOR <br/>
				<a href='#' onClick={process.MINOR2}>prev</a><br/>
				<a href='#' onClick={process.MINOR4}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR4:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Dminor.jpg" height="400" width="300"></img><br/>
				D MINOR <br/>
				<a href='#' onClick={process.MINOR3}>prev</a><br/>
				<a href='#' onClick={process.MINOR5}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR5:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Eminor.jpeg" height="400" width="300"></img><br/>
				E MINOR <br/>
				<a href='#' onClick={process.MINOR4}>prev</a><br/>
				<a href='#' onClick={process.MINOR6}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR6:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Fminor.jpg" height="400" width="300"></img><br/>
				F MINOR <br/>
				<a href='#' onClick={process.MINOR5}>prev</a><br/>
				<a href='#' onClick={process.MINOR7}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	MINOR7:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MINOR CHORDS</h1></font><br/> <img src="img/Gminor.jpg" height="400" width="300"></img><br/>
				G MINOR <br/>
				<a href='#' onClick={process.page6}>prev</a><br/>
				<a href='#' onClick={process.page1}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/A.jpg" height="400" width="300"></img><br/>
				A MAJOR <br/>
				<a href='#' onClick={process.page7}>prev</a><br/>
				<a href='#' onClick={process.page2}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/B.jpg" height="400" width="300"></img><br/>
				B MAJOR <br/>
				<a href='#' onClick={process.page1}>prev</a><br/>
				<a href='#' onClick={process.page3}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/C.jpeg" height="400" width="300"></img><br/>
				C MAJOR <br/>
				<a href='#' onClick={process.page2}>prev</a><br/>
				<a href='#' onClick={process.page4}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/D.jpg" height="400" width="300"></img><br/>
				D MAJOR <br/>
				<a href='#' onClick={process.page3}>prev</a><br/>
				<a href='#' onClick={process.page5}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/E.jpeg" height="400" width="300"></img><br/>
				E MAJOR <br/>
				<a href='#' onClick={process.page4}>prev</a><br/>
				<a href='#' onClick={process.page6}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/F.jpeg" height="400" width="300"></img><br/>
				F MAJOR <br/>
				<a href='#' onClick={process.page5}>prev</a><br/>
				<a href='#' onClick={process.page7}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
		let content = <div><center>
				<a href='#' onClick={process.menu}>Back</a><font color="black"><h1>MAJOR CHORDS</h1></font><br/> <img src="img/G.jpg" height="400" width="300"></img><br/>
				G MAJOR <br/>
				<a href='#' onClick={process.page6}>prev</a><br/>
				<a href='#' onClick={process.page1}>next</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><h1>
				<center><font color="black"><h1>PRINCE <br/> GUITAR <br/> CHORDIFY</h1></font><br/> <img src="img/PGC.jpg" height="400" width="300"></img><br/>
				</center></h1></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);