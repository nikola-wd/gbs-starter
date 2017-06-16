GBS - starter

--------------------------------------------------------------------------------------------------------------------------------------------------------------

 - Is a lightweight starter for rapid development of static HTML / CSS / JS websites or templates to be used with backend frameworks or CMSes.

- It makes use of: 
	G - Gulp
	B - Bootstrap
	S - Sass

- Sass(.scss) architecture is made following css naming and file organization naming conventions / methodologies such as:
	- BEM
	- SMACSS
	- OOCSS
	- Atomic CSS

- Apart from having everything modularized, in most of the files there is starter code for bootstrap elements that you used to code over and over with each new project, and also a folder of Bootstrap components for quick reference and copy/pasting.

- index.html page includes already includes everything that every new website needs: 
	- Header with navigation and a brand logo,
	- Main area for content,
	- Footer that is always at the bottom of the page, no matter how much content there is on page. (done with amazing css feature: Flexbox)

--------------------------------------------------------------------------------------------------------------------------------------------------------------

- All you need to do in order to start a project, asuming that you already have NodeJS and Gulp installed on your system, 
is to cd into the working directory and run the command 'gulp' which will start a local server, watch your .scss | html | js changes 
and everytime you save the file it will: compile .scss files to a single style.css file and refresh a tab.

- Once you finish working you can stop the gulp command and run 'gulp combineMQ' which will combine all the repeating media queries in style.css 
and minimize style.css file to be used in production.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

- SASS file organization

 __BASE_________
|               |__ _base.scss (includes all the files in this dir)
|	 			        |__ _defaults.scss
|	 			        |__ _fonts.scss
|	 			        |__ _helpers.scss
|	 			        |__ _typography.scss
|	 			        |__ _variables.scss
|
|__LAYOUT_______
|				        |__ _footer.scss
|					      |__ _header.scss
|					      |__ _hero.scss
|					      |__ _layout.scss (includes all the files in this dir)					
|
|__PAGES________
|               |__ _pages.scss (includes all the files in this dir)
|               |
|               |__ _homepage.scss
|         
|__UI-ELEMENTS__         
|               |__ _accordion.scss         
|               |__ _breadcrmbs.scss
|               |__ _buttons.scss
|               |__ _dropdowns.scss
|               |__ _forms.scss
|               |__ _icons.scss
|               |__ _lists.scss
|               |__ _media-obj.scss
|               |__ _modals.scss
|               |__ _pagination.scss
|               |__ _panel.scss
|               |__ _progress-bars.scss
|               |__ _sliders.scss
|               |__ _tables.scss
|               |__ _tooltips.scss
|               |__ _ui-elements.scss (includes all the files in this dir)
|               |__ _video.scss        
|
|__ style.scss (inclides all the above directories and compiles to style.css)











