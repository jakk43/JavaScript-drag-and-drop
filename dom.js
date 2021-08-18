const chars = document.querySelectorAll(".char");
const equipChar = document.querySelector(".equip-char");

// drag
function dragChar(event) {
    event.dataTransfer.setData('text/plain', event.target.id)
    // console.log(event.target.id);
}
chars.forEach((char) => {
    char.addEventListener('dragstart', dragChar)
})

function dragOverChar(event) {
    event.preventDefault();

}

function dropChar(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equipChar.src = image.src;
}

equipChar.addEventListener('dragover', dragOverChar)
equipChar.addEventListener('drop', dropChar)