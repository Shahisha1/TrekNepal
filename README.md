# TrekNepal - Himalayan Route Planner

This is a web project I built for my coursework at the Faculty of Management Studies, Pokhara University. It's a simple platform to help people check out different trekking routes in Nepal, compare them, and get a feel for what each trail offers.
This was made following the guidelines provided by PU for Project I.
## HomePage Preview 

<img width="1918" height="912" alt="updated-homepage-with-image-carosoul" src="https://github.com/user-attachments/assets/36ce3a45-468a-45fd-8b2e-de35e53c3c0d" />


nfuhewufyhewuodh

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

```
TrekNepal/
├── index.html           # homepage
├── compare.html         # compare treks
├── contact.html         # contact page
├── ...                  # other root-level HTML pages
├── README.md
├── asset/               # images for routes and site UI
├── css/                 # main stylesheet
├── data/                # JSON file with all the trek data
├── js/                  # main logic script
└── details/             # detail of some routes
```
## Why it exists

Built as the Project I submission for Pokhara University's coursework, following PU's project guidelines — but the idea itself came from a real gap: planning a trek in Nepal usually means piecing together info from a dozen scattered blogs and forums just to compare two routes side by side. TrekNepal was an attempt to put that comparison (altitude, duration, best season, difficulty) in one place, plus a basic profile so a user's saved routes and enquiries stick around between visits.
