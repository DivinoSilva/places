$('.minima').click(function(event) {
	$('aside ul li span').toggleClass('dnon');
	$('aside').toggleClass('min-aside');
});
$('aside ul li.aside-cad').click(function(event) {
	$('aside ul li ul.aside-cad').toggleClass('abre-aside');
	$('aside ul li ul li').toggleClass('opac-li');
});
$('.user i').click(function(event) {
	$('.configuracoes-user').toggleClass('configuracoes-user-show');
});