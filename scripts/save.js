
async function toDataURL(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      var dataURL = canvas.toDataURL();
      resolve(dataURL);
    };
    img.onerror = function () {
      reject(new Error('Failed to load image'));
    };
    img.src = url;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = url;
    }
  });
}

// https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript




function saveToLocal(saveArray) {
  // HAALT ALLES UIT DE LOCAL STORAGE OP EN VERGELIJKT DE BASE64 URL MET ALLES OM TE KIJKEN OF T MOET OPGESLAGEN WORDEN OF DELETED WORDEN. 
  let base64 = saveArray.img;
  for (let index = 0; index < getSavedInt(); index++) {
    const item = JSON.parse(localStorage.getItem(index));
    // AANGEZIEN ITEMS LEEG KAN WORD DAT EERST GECHECKT. zie docs.md -> opslaan -> 1
    if (item) {
      // CHECKT OF SAVED IMG AL BESTAAT OP BASE VAN EERSTE 1000 CHARS 
      if (item.img.substring(0, 999) === base64.substring(0, 999)) {
        decreaseSavedInt()
        localStorage.removeItem(index);
        return;
      }
    }
  }
  if(localStorage.getItem(getSavedInt()) === null){
    localStorage.setItem(getSavedInt(), JSON.stringify(saveArray));
    } else {
      let empty = getEmpty();
      console.log(empty);
      localStorage.setItem(empty, JSON.stringify(saveArray));
  }

  incementSavedInt();
    
}

function saveImage(url, query, orientation, color) {
  // Haal de base64 van de im age op via de functie toDataUrl()
  toDataURL(url).then(dataUrl => {
    // Sla het op (of verwijder dat )
    saveArray = { "url": url, "img": dataUrl, "query": query, "orientation": orientation, "color": color};
    saveToLocal(saveArray);
    
    // Loadsaved() word na het opslaan aangeroepen om de saved image tab te refreshen
    loadSaved();
    openSnackbar("Saved successfully");
    })
    .catch(error => {
      openSnackbar("failed to save");
      console.error('ERROR:', error);
    });
}

// Krijgt een id en verwijdert deze. 
function unsave(id) {
  openSnackbar("Removed succesfully");
  localStorage.removeItem(id);
  decreaseSavedInt();
}

// Haalt het aantal opgeslagen foto's op en verwijdert ze via een for loop en unsave()
function unsaveAll(){
  let a = parseInt(getSavedInt())
  for (let index = 0; index < a; index++) {
    unsave(index);
  }
}