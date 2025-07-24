To-Do List Application

A simple, responsive To-Do List web application built with HTML, CSS, and JavaScript. This project allows users to add, toggle (mark as complete/incomplete), and remove tasks, with data persisted in the browser's local storage.

Features





Add Tasks: Input a task name and add it to the list.



Toggle Tasks: Mark tasks as completed or incomplete using checkboxes.



Remove Tasks: Delete tasks with a single click.



Persistent Storage: Tasks are saved in the browser's localStorage, so they remain even after refreshing the page.



Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.



Clean UI: Minimalistic design with a blurred background effect and smooth styling.

Screenshots

Below are screenshots of the To-Do List application on desktop and mobile devices:





Desktop View:

<img width="1304" height="654" alt="image" src="https://github.com/user-attachments/assets/740c88b8-b746-4659-aa42-89d72028dd6f" />







Mobile View:

<img width="336" height="593" alt="image" src="https://github.com/user-attachments/assets/ce3c9ad6-7052-4592-a91a-b60fcf76d99b" />





Files





index.html: The main HTML structure for the application.



style.css: Contains all the styling for the app, including responsive design and visual effects.



main.js: Handles the core functionality, including task management and local storage.

Setup





Clone or download this repository to your local machine.



Ensure you have the following files in the same directory:





index.html



style.css



main.js



(Optional) images/back.jpg for the background image. If not included, the app will still function with a fallback solid background color.



Open index.html in a web browser to start using the app.

How to Use





Add a Task: Type a task into the input field and click the "Add" button or press Enter.



Mark as Complete/Incomplete: Check or uncheck the checkbox next to a task to toggle its completion status.



Remove a Task: Click the "×" button next to a task to delete it.



Persistence: Tasks are automatically saved in your browser's local storage and will persist across page refreshes.

Notes





The app uses localStorage to save tasks, so data is stored locally in the browser and not on a server.



The background image (./images/back.jpg) is referenced in style.css. If you don't have this image, you can replace it with another or remove the background-image property for a solid background.



The app is fully responsive, adapting to different screen sizes with media queries.
