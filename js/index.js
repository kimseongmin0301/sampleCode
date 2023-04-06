const myDiv = document.getElementById('test');
const myDiv2 = document.getElementById('test2');

myDiv.addEventListener('click', () => {
    location.href="test.html?m=1"
})
myDiv2.addEventListener('click', () => {
    location.href="test.html?m=2"
})


