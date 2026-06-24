# TrekNepal - Himalayan Route Planner

This is a web project I built for my coursework at the Faculty of Management Studies, Pokhara University. It's a simple platform to help people check out different trekking routes in Nepal, compare them, and get a feel for what each trail offers.
This was made following the guidelines provided by PU for Project I.
## HomePage Preview 



## What it does

*   **Route List:** Browse through a bunch of treks like Everest Base Camp or Annapurna Circuit. You can filter them by difficulty (Easy to Extreme) or just search by name.
*   **Comparison Tool:** If you can't decide between routes, you can pick up to three and see their altitude, duration, and best seasons side-by-side.
*   **Gallery:** A collection of photos from the different trekking regions.
*   **Profile Page:** A simple dashboard I added where you can see "saved" routes, recent enquiries, and update your basic info, so your changes stay there even if you refresh.
*   **Enquiry Forms:** Integrated forms on the contact and login pages with basic validation.

## How it's built

I kept things pretty simple and used:
*   **HTML & CSS:** Plain old vanilla code for the structure and styling.
*   **JavaScript:** Used for all the dynamic parts like the route filtering, the comparison logic, and the profile updates.
*   **Data:** All the route info is stored in a `routes.json` file.
*   **Libraries:** Just a few helpers like jQuery for the date picker and Font Awesome for icons.

## Project Structure

*   `/asset`: Images for the routes and site UI.
*   `/css`: The main stylesheet.
*   `/data`: The JSON file where all the trek data lives.
*   `/js`: The main logic script.
*   `/pages`: The rest of the pages of the project.
*   The root folder contains all the HTML pages (`index`, `routes`, `gallery`, `compare`, `profile`, etc.).
