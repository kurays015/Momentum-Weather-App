const clock = document.querySelector('.clock-desktop');
const greet = document.querySelector('.greets');
const liveDate = document.querySelector('.live-date');
const writeName = document.querySelector('#write-name')

// Function to handle opening and closing of modals with zoom-in and zoom-out animations
function handleModal(modal, openButton, closeButton) {
  // Event listener for opening the modal
  openButton.addEventListener('click', () => {
    // Add the 'zoom-in' class to apply zoom-in animation
    modal.classList.add('zoom-in');
    // Show the modal using the showModal() method
    modal.showModal();
    //remove time and greet
    clock.style.display = 'none'
    greet.style.display = 'none'
    liveDate.style.display = 'none'
    writeName.style.display = 'none'
  });

  // Event listener for closing the modal
  closeButton.addEventListener('click', () => {
    // Add the 'zoom-out' class to apply zoom-out animation
    modal.classList.add('zoom-out');
    
    // Event listener for animationend to close the modal after the animation ends
    modal.addEventListener('animationend', () => {
      // Close the modal using the close() method
      modal.close();
      // Remove the 'zoom-out' class to reset for future animations
      modal.classList.remove('zoom-out');
    }, { once: true });
    //display greet and clock
    clock.style.display = 'block'
    greet.style.display = 'block'
    liveDate.style.display = 'block'
    writeName.style.display = 'block'

  });
}

// Todolist modal
const todoModal = document.querySelector('.container');
const todoClose = document.querySelector('.todo-modal-close');
const todoOpen = document.querySelector('.open-modal');

// Call the handleModal function to set up event listeners for Todolist modal
handleModal(todoModal, todoOpen, todoClose);

// Weather modal
const weatherModal = document.querySelector('.weather-modal-container');
const weatherClose = document.querySelector('.weather-modal-close');
const weatherOpen = document.querySelector('.weather-modal');

// Call the handleModal function to set up event listeners for Weather modal
handleModal(weatherModal, weatherOpen, weatherClose);