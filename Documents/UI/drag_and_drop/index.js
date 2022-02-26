
// take img box and white box 
const imgBox = document.querySelector('.imgbox')
const whiteBoxes = document.getElementsByClassName('whitebox')

// Event listeners for drag on image box

imgBox.addEventListener('dragstart' , (e) => {
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className = 'hide'
    },0)
    
})

imgBox.addEventListener('dragend' , (e) => {
    e.target.className = 'imgbox'
})

// Event listeners for drag on white boxes

for (whitebox of whiteBoxes) {

    whitebox.addEventListener('dragover' , () => {

    })
    
    whitebox.addEventListener('dragenter' , () => {
    
    })
    
    whitebox.addEventListener('dragleave' , (e) => {
        e.target.append(imgBox)
    
    })
    
    whitebox.addEventListener('drop' , (e) => {
        e.target.append(imgBox)
    
    })

}


