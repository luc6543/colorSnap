function backToHome() {
    const newURL = `/`;
    history.pushState(0, "", newURL);

    if (document.querySelector('.active-sheet') !== null) {
        document.querySelectorAll('.active-sheet').forEach(act => {
            act.classList.add('sheet-out-of-view-right');
        })
    }
    document.querySelector('#home-sheet').classList.remove('sheet-out-of-view-right');
    document.querySelector('#home-sheet').classList.add('active-sheet');
}

addEventListener("popstate", backToHome); 
    