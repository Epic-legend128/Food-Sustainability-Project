# Food-Sustainability-Project

Welcome to the Food Sustainability Website repository! This project aims to promote sustainable eating habits and provide users with tools and information to manage their dietary needs responsibly. The name of the site is S-HELP.

## Features

- **About Us Page**: Learn more about our mission and team.
- **Contact Us Page**: Get in touch with us for any queries or feedback.
- **Login/Logout System**: Secure user authentication and session management.
- **Subscription System**: Users can subscribe to access a form that calculates their daily calorie intake to lose, gain, or maintain weight using data provided by the user. This calculation is based on an average of the Harris-Benedict and the Mifflin St Jeor formulas.
- **Supermarket Locator**: A map that shows the top 10 nearest supermarkets to the user's location (only includes supermarkets from Italy) and their distances, using the Haversine formula.
- **Sustainable Eating Information**: A section with lots of info on how to eat sustainably and responsibly with data to avoid overconsumption.
- **Healthy Recipes**: Browse through multiple foods with their recipes, cooking times, and ingredients, all aimed at being healthy and sustainable. These recipes are a mix of online sources and our original creations, with accompanying pictures taken by us.

## Technologies Used

- **Backend**: Node.js
- **Frontend**: CSS, EJS, JavaScript
- **Database**: MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/food-sustainability-website.git
    cd food-sustainability-website
    ```

2. Install the dependencies:
    ```sh
    npm install cookie-session paypal-rest-sdk express dotenv ejs stripe mongoose node-localstorage
    ```

## Running the Website

To start the website, run the following command in the terminal:
```sh
node server.js
```
Then navigate to [localhost](http://localhost:8080) to access the site on your browser.
