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

- All you need to do in order to start a project, asuming that you already have NodeJS and Gulp CLI installed on your system, 
is to cd into the working directory and run the command 'gulp' which will start a local server, watch your .scss | html | js changes 
and everytime you save the file it will: compile .scss files to a single style.css file and refresh a tab.

- Once you finish working you can stop the gulp command and run 'gulp combineMQ' which will combine all the repeating media queries in style.css 
and minimize style.css file to be used in production.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

- SASS file organization

 - BASE (all the default settings)
   - _base.scss (includes all the files in this dir)
   - _defaults.scss
   - _fonts.scss
   - _helpers.scss
   - _typography.scss
   - _variables.scss
   
 - LAYOUT (general layout elements of the page)
   - _footer.scss
   - _header.scss
   - _hero.scss
   - _layout.scss (includes all the files in this dir)		
   			
 - PAGES (meant for all the page specific css, that is not used somewhere else)
   - _pages.scss (includes all the files in this dir)
   - _homepage.scss
        
 - UI-ELEMENTS (most of the bootstrap components + a support for responsive video embed)          
   - _accordion.scss         
   - _breadcrmbs.scss
   - _buttons.scss
   - _dropdowns.scss
   - _forms.scss
   - _icons.scss
   - _lists.scss
   - _media-obj.scss
   - _modals.scss
   - _pagination.scss
   - _panel.scss
   - _progress-bars.scss
   - _sliders.scss
   - _tables.scss
   - _tooltips.scss
   - _ui-elements.scss (includes all the files in this dir)
   - _video.scss        

- style.scss (inclides all the above directories and compiles to style.css)











