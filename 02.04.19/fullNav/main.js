var drop_down = document.getElementById('drop_down');
var drop_down_ul = document.getElementById('drop_down_ul');

drop_down.addEventListener('mouseover',function(){
    drop_down_ul.style.display = 'block';
});
drop_down.addEventListener('mouseout', function () {
    drop_down_ul.style.display = 'none';
});

// Responsive JS
var nav = document.getElementById('menu_ul');
var open = document.getElementById('open_menu');
var close = document.getElementById('close_menu');

open.addEventListener('click', function () {
    nav.style.right = '0';
    open.style.display = 'none';
    nav.style.display = 'block';
    close.style.display = 'block';
});
close.addEventListener('click', function () {
    nav.style.right= '-400px';
    open.style.display = 'block';
    nav.style.display = 'none';
    close.style.display = 'none';
    
});