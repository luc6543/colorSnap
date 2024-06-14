

// * Maakt de Unsplash API call. 
// Heeft nodig: Endpoint. mogelijk: query, orientation, color
// Elke endpoint heeft zijn eigen functie omdat de json steeds anders is.

function makeUnsplashCall(endpoint, query, orientation, color) { 
 
    fetch(endpoint)
        .then(response => response.json())
        .then(result => {

            // elke fetch geeft 10 foto's terug. via een foreach word door elke foto geloopt.
            // eerst wordt er een div aangemaakt. deze div heeft een innerHTML die word aangepast via variables
            // elk klikbaar item heeft een CLASS of ID met de index (0 tot 9) zodat ze 

            result.results.forEach((photo, index) => {
                let imgCard = document.createElement('div');
                imgCard.classList = `mdc-card mdc-card-${index}`;
                imgCard.innerHTML = `
                
                <div class="mdc-card__primary-action">
                <div class="mdc-card__media mdc-card__media--square"
                    style="background: url(${photo.urls.regular}); background-repeat: no-repeat; background-size: cover; ">
                </div>
                <!-- ... additional primary action content ... -->
                <div class="mdc-card__ripple"></div>
            </div>
            <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                    <button class="mdc-button mdc-card__action mdc-card__action--button" id="save-img-${index}" data-content="${photo.urls.small}" data-content-color="${color.split('color=')[1]}" data-content-orientation="${orientation}" data-content-query="${query}">
                    <div class="mdc-button__ripple"></div>
                    <i class="fa-regular fa-bookmark" style="margin-right: 4px; scale: 1.3;"></i>
                 <span class="mdc-button__label">Save</span>
             </button>
             <button class="mdc-button mdc-card__action mdc-card__action--button">
                 <div class="mdc-button__ripple"></div>
                 <span class="material-symbols-outlined" style="margin-right: 4px;">
                     favorite
                 </span> 
                 <span class="mdc-button__label">${photo.likes}</span>
             </button>
                </div>
                <div class="mdc-card__action-icons" >
                    <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" id="share-btn-${index}"
                        title="Share">share</button>
                </div>
            </div>
            <!-- CARD SHARE -->
            <div class="mdc-dialog-${index} mdc-dialog" id="share-alert-${index}" style="z-index: 999999;">
                <div class="mdc-dialog__container">
                    <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true"
                        aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">
                        <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->

                        <div class="mdc-dialog__content" id="my-dialog-content">
                            <ul class="mdc-list mdc-list--avatar-list">
                                <li class="mdc-list-item" tabindex="0" data-mdc-dialog-action="none">
                                    <span class="mdc-list-item__text"><div class="elfsight-app-0f1704a9-aa4f-4ef5-a927-05108ecf58cd" data-elfsight-app-lazy></div></span>
                                </li>
                                <li class="mdc-list-item" tabindex="0" data-mdc-dialog-action="none">
                                    <button class="mdc-button mdc-button--outlined mdc-button--share" id="copy-img-url-${index}" >
                                        <span class="mdc-button__ripple"></span>
                                        <!-- Use icons -->
                                        <span class="mdc-button__label" style="display:flex; " id="url-${index}" data-content="${photo.urls.regular}"><span class="material-symbols-outlined">
                                        content_copy
                                        </span>Copy URL</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mdc-dialog__scrim"></div>
            </div>
                `
                // De nieuw gemaakte div wordt toegevoegd aan de pagina.
                document.getElementById('search-cards-holder').appendChild(imgCard);



                               // GEEFT DE CARD FUNCTIONALITY/
                               addListeners(index);

            })
        }
        )
        .catch(err => console.log(err))
}