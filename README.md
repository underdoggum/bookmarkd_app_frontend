# Bookmark'd (Front-end)
## by Jameson Wang, Nathan Noack & Lucy Liu.

## Explanation of App
For this project, we are making a bookmarking application that allows users to save, update, edit and delete their favourite websites from a viewable bookmark list. This project was bootstrapped with Create React App.\
[Deployed frontend](https://bookmarkd-app-frontend.netlify.app/)\
[Backend repo](https://github.com/underdoggum/bookmarkd_app_backend)\
[Deployed backend](https://bookmarkd-app-backend.herokuapp.com/)

## Technologies Used
- React
- Express API
- Node
- SASS
- HTML

## Library/Techniques
- RESTful Routes
- CRUD
- Deployment with Heroku, Netlify 

## React Routing Table 
| Action         | Path                        | HTTP Verb | Purpose                                                                        |
|:--------------:|:---------------------------:|:---------:|:------------------------------------------------------------------------------:|
| Index          | /                           | GET       | List all Bookmarks                                                             |
| Show           | /bookmarks/:id              | GET       | Show info about one Bookmark                                                   |

## User Stories
- As a user, I can see a list of all my bookmarks when I visit the page
- As a user, I can click on one of my bookmarks and have it take me to the linked website
- As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark
- As a user, I can delete a bookmark so I can keep my list relevant
- As a user, I can update a bookmark in case I made a typo or the URL changed

## Challenges
- Our main challenges were around collaborating and understanding the new workflows or creating a new branch and avoiding merge conflicts. 
- Also, the searchbox wasn't comparing text input to values in the full array of bookmark titles correctly. The solution was learning that React doesn't necessarily update state in the order that the input