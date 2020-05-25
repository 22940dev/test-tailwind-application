<h1 align="center">
  Dan Spratling - Tailwind UI Application
</h1>

## About me

Hi! I'm Dan Spratling. I'm a UI developer who's worked on many client projects across multiple industries. I love creating great experiences for others. I'm consistently learning and I try to give back to the community where I can. If you want to learn more about me, my (portfolio website)[https://danspratling.dev/] or (twitter account)[https://twitter.com/dan_spratling] give much better overview of who I am as a person than this rèsumè does.

## This site

This site is a resume designed specifically for applying to Tailwind UI. As with all my projects, I took the opportunity to learn something new. The design is heavily inspired by apple's product page, with long pages with fixed animated page sections.

## Improvements

This site is far from perfect. It was built quickly for the application and with a new design approach which means there are issues which should be resolved if this was to be used in a real-world website. I've listed a few of the problems I've noticed here.

### Approach

A framework was probably not required here. A Gatsby site was used as a quick template to get started building the site, but this led me to 2 issues.

1. A one-pager doesn't need a framework, or a simpler framework like alpine.js would be much better suited
2. A framework here led me to use state for scroll animations which is _*not good*_

### Performance

Using scroll and state to manage the animations of elements is a heavy handed approach, and with more complex animations (or older software) causes lag because of how much and how often the browser is forced to re-paint the window. Using requestAnimationFrame to manage the animation and debouncing scroll to reduce the number of state changes would definitely improve performance here (and possibly other better ways, I've got more to learn here).

### Accessibility

Because of the fixed elements and structure of the page, it's not tabbable. This isn't a problem for a small site like this, but I'd be unhappy releasing something with glaring issues like this in real life. All buttons and links should be able to be navigated to via tab.

### Design

The consistency of some design elements could be improved, specifically between the timeline and the rest of the components. The timeline looks great in isolation but the cards don't fit with the design of the rest of the site.

### Content

As you'll see, all data is stored either directly in JSX, or as an object (when looping).

## Setup

This is a Gatsby site because ... well I like Gatsby! As such, the normal way of setting up a Gatsby site carries over.

```sh
# setup
yarn

# dev server
gatsby develop

# prod build
gatsby build && gatsby serve
```
