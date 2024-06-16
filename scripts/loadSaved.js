
function loadSaved() {
    
    // CLEART DE SAVED IMAGE HOLDER
    if(!document.querySelector('#bookmark-holder').innerHTML == ''){
        document.querySelector('#bookmark-holder').innerHTML = ''
    } 

    // HAALT VIA getSavedInt AANtAL OPGESLAGEN ITEMS OP EN VIA FOR LOOP LOOPT ERDOORHEEN
    const totalSavedImages = parseInt(getSavedInt());
    for (let index = 0; index < totalSavedImages + 1; index++) {
        const item = localStorage.getItem(index);
        // omdat er ook lege indexes kunnen zijn moet er gecheckt worden of de image bestaat
        if (item) {
            const parsedItem = JSON.parse(item);
            const image = parsedItem.img;
            const query = parsedItem.query;
            const url = parsedItem.url;
            const color = parsedItem.color;
            const orientation = parsedItem.orientation;
            insertSaved(image, query, url, color, index, orientation);
        }
    }
}

function insertSaved(image, query, url, color, index, orientation) {
    const newDiv = document.createElement('div');

    // als er geen kleur or orientatie is ingevuld word dat hier gedaan
    if(!orientation){
        orientation = 'All aspects';
    }
    if(color === 'undefined' || color === '' ){
        color = "All colors";
    }
    newDiv.classList = `mdc-card mdc-card-saved-${index}`;
    newDiv.innerHTML =
        `
    <div class="mdc-card__primary-action" style="height: fit-content;!important">
        <div class="mdc-card__media mdc-card__media"
    style="background: url(${image}); background-repeat: no-repeat; background-size: cover; height: 200px;!important">
        </div>
        <!-- ... additional primary action content ... -->
        <div class="mdc-card__ripple"></div>
    </div>
    <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
            <button class="mdc-button mdc-card__action mdc-card__action--button" id="save-img-${index}" data-content="${image}" style="margin-top: 3px;">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label" style="margin-left: 5px;">${query}</span>
            </button>
            </div>
            <div class="mdc-card__action-icons" >
            <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" id="share-btn-saved-${index}"
            title="Share">
            <div class="mdc-button__ripple"></div>
            <i class="fa-solid fa-ellipsis-vertical" style="scale: 1.5; color: #B9B9B9;"></i>
            </button>
        </div>
    </div>
    <!-- CARD SHARE AND DETAILS -->
    <div class="mdc-dialog-saved-${index} mdc-dialog" id="share-alert-saved-${index}" style="z-index: 999999;">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true"
                aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">
                <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->

                <div class="mdc-dialog__content" id="my-dialog-content">    
                <ul class="mdc-list mdc-list--avatar-list">
                <li class="mdc-list-item" tabindex="0" data-mdc-dialog-action="none">
                <button class="mdc-button mdc-button--outlined mdc-button--share" id="copy-img-url-saved-${index}" >
                <span class="mdc-button__ripple"></span>
                <!-- Use icons -->
                <span class="mdc-button__label" style="display:flex; " id="url-saved-${index}" data-content="${url}"><span class="material-symbols-outlined">
                content_copy
                </span>Copy URL</span>
                </button>
                </li>
                <li class="mdc-list-item" tabindex="0" data-mdc-dialog-action="none">
                <ul class="mdc-list">
<li class="mdc-list-item" tabindex="0">
<span class="mdc-list-item__ripple"></span>
<span class="mdc-list-item__text mdc-saved-row"><span class="material-symbols-outlined">
search
</span>${query}</span>
</li>
<li class="mdc-list-item">
<span class="mdc-list-item__ripple"></span>
<span class="mdc-list-item__text mdc-saved-row"><span class="material-symbols-outlined">
aspect_ratio
</span>${orientation}</span>
</li>
<li class="mdc-list-item">
<span class="mdc-list-item__ripple"></span>
<span class="mdc-list-item__text mdc-saved-row"><span class="material-symbols-outlined">
palette
</span>${color}</span>
</li>
</ul>
                </li>
                <li class="mdc-list-item" tabindex="0" data-mdc-dialog-action="none">
                <button class="mdc-button mdc-button--outlined mdc-button--delete mdc-button--share" id="delete-saved-${index}" >
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__label" style="display:flex;"><span class="material-symbols-outlined">
                    Delete
                    </span>Delete</span>
                </button>
                </li>
                </ul>   
                </div>
            </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
    `;
    document.querySelector('#bookmark-holder').appendChild(newDiv);
    addListenerSaved(index);
}
