# Tarun-Photography-Blog-Photos-that-clik.github.io

Hey! Welcome to my blog. I made this blog to showcase my love for photography 📸.  Enjoy my photos.

Table of Conents:
1. Overview of the project
2. Functionality 

Tech Stack:
1. HTML
2. CSS
3. JAVASCRIPT

Overview of the project:

1. Nav Bar:
-- At the top of the website, we have the website which has the "Home" menu for convinience, "Join" and "Support" pages
<img width="1241" alt="Screenshot 2024-08-01 at 6 22 37 PM" src="https://github.com/user-attachments/assets/18538220-6a4a-4e24-83d3-030ae93a3ea8">
<img width="544" alt="Screenshot 2024-08-01 at 6 24 31 PM" src="https://github.com/user-attachments/assets/a738e125-90b5-4a14-975b-c19498892c5e">

Source: styles.css line 42

2. Images layout:
-- The images are layed out using a grid with 2 columns each with "1fr" width.
<img width="1260" alt="Screenshot 2024-08-01 at 6 27 19 PM" src="https://github.com/user-attachments/assets/c57dbfa3-ce6d-4d62-a597-c129d3b81969">
-- Inside the div container. We have the image, date , like and a comment button (still implementing)
<img width="617" alt="Screenshot 2024-08-01 at 6 29 34 PM" src="https://github.com/user-attachments/assets/d3f56721-b16a-40dd-ba3a-4f5709824124">

The Date and Like button are wrapped under a flex-box for responsive design
<img width="519" alt="Screenshot 2024-08-01 at 6 32 05 PM" src="https://github.com/user-attachments/assets/98c2485f-efec-4bbd-93df-7615a6aefd63">

3. See more:
-- The "See more" link shows the entire gallery of images
<img width="350" alt="Screenshot 2024-08-01 at 6 35 01 PM" src="https://github.com/user-attachments/assets/2b781ba1-0b77-44fb-952b-5dd9b744209d">
<img width="1224" alt="Screenshot 2024-08-01 at 6 35 33 PM" src="https://github.com/user-attachments/assets/85bdbcc5-c41b-4494-b6dd-6e0ec1207a7e">
-- This opens the entire gallery which uses the same boilerplate code as the index.html

Functionality:

1. GO-UP Button Functionality

-- This button will immediately take you to the top

<img width="159" alt="Screenshot 2024-08-01 at 6 40 40 PM" src="https://github.com/user-attachments/assets/8878f60b-7d67-4038-b6e2-f1f4452b9946">

-- Using "position: fixed" I was able to posiiton it 50px from the right and bottom
<img width="498" alt="Screenshot 2024-08-01 at 6 43 52 PM" src="https://github.com/user-attachments/assets/abf27839-b2d7-4a31-92e4-6b0f37017745">
-- Yes! Inline styles : ) I am lazy

2. Smooth Scroll

-- The entire website has smooth scroll and clicking on any of the links takes you to the place.

<img width="349" alt="Screenshot 2024-08-01 at 6 48 54 PM" src="https://github.com/user-attachments/assets/b7181c9b-30f7-474a-bb0c-1519c52c7b5e">

-- Implemented using 'a href' where the href is set to the nav-bar

<img width="486" alt="Screenshot 2024-08-01 at 6 50 39 PM" src="https://github.com/user-attachments/assets/982ddcc7-0c3b-4ce8-810a-acf7e21bea21">

3. Like and comment:

Like button was implemented using javascript.
     
Feature coming: going to add firebase authentication to include user login and cloud firestore to track the number of likes on photos

4. Gallery 

Clicking on the "See more" takes you to the gallery page with all the photos in the particular type.