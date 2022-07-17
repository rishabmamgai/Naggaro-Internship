// $(document).ready(function () {
//     $('#input').change(function () {
//         var input = $(this).val();
        
//         $('ul').append('<li>' + input + '<i class="fas fa-check fa-trash"> </li>');
//     });

//     $('ul').on('click', '.fa-trash', function () {
//         $(this).parent('li').fadeOut(200);
//     });
// });

var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    var item = document.getElementById('input').value;
    if(item.length != 0)
        document.getElementsByClassName('list')[0].innerHTML += '<li>' + item + '<i class="fas fa-check fa-trash" id="delete"> </li>';
    
    else
        alert('Please add an item.')
    
    var deleteBtns = document.querySelectorAll('#delete');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentNode.remove();
        });
    });

    document.getElementById('input').value = null;
});
