function addListeners(index) {
    // OPENS THE SHARE PROMPT UPON SHARE ICON CLICK
    const dialog = new MDCDialog(document.querySelector(`.mdc-dialog-${index}`));
    // const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'));


    document.getElementById(`share-btn-${index}`).addEventListener('click', () => {
        dialog.open();
    });
    // COPIES THE URL WHEN YOU CLICK COPY URL.
    document.querySelector(`#copy-img-url-${index}`).addEventListener('click', () => {
        navigator.clipboard.writeText(document.querySelector(`#url-${index}`).getAttribute('data-content'));
    });
    document.querySelector(`#save-img-${index}`).addEventListener('click', () => {
        let btn = document.querySelector(`#save-img-${index}`);
        let bookmark = btn.querySelector('.fa-bookmark');
        const url = document.querySelector(`#save-img-${index}`).getAttribute('data-content');
        const color = document.querySelector(`#save-img-${index}`).getAttribute('data-content-color');
        const orientation = document.querySelector(`#save-img-${index}`).getAttribute('data-content-orientation');
        const query = document.querySelector(`#save-img-${index}`).getAttribute('data-content-query');
        saveImage(url, query, orientation, color);
        if(bookmark.classList.contains("fa-regular")){
            bookmark.classList.remove('fa-regular');
            bookmark.classList.add('fa-solid');
        } else {
            bookmark.classList.add('fa-regular');
            bookmark.classList.remove('fa-solid');
        };
    });
}
function addListenerSaved(index){
    // OPENS THE SHARE PROMPT UPON SHARE ICON CLICK
    const dialog = new MDCDialog(document.querySelector(`.mdc-dialog-saved-${index}`));
    
    
    document.getElementById(`share-btn-saved-${index}`).addEventListener('click', () => {
        dialog.open();
    });

    document.querySelector(`#copy-img-url-saved-${index}`).addEventListener('click', () => {
        navigator.clipboard.writeText(document.querySelector(`#url-${index}`).getAttribute('data-content'));
    });
    document.querySelector(`#delete-saved-${index}`).addEventListener('click', () => {
        unsave(index);
        console.log("removing:" + index);
        document.querySelector(`.mdc-card-saved-${index}`).remove();
    });
    
}