# TrekNepal - Himalayan Route Planner

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Last Commit](https://img.shields.io/github/last-commit/Shahisha1/TrekNepal)

This is a web project I built for my coursework at the Faculty of Management Studies, Pokhara University. It's a simple platform to help people check out different trekking routes in Nepal, compare them, and get a feel for what each trail offers.

This was made following the guidelines provided by PU for Project I.

## HomePage Preview

<img width="1918" height="912" alt="updated-homepage-with-image-carosoul" src="https://github.com/user-attachments/assets/36ce3a45-468a-45fd-8b2e-de35e53c3c0d" />

## What it does

* **Route List:** Browse through 10 treks like Everest Base Camp, Annapurna Circuit, and Kanchenjunga Base Camp. You can filter them by difficulty (Easy to Extreme) or just search by name.
* **Comparison Tool:** If you can't decide between routes, you can pick up to three and see their altitude, duration, and best seasons side-by-side.
* **Gallery:** A collection of photos from the different trekking regions.
* **Profile Page:** A simple dashboard where you can see "saved" routes, recent enquiries, and update your basic info, so your changes stay there even if you refresh.
* **Enquiry Forms:** Integrated forms on the contact, login, and signup pages with basic validation.
* **FAQ Page:** Answers to the questions people usually ask before booking or planning a trek.

## How it's built

I kept things pretty simple and used:
* **HTML & CSS:** Plain old vanilla code for the structure and styling.
* **JavaScript:** Used for all the dynamic parts like the route filtering, the comparison logic, and the profile updates.
* **Data:** All the route info is stored in a `routes.json` file — 10 routes in total, each with region, duration, max altitude, best season, and a description.
* **Libraries:** jQuery and jQuery UI for the date picker on the contact page, and Font Awesome for icons.

Everything runs as a static site, so there's no backend or build step — just open `index.html` in a browser. If you want the date picker to behave properly, it's better to serve the folder with something like VS Code's Live Server extension instead of opening the file directly.

## Project Structure

```
TrekNepal/
├── index.html            # homepage
├── routes.html           # full route list with filters/search
├── compare.html          # compare treks
├── gallery.html          # photo gallery
├── profile.html          # saved routes and enquiries dashboard
├── contact.html          # contact page
├── login.html / signup.html
├── FAQ.html
├── README.md
├── asset/                # images for routes and site UI
├── css/                  # main stylesheet
├── data/                 # routes.json — all the trek data
├── js/                   # main logic script
└── details/              # individual pages for some routes (EBC, ACT, LVT)
```

## Why it exists

Built as the Project I submission for Pokhara University's coursework, following PU's project guidelines — but the idea itself came from a real gap: planning a trek in Nepal usually means piecing together info from a dozen scattered blogs and forums just to compare two routes side by side. TrekNepal was an attempt to put that comparison (altitude, duration, best season, difficulty) in one place, plus a basic profile so a user's saved routes and enquiries stick around between visits.


## License

No license yet — this is a coursework project for now.
