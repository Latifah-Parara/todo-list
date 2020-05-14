class Note {
    /* Constructs a new Note class. Initially wanted to have functions for editing, deleting, and creating notes, 
    but Object.assign was much cleaner */
    constructor(content) {
        this.content = content

        // Initialising all of the elements needed.
        const container = document.getElementById('notes-container')
        const xButton = document.createElement('div')
        const newDiv = document.createElement('div')
        const noteText = document.createElement('div')
        
        // Assigning necessary attributes to elements.
        newDiv.setAttribute('class', 'note')
        
        Object.assign(noteText, {
            className: 'note-text',
            contentEditable: true,
            textContent: this.content,
            ondblclick: function(event) {
                event.target.style.textDecoration = 'line-through'
            }
        })

        Object.assign(xButton, {
            className: 'x-button',
            textContent: 'X',
            onclick: function (event) {
                event.target.parentNode.remove()
            }
        })

        newDiv.appendChild(xButton)
        newDiv.appendChild(noteText)
        container.appendChild(newDiv)  
    }
}

document.getElementById('user-text').addEventListener('keydown', function(event) {
    if(event.keyCode === 13 && this.value !== "") {
            const note = new Note(this.value)
            this.value = ""
            return note
    }
})



    