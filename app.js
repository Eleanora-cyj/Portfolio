const cross_icon = document.querySelector('#nav-bar .nav-bar .nav-list .cross');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

cross_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	cross_icon.classList.toggle('active');
});
document.body.addEventListener('touchstart', function () { });
