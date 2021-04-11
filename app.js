const cross_icon = document.querySelector('#nav-bar .nav-list .cross');
const nav_list = document.querySelector('#nav-bar .nav-list');

cross_icon.addEventListener("click", function() {
	nav_list.classList.toggle('open');
	cross_icon.classList.toggle('active');
	console.log("Clicking the nav button");
});

document.body.addEventListener('touchstart', function () { });
