// Example 1: Creating and Adding a New Element

// Create a new div element
const newDiv = document.createElement('div')
newDiv.id = 'new-div'

// Create a text node
const newContent = document.createTextNode('Hello, world!')

// Add the text node to the div
newDiv.appendChild(newContent)

// Add the new div to the body
document.body.appendChild(newDiv)

// Example 2: Inserting an Element Before Another

// Assuming there's an existing element with the ID 'existing-element'
const existingElement = document.getElementById('new-div')

// Create a new p element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph.'

// Insert the new paragraph before the existing element
existingElement.parentNode.insertBefore(newParagraph, existingElement)

const anotherDiv = document.createElement('div')
anotherDiv.id = 'another-div'
anotherDiv.textContent = 'This is another div.'

// Insert a node after existingElement
existingElement.parentNode.insertBefore(anotherDiv, existingElement.nextSibling)

// Example 3: Creating a List Dynamically
// This example demonstrates creating an unordered list (<ul>) and filling it with items (<li>) dynamically.

// Create a new ul element
const list = document.createElement('ul')

// Array of items
const items = ['Item 1', 'Item 2', 'Item 3']

// Loop through the items array
items.forEach((item) => {
   // Create a new li element for each item
   const li = document.createElement('li')
   li.textContent = item

   // Add the li element to the ul
   list.appendChild(li)
})

// Add the list to the body
document.body.appendChild(list)

// Example 4: Setting Attributes and Event Listeners
// This example creates a new button with an onclick event listener that displays an alert when clicked.

// Create a new button element
const button = document.createElement('button')
button.textContent = 'Click me'

// Set an attribute
button.setAttribute('id', 'myButton')

// Add an event listener
button.addEventListener('click', function () {
   alert('Button was clicked!')
})

// Add the button to the body
document.body.appendChild(button)

// Example 5: Creating a Table Dynamically
// Creating a table involves creating the table itself, then rows (<tr>), and then cells (<td> or <th>) within those rows.

// Create a table element
const table = document.createElement('table')

// Create a table row
const row = table.insertRow()

// Create and insert cells
for (let i = 0; i < 3; i++) {
   const cell = row.insertCell()
   cell.textContent = `Cell ${i + 1}`
}

// Add the table to the document body
document.body.appendChild(table)
