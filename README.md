# Javascript-Capstone

The JavaScript capstone project is about building our own web application based on an external API. The webapp have 2 user interfaces:

- A `Home Page` displying items that you can `like`
- A `Comment` button on home page display a `Popup window` with more detail about item.
- In `Popup` user can add `comments` and it will be prserved in `API`.
- We use an `API` that provides data about food and we make our webiste accoding to the data. [Meals DB](https://www.themealdb.com/api.php)
- In this project we practice to give review to each other.
- We follow `Gitflow` for this project and solve `git conflicts`

[Project documentation video](https://youtu.be/nEaRUSVVYCo)
 
=======

## Built with

- JavaScript
- Webpack
- HTML & CSS
- Node JS
- Jest
- Postman

=======

### Project Requirements

- You should build these interfaces 
  - The home page.
  - The comments popup.
- You should follow the layout of the wireframes provided. You should personalize the rest of the design including colors, typographies, spacings, etc.
- Home page
  - When the page loads, the webapp retrieves data from:
    - The selected API and shows the list of items on screen.
    - The Involvement API to show the item likes.
  - Remember that your page should make only 2 requests
    - One to the base API.
    - And one to the Involvement API.
  - When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
  - When the user clicks on the "Comments" button, the Comments popup appears.
  - Home page header and navigation similar to the given mockup.
  - Home page footer similar to the given mockup.
- Comments popup
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item comments.
  - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.

**Counters** We have counters in all the interfaces that show:
  - The number of items (home).
  - The number of comments (comments popup).

## Getting Started

If you want a copy of this file go to the github repository and download it from there
 - [Javascript-Capstone](https://github.com/medaminedev66/javascript-capstone)

### Live 

  [LiveDemo](https://medaminedev66.github.io/javascript-capstone/)

### Setup

  ```cmd 
   git clone https://github.com/medaminedev66/javascript-capstone.git
   cd javascript-capstone
  ```

### Install 

   ```cmd 
   npm install
   npm run build
  ```

### Usage 

  ```cmd
  npm run start
  ```

## To run jest test

  ```cmd
  npm run test
  npm run jest
  ```

### Prerequisites

- Node.JS

=======

## Author

👤 **Amine Smahi**

- GitHub: [@medaminedev66](https://github.com/medaminedev66)
- Twitter: [@medaminesmahi](https://twitter.com/medaminesmahi)
- LinkedIn: [Mohammed Amine Smahi ](https://www.linkedin.com/in/mohammed-amine-smahi-1b8615187/)

👤 **Rida Arif**

- GitHub: [@ridaarif98](https://github.com/ridaarif98)
- Twitter: [@ridaarif](https://twitter.com/Rida29984906)
- LinkedIn: [Rida Arif](https://www.linkedin.com/in/rida-arif-90945520b/)

=======

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/medaminedev66/javascript-capstone/issues).

=======

## Show your support

Give a ⭐️ if you like this project!

=======

## Acknowledgments
- Microverse for giving me this chance
- To my Stand Up Team and coding partners who kept my morale up!
- The amazing code reviewers for making me improve every day :thumbsup:

=======
