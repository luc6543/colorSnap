const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
function openSnackbar(text){
    if(!snackbar.isOpen){
        snackbar.labelText = text;
        snackbar.open();
    }
}