function onClick() {
     // create a programmatic reference to the nav element
     const nav = document.querySelector('.navigation')

     if( nav.classList.contains("open") ) {
        nav.classList.remove("open")
     }
     else {
        nav.classList.add("open")
     }

}

function onLoad() {
    // create a programmatic reference to the nav button
    const btn = document.querySelector('.nav-button')
    btn.addEventListener("click", onClick )
}

window.addEventListener("load", onLoad )