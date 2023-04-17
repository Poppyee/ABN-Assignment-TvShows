# tvshows

Hi there. My name is Poppy Elisha-Elliss and this is my assignment for the position: Medior Front-End Developer. 

I had a lot of fun making this assignment. Could it be better? Yes of course. But I wanted to finish it in a reasonable amount of time, and I believe it gives you a good impression of my capabilities.

I hope you enjoy clicking through. Let me know if you have any questions.


## To run the application

Ensure you are in the folder 'TvShows'. Open terminal and run:
```
npm install
```

Then:

```
npm run serve
```

## Main features

It is (hopefully) a very intuative application to use. 

- On the home/landing page there is a search bar to search for shows. Selecting a searched move will show further information
- You can select a move from Todays Schedule to find out more information.
- Once a show is selected, is it possible to favourite that show with the heart icon in the title.
- These favourited shows can be found on the favourites page by clicking the 'heart house' icon.
- On the favourites page you can again click on the shows to find out more information; or, remove it from favouites by deselecting the heart
- You can toggle between light and dark mode by clicking the torch
- The television icon will return you to the home screen.

## Personal Choices

I decided to create the application in Vue as that is the framework I am currently using in my job at ABN and I believe that is also the framework for the position I am applying for.

I think I took the sentence "Please keep it to a minimum in leveraging/using scaffolding tools/boilerplate templates/plugins." too seriously, but I found it a fun challenge to create everything myself. Therefore, I have not used any web-component libraies.

The application is made using Vue3 composition API. 

I am comfortable using both the composition API and the Options API, but I love how clean the ```<script setup> ``` looks.

I found this assignment to be the perfect opportunity to test out Pinia; using it to keep track of the favourited shows.

## Architecture

I am using the classic Vue folder structure:
- Vue pages can be found under 'pages'
- Components under 'components'
- The assets folder contains backgrounds, icons, and styling.
- I have abstracted away the styling for dark/light mode, and for any styling that can be reused.
- In the store folder you can find the code for Pinia

## Extra Features

- Dark mode

- Ability to favourite Tv shows.



### Icons used

https://www.flaticon.com/free-icons/torch

https://www.flaticon.com/free-icons/favourite

https://www.flaticon.com/free-icons/tv

https://www.flaticon.com/free-icons/star

https://www.flaticon.com/free-icons/favorite

https://www.flaticon.com/free-icons/heart


