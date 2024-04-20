import './App.css';
// import 'powers'
function App() {
  return (
    <div>
      <div id="navbar">
	<div id="navlogo"></div>
	<div className="navbtn comBtn" onClick={reld}>HOME</div>
	<div className="navbtn comBtn" onClick={redtoPD}>POKEDEX</div>
	<div className="navbtn comBtn" onClick={redtoWS}>ABOUT</div>
	<div id="search">
		<input type="" name="" placeholder="search"></input>
		<button>Go</button>
	</div>
</div>
<div id="mainquery">
	<div id="test12"><input type="" name="" placeholder="search for a pokemon" id="searchbox"></input>
	<button id="gobtn" className="comBtn" onClick={create}>Search</button></div>
	<div id="pokedex">
		<div id="sqimg"><img src="3.png" alt="" id="imagelabel"></img></div>
		<div id="spinfo">
      <div id="lab"></div>
			<span id="namelabel">POKEMON NAME</span>
			<p id="datalabel">Pokemon Data</p>
		</div>
	</div></div>
<div id="poke" onClick={showSrch}></div>
<div id="cardgrid">
	<div id="cards" onClick={atoc}>
		<div id="pimg" className="card1"></div>
		<span id="pname">Pikachu</span>
		<div id="desc"><span>Hgt: 2.3mts</span><div id="type" className="type1" title="electric"></div></div>
	</div>
	<div id="cards" onClick={atoc}>
		<div id="pimg"  className="card2"></div>
		<span id="pname">Arcanine</span>
		<div id="desc"><span>Hgt: 2.3mts</span><div id="type" className="type2" title="fire"></div></div>
	</div>
	<div id="cards" onClick={atoc}>
		<div id="pimg"  className="card3"></div>
		<span id="pname">MewTwo</span>
		<div id="desc"><span>Hgt: 2.3mts</span><div id="type" className="type3" title="psycic"></div></div>
	</div>
	<div id="cards" onClick={atoc}>
		<div id="pimg"  className="card4"></div>
		<span id="pname">Tyranitar</span>
		<div id="desc"><span>Hgt: 2.3mts</span><div id="type" className="type4" title="ground"></div></div>
	</div>
</div>
<div id="slider">
	<div id="conlogo" onClick={redtoreddit} className="soc1"></div>
	<div id="conlogo" onClick={redtodis} className="soc2"></div>
	<div id="conlogo" onClick={redtoinsta} className="soc3"></div>
	<div id="conlogo" onClick={redtoSteam} className="soc4"></div>
</div>
<div id="mycart">
    <div id="cartholder">
    </div>
    <div id="checkout" className="comBtn" onClick={doneBC}>Checkout</div>
</div>
<div id="cartBtn" onClick={carts}>C</div>
    </div>
  );
}
var shf=0
export default App;
const showSrch = ()=>{
  shf=!shf
  // alert(shf)
  if(shf)
  document.querySelector("#mainquery").style.display="flex"
  else document.querySelector("#mainquery").style.display="none"
  
}

class pokemon{
  constructor(name,type,imglink){
    this.name=name
    this.type=type
    this.data2="Pikachu (Japanese: ピカチュウ Pikachu) \nis an Electric-type Pokémon introduced in Generation I"
    this.img=imglink
  }
}
var idmap={}
const create = ()=>{
  document.querySelector("#sqimg").style.backgroundColor="#fff"
//  var p1 = new pokemon("Arceus","god","test");
 const pokelist = [new pokemon("Arceus","god","arceus.jpg"),new pokemon("Raichu","electric","raichu.jpg"),new pokemon("Bulbasaur","grass","bulba.jpg")
,new pokemon("Jigglypuff","fairy","jigly.jpg"),new pokemon("Infernape","fire","infer.jpg"),new pokemon("Beedril","fire","bee.jpg"),
new pokemon("Charizard","fire","char.png"),new pokemon("Mimikyu","fairy","mimmi.jpg"),new pokemon("Rattata","normal","ratta.jpg")
]
  var temp= document.querySelector("#searchbox").value.toLowerCase()
  var id2={}
var pnamelist=["arceus","raichu","bulbasaur","jiglypuff","infernape","beedril","charizard","mimikyu","rattata"]

for(var i=0;i<pnamelist.length;i++){
  id2[pnamelist[i]]=pokelist[i]
}
  try {
    console.log(idmap[temp])
    document.querySelector("#namelabel").innerHTML=id2[temp].name
  document.querySelector("#datalabel").innerHTML=id2[temp].type+" TYPE"
  document.querySelector("#imagelabel").src="pokeimgs/"+id2[temp].img

  } catch (error) {
    alert("Sorry , a pokemon named "+temp+" isn't present in the database")
  }

}

const redtoWS =()=>{
  window.location.replace("https://github.com/techshetty/")
}

const reld =()=>{
  window.location.reload()
}
const redtoSteam =()=>{
  window.location.replace("https://steamcommunity.com/id/techshetty/")
}
const redtoPD =()=>{
  window.location.replace("https://www.pokemon.com/us/pokedex/")
}
const redtoreddit =()=>{
  window.location.replace("https://github.com/techshetty/")
}
const redtoinsta =()=>{
  window.location.replace("https://instagram.com/tech_shetty/")
}
const redtodis =()=>{
  window.location.replace("https://discord.com/invite/UxsBDzeBVG")
}

const atoc= ()=>{
  document.querySelector("#cartholder").innerHTML+='<div id="cartitem"><div id="cimg"></div><span>Pokemin Infix 2.0</span><select><option>Select Quantity</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div>'
}
var cf=0
const carts = ()=>{
  cf=!cf
  if(cf)
  document.querySelector("#mycart").style.display="block"
  else document.querySelector("#mycart").style.display="none"
  
}

const doneBC = ()=>{
  if(document.querySelector("#cartholder").innerHTML==='')
  alert("Cart is empty")
  else {
    document.querySelector("#cartholder").innerHTML=''
    alert("Purchase Successfull. Thank you")
  }
  
}