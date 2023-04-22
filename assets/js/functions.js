const folders = document.querySelectorAll('.filesystem__folder ');

folders.forEach( loopFolder => {
    loopFolder.querySelector('.filesystem__folder-button').addEventListener('click', () => loopFolder.classList.toggle('open'))
})