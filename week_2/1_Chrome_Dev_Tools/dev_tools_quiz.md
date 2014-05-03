#### Include an inline screenshot of your codeschool's points from the profile page:
Screenshot Codeschool https://www.flickr.com/photos/123984799@N08/14070970416/
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  The elements tab -> it is based on DOM and shows html/css structure in tree-like structure. By clicking "inspect element" or by using the search you can get righ to the element
  * Javascript Debugging
  In the console tab and then by clicking on the referenced JS file to put break points etc.
  * Performance Optimization 
  Page speed and network tab by analyzing different elements that are loaded to the page and optimizing them
* What's the quick key for your OS to spawn the Dev Tools inspector?
STRG+SHIFT+I
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  It's black and grey (#0b0f11)
  * Tweak the background color to white.
  Done!
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  Done!
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  Done!
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  Screenshot Postmachina: https://www.flickr.com/photos/123984799@N08/14114155953/

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
Because it's an image that is embedded in CSS as a background to the <p> paragraph in html (pretty cool)
http://www.postmachina.com/images/home_bg.gif
So you can't access that image from the website and download it.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  This one: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  Go to Network tab and sort by size // it's 316 KB
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  Put CSS in the document head (that takes 10 seconds)
  Inlining small CSS into one file (that takes 3 minutes)
  Optimize images (that takes longer but saves a lot of kb)
  Optimizing images alone would save us 885.9KiB