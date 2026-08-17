# Today I Learned

React app for sharing facts worth checking. Post a fact with a source, browse by category, and vote on whether it holds up. Data from [Supabase](https://supabase.com/).

Live at [quick-facts-nu.vercel.app](https://quick-facts-nu.vercel.app).

## Features

- Post facts with a required source URL, capped at 200 characters
- Eight categories, each color-coded, filterable from the sidebar
- Vote a fact interesting, mindblowing, or false
- Facts outvoted as false get flagged as disputed
- Auto-growing text field with a live character counter
- Skeleton, error, and empty states for the feed
- Dark theme with independently scrolling sidebar and feed

## Tech Stack

- React 19
- Vite
- Supabase (Postgres + REST)
- Plain CSS with custom properties, Geist typeface

## Setup

```sh
npm install
cp .env.example .env
```

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env` to your [Supabase](https://supabase.com/) project values, then:

```sh
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

The app expects a `facts` table with `text`, `source`, `category`, `votesInteresting`, `votesMindblowing`, and `votesFalse` columns.

## Project Structure

```
src/
  App.jsx                    # root layout, facts fetching + category state
  supabase.js                # supabase client, reads env config
  constants.js               # category list and colors
  utils.js                   # URL validation
  components/
    Header.jsx               # brand + form toggle
    NewFactForm.jsx          # post a fact
    CategoryFilter.jsx       # category sidebar
    FactList.jsx             # feed, delegates to state components
    Fact.jsx                 # single fact card + voting
    FactSkeleton.jsx         # loading placeholder
    ErrorState.jsx           # fetch failure + retry
    EmptyState.jsx           # no facts in category
    ScrollToTopButton.jsx    # mobile scroll-to-top
  style.css
```
