// function selectText() {
//     var text = document.getElementById('textBox1');

//     text.select();
//     text.setSelectionRange(0, 1000);
//     navigator.clipboard.writeText(text.value);
// }

$(document).ready(function() {
    $('#copyBtn').click(function() {
        $('#textBox1').select();
        document.execCommand("copy");
    });
});
