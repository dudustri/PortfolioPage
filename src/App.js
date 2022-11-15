import './App.css';

const anime = require('animejs');

const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0;


const colors = [

    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(244, 81, 30)",
    "rgb(76, 175, 80)",
    "rgb(33, 150, 243)",
    "rgb(156, 39, 243)",
    "rgb(22, 37, 86)"
]


let count = -1;


function App() {
  return(
    <div className="App">
      <header className="App-header">
          Eduardo Sfreddo Trindade
      </header>
      <div id="tiles"></div>
    </div>

  )
}

// Function to create the tiles inside the div in html
const createTile = index => {

  const tile = document.createElement("div");

  tile.classList.add("tile");

  tile.onclick = e => handleOnClick(index);

  return tile;

}
// functions to create the number of tiles and append it to the wrapper
const createTiles = quantity => {

  Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
      return true;
    })
  
}


//This method calculates de size of the tiles based on the screen size and calls the createTiles
const createGrid = () => {

  wrapper.innerHTML = "";

  const size = document.body.clientWidth > 800 ? 100 : 80;

  columns = Math.floor(document.body.clientWidth / size*4 ); //size - (20*(size/50)))
  rows = Math.floor(document.body.clientHeight / size*4);


  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);

}

//this method 
const handleOnClick = index => {

  count = count +1;

  anime({
      targets: ".tile",
      backgroudColor: colors[count % (colors.length - 1)],
      delay: anime.stagger(50, {
          grid: [columns,rows],
          from: index
      })
  })

}

createGrid();
window.onresize = () => createGrid();

export default App;
