if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

let arr = [
    'title',
    'subTitle',
    'links',
    'toLoad',
]
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        document.getElementById(arr[i]).classList.remove('notLoaded')
    }, i * 1000)
}