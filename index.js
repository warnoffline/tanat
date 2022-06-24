const modal = $.modal({
    closable: true,
    content: `<a href = "index.html">HOME</a>
    <a href= "#about">ABOUT US</a>
    <a href="#news">SERVICES</a>
    <a href="#our">OUR WORKS</a>
    <a href="#sing">CONTACT</a>`,
    width: '400px',
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if(btnType === 'price'){
        modal.open()
    }
})