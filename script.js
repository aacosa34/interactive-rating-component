$ = (selector) => document.getElementsByClassName(selector);

$('submit').addEventListener('click', () => {
    let name = $('name').value;
    $('form').submit();
})
