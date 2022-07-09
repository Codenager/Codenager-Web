function locationTo(dom) {
    let target = document.querySelector(dom);
    const clientRect = window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo(0, (clientRect-50));
}