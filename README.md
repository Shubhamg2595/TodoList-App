# TodoList-App
A simple Todo List Application where user can view their todoItems,create, edit or delete them. 

Created Using with ReactJS, Redux and Redux-Saga


Setup process.

1. git clone this repo.
2. enter client folder
3. npm install (in terminal)
4. npm start (in terminal)


===========================
Major Components
===========================

1.Container Component

src/Container/Homepage :
Connected to Store Directly.
Takes responsibility for sharing required state variables from store to Children Components.
Action Dispatching for Store Updation.


2. Functional Components: 

src/components/create-todo : Form Handling for creating a new Todo
src/components/edit-todo : Form Handling for editing a new Todo
src/components/todos-list : Todo Listing is done here


3. src/Redux:

Constants : constains static Constant keyword describing action Intents
Actions : contains Action Creators for the entire application
Reducers: contains pure functions required for store updation
Sagas: used as middleWare for handling side effects i.e asynchronous operations
Store: store configuration handled here


