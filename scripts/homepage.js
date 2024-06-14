document.getElementById('homepageButtonTop').addEventListener('click', () => {
    document.querySelector('.active-sheet').classList.add('sheet-out-of-view-right');
    document.querySelector('#photo-sheet').classList.remove('sheet-out-of-view-right');
    document.querySelector('#photo-sheet').classList.add('active-sheet');
}); 

const searchTerms = [
    "sunrise", "sunset", "ocean", "forest", "mountain", "desert", "city", "village", "river", "beach",
    "clouds", "nature", "animal", "bird", "flower", "garden", "tree", "plant", "water", "lake",
    "night", "sky", "stars", "moon", "sun", "snow", "rain", "storm", "fog", "mist",
    "park", "road", "trail", "path", "bridge", "tower", "castle", "house", "cabin", "tent",
    "car", "bike", "boat", "train", "plane", "ship", "island", "cliff", "cave", "canyon",
    "field", "valley", "hill", "peak", "rock", "lava", "reef", "coral", "waves", "sand",
    "dunes", "forest", "glade", "grove", "woods", "meadow", "plains", "swamp", "marsh", "fen", "bay"
  ];
  
  function getRandomSearchTerm() {
    return searchTerms[Math.floor(Math.random() * searchTerms.length)];
  }
  
  document.getElementById('homeRandomSearch1').innerHTML = getRandomSearchTerm();
  document.getElementById('homeRandomSearch2').innerHTML = getRandomSearchTerm();
  document.getElementById('homeRandomSearch3').innerHTML = getRandomSearchTerm();
  
  document.querySelectorAll('.home-pop-search-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById('photoSearchInp').value=btn.querySelector('.mdc-button__label').innerHTML;
        document.getElementById('placeholder-id').innerHTML = '';
        document.querySelector('.active-sheet').classList.add('sheet-out-of-view-right');
        document.querySelector('#search-sheet').classList.remove('sheet-out-of-view-right');
        document.querySelector('#search-sheet').classList.add('active-sheet');
    })
  });


  function getRandomImage(){
    const imgHolder = document.querySelector('.home-beautiful');
    let randomInt = getRandomSaved();
    let newImg = localStorage.getItem(randomInt);
    try{
      console.log(JSON.parse(newImg).url);

      imgHolder.style.backgroundImage = `url(${JSON.parse(newImg).url})`;
    } catch (e){

    }
  }


  const dialog = new MDCDialog(document.querySelector("#remove-all-dialog"));
    
    
  document.getElementById("delete-data").addEventListener('click', () => {
      dialog.open();
  });
  document.getElementById('delete-convermation').addEventListener('click', () => {
    unsaveAll();
    loadSaved();
  });