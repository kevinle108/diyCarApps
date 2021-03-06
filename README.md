# DIY Car Apps
- Code Louisville Front-End Project
- View Site: https://kevinle108.github.io/diyCarApps/

## Description
- For people who change their own oil, deciding which motor oil to buy is a headache since motor oil is often sold at different amounts (single qt, 5 qts, a 12pk of single qts, etc...) and varying prices. Also, the change interval for conventional oil is every 3,000 miles while synthetic oil is every 5,000 miles. This website helps simplifies all this by calculating the oil cost/mile to help determine which motor oil is more cost-effective. There also a fuel economy calculator and contact page. 

## Main features
- Form that compares 2 motor oils and determines which one is cheaper
- Form that calculates MPG fuel economy
- Contact form that checks for valid email and empty fields
- Responsive hamburger-style navigation menu
- CSS flexbox styling for responsive design

## Feature Requirements met
- A navigation menu that collapses into a responsive mobile-friendly menu
    - responsive hamburger menu
- Use Flexbox or CSS Grid to rearrange 2 or more content areas on your page as the screen changes sizes
    - on "Compare Motor Oil" page, content boxes and buttons change to stacked mobile arrangement
    - hamburger menu incorporates flexbox's flex-direction from column to row
- Create a form that takes in at least two fields of information and validates input
    - ensures that only positive numbers can be entered when calculating mpg and comparing motor oils
    - contact form submission checks for valid email input
- Use JavaScript to perform math operations and display the result on your site.
    - calculates mpg or motor oil cost-effectiveness from form inputs
- Use “:nth child” CSS to style a series of elements
    - uses :first-child & :last-child selectors to hide certain elements of the hamburger menu in desktop view

## Note:
- Although this project meets all the requirements listed in the Project Requirements document, the name of this repo is not ideal. Preferably it should be called '/diyCarApps' but GitHub hosting uses a repo name that is my username. 
- Contact form submission doesn't actually go anywhere due to no back-end component on this site.  

