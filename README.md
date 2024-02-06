# HTML/CSS website clone project (Wikipedia article)

Here you'll find my Wikipedia website clone project, using HTML and CSS.

## Description

This clone is based on the URL:(https://en.wikipedia.org/wiki/Upingtonia), and aims at mimicing structure, layout and styling. 

## Structuring

I have incorporated a responsive design that adapts to different screen sizes, mainly using flexboxes and nested flexboxes, but also grids. I have structured the website mainly by oberving the page and tried to limit my use of Chrome DevTools to the bare minimums such as font-sizes, exact background color codes etc.

## Special CSS features

Certain features that I have focused on, apart from the general HTML and CSS, are button :hover and :active functions, as well as tooltips for the first three links in the main body content. Media queries have been added to adjust to different screen sizes. 

## Additional notes
### Gulpfile
I have created a gulpfile.js to minify HTML, CSS and JS, as well as compile .scss to .css. This gulpfile also watches for changes, and then writes all of the source code file in src/ subfolder into the dist/ subfolder (not in version control). This automates the process workflow and is easily done by simply running 'gulp' in the command line in the root directory. 

### CSS formatting
The CSS styling is contained in a single '.css' file, but is separated with comments as headings of each new section for easier overview.
