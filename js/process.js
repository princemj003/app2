let process = {
	menu:function(){
		let content = 
		<ul>
		<center>
		<h1>
		<br/>
			<a href='#' onClick={process.Aatrox}>AD(ATTACK DAMAGE)</a><br/>
				<img src="img/TOP.png" height="50" width="400"></img><br/>
			<a href='#' onClick={process.Ashe}>ADC(ATTACK DAMAGE CARRY</a><br/>
				<img src="img/CARRY.jpg" height="50" width="400"></img><br/>
			<a href='#' onClick={process.Ahri}>AP(ABILITY POWER)</a><br/>
				<img src="img/mid.jpg" height="50" width="400"></img><br/>
			<a href='#' onClick={process.Janna}>SUPPORT</a><br/>
				<img src="img/sup.jpg" height="50" width="400"></img><br/>
			<a href='#' onClick={process.Amumu}>TANK</a><br/>
				<img src="img/t.jpg" height="50" width="400"></img><br/>
		</h1>
		</center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	Aatrox:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/Aatrox.jpg" height="300" width="300"></img><br/>
				<h1>Aatrox</h1> <br/>
				
				<a href='#' onClick={process.Darius}>Darius</a>

		</center>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Darius:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/Darius_0.jpg" height="300" width="300"></img><br/>
				<h1>Darius</h1><br/>
				<a href='#' onClick={process.Aatrox}>Aatrox</a><br/>
				<a href='#' onClick={process.Garen}>Garen</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Garen:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/garen.jpg" height="300" width="300"></img><br/>
				<h1>Darius</h1><br/>
				<a href='#' onClick={process.Darius}>Darius</a><br/>
				<a href='#' onClick={process.Kayn}>Kayn</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Kayn:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/kayn.jpg" height="300" width="300"></img><br/>
				<h1>Kayn</h1><br/>
				<a href='#' onClick={process.Garen}>Garen</a><br/>
				<a href='#' onClick={process.Zed}>Zed</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Zed:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/zed.jpg" height="300" width="300"></img><br/>
				<h1>Zed</h1><br/>
				<a href='#' onClick={process.Kayn}>Kayn</a><br/>
				<a href='#' onClick={process.Yasuo}>Yasuo</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Yasuo:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE</h1></font><br/> <img src="img/AD/yasuo.jpg" height="300" width="300"></img><br/>
				<h1>Yasuo</h1><br/>
				<a href='#' onClick={process.Zed}>Zed</a><br/>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


Ashe:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE CARRY</h1></font><br/> <img src="img/ADC/ashe.jpg" height="300" width="300"></img><br/>
				<h1>Ashe</h1> <br/>
				
				<a href='#' onClick={process.Jinx}>Jinx</a>

		</center>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Jinx:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE CARRY</h1></font><br/> <img src="img/ADC/jinx.jpg" height="300" width="300"></img><br/>
				<h1>Jinx</h1><br/>
				<a href='#' onClick={process.Ashe}>Ashe</a><br/>
				<a href='#' onClick={process.Mf}>Miss Fortune</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Mf:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE CARRY</h1></font><br/> <img src="img/ADC/mf.jpg" height="300" width="300"></img><br/>
				<h1>Miss Fortune</h1><br/>
				<a href='#' onClick={process.Jinx}>Jinx</a><br/>
				<a href='#' onClick={process.Vayne}>Vayne</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Vayne:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ATTACK DAMAGE CARRY</h1></font><br/> <img src="img/ADC/vayne.jpg" height="300" width="300"></img><br/>
				<h1>Vayne</h1><br/>
				<a href='#' onClick={process.Mf}>Miss Fortune</a><br/>
				
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Ahri:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ABILITY POWER</h1></font><br/> <img src="img/AP/ahri.jpg" height="300" width="300"></img><br/>
				<h1>Ahri</h1> <br/>
				
				<a href='#' onClick={process.Akali}>Akali</a>

		</center>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Akali:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ABILITY POWER</h1></font><br/> <img src="img/AP/akali.jpg" height="300" width="300"></img><br/>
				<h1>Akali</h1><br/>
				<a href='#' onClick={process.Ahri}>Ahri</a><br/>
				<a href='#' onClick={process.Annie}>Annie</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Annie:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ABILITY POWER</h1></font><br/> <img src="img/AP/annie.jpg" height="300" width="300"></img><br/>
				<h1>Annie</h1><br/>
				<a href='#' onClick={process.Akali}>Akali</a><br/>
				<a href='#' onClick={process.Lux}>Lux</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Lux:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ABILITY POWER</h1></font><br/> <img src="img/AP/lux.jpg" height="300" width="300"></img><br/>
				<h1>Lux</h1><br/>
				<a href='#' onClick={process.Annie}>Annie</a><br/>
				<a href='#' onClick={process.Viegar}>Viegar</a><br/>

			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Viegar:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>ABILITY POWER</h1></font><br/> <img src="img/AP/viegar.jpg" height="300" width="300"></img><br/>
				<h1>Viegar</h1><br/>
				<a href='#' onClick={process.Lux}>Lux</a><br/>
				
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
		Janna:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>SUPPORT</h1></font><br/> <img src="img/SUPPORT/janna.jpg" height="300" width="300"></img><br/>
				<h1>Janna</h1><br/>
				<a href='#' onClick={process.Leona}>Leona</a><br/>
				
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Leona:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>SUPPORT</h1></font><br/> <img src="img/SUPPORT/leona.jpg" height="300" width="300"></img><br/>
				<h1>Leona</h1><br/>
				<a href='#' onClick={process.Janna}>Janna</a><br/>
				<a href='#' onClick={process.Nami}>Nami</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Nami:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>SUPPORT</h1></font><br/> <img src="img/SUPPORT/nami.jpg" height="300" width="300"></img><br/>
				<h1>Nami</h1><br/>
				<a href='#' onClick={process.Leona}>Leona</a><br/>
				<a href='#' onClick={process.Sona}>Sona</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Sona:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>SUPPORT</h1></font><br/> <img src="img/SUPPORT/sona.jpg" height="300" width="300"></img><br/>
				<h1>Sona</h1><br/>
				<a href='#' onClick={process.Nami}>Nami</a><br/>
				<a href='#' onClick={process.Soraka}>Soraka</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Soraka:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>SUPPORT</h1></font><br/> <img src="img/SUPPORT/soraka.jpg" height="300" width="300"></img><br/>
				<h1>Soraka</h1><br/>
				<a href='#' onClick={process.Sona}>Sona</a><br/>
				
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Amumu:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>TANK</h1></font><br/> <img src="img/TANK/amumu.jpg" height="300" width="300"></img><br/>
				<h1>Amumu</h1><br/>
				<a href='#' onClick={process.Dr}>Dr.Mundo</a><br/>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
		Dr:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>TANK</h1></font><br/> <img src="img/TANK/dr.jpg" height="300" width="300"></img><br/>
				<h1>Dr.Mundo</h1><br/>
				<a href='#' onClick={process.Amumu}>Amumu</a><br/>
				<a href='#' onClick={process.Malp}>Malpite</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	Malp:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>TANK</h1></font><br/> <img src="img/TANK/malp.jpg" height="300" width="300"></img><br/>
				<h1>Malpite</h1><br/>
				<a href='#' onClick={process.dr}>Dr.Mundo</a><br/>
				<a href='#' onClick={process.Rammus}>Rammus</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	Rammus:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>TANK</h1></font><br/> <img src="img/TANK/rammus.jpg" height="300" width="300"></img><br/>
				<h1>Rammus</h1><br/>
				<a href='#' onClick={process.malp}>Malpite</a><br/>
				<a href='#' onClick={process.Thresh}>Thresh</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	Thresh:function(){
		let content = 
		<div>
		<center>
				<a href='#' onClick={process.menu}>Back</a><font color="blue"><h1>TANK</h1></font><br/> <img src="img/TANK/thresh.jpg" height="300" width="300"></img><br/>
				<h1>Thresh</h1><br/>
				<a href='#' onClick={process.Rammus}>Rammus</a><br/>
				
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div><h1>
				<center>
				<br/>
				<font color="red"><h2>League Of Legends <br/>
				<img src="img/FRONT.jpg" height="200" width="400"></img>
				<h1>Champion</h1></h2></font><br/> 
				</center></h1></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);