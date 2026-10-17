# Luna Nobles Portfolio Webpage


**Project Information**
- Project Title: _**Luna Nobles Portfolio Webpage & Personal Site**_
- Primary Author: _**Luna Nobles** (aka DeLeDuck, aaka Princess Celene)_
- Initialisation Date: _**July, 2025**_


This webpage is the hub and core of all my personas, projects, ideas, and whatever else I'd like!


---
## Update Notes
`(Written Oct. 15, 0.6.1)` Hello, friends! The project is going great, and I'm having so much fun working on it! I'm *finally* adding actual content to the site! It's awesome to finally have a place to put all my work. I have no clue how much longer the 0.6 family will go on for, but I will simply keep adding my content until I am satified with it!

So here's something interesting: In creating the /wishlist page, I grew my skills in JavaScript manipulation and also using the HTML to a higher capacity, with less redundancies. For example, instead of manually creating a `div` element with the same tags as the, say, `data-tags` parameter of the element, I just use the parameter (or, class, in the case of /wishlist) to create div with the `content: "...";` CSS option. Another way I've improved is with my JS, and using a special `data-special-visibility` parameter. I made it so that you can specially view certain cards on certain view types, without that card having to explicitly be for that view type.

To better explain, say there is a Public card for say just AA batteries. Now I don't want to creat another card for that same item just to make it available for Friends & Family, so instead, in the `data-special-visibility` paremeter of that original Public card, I add `friendsandfamily`. Then, in the JS, when selecting items to make visible, I check both the original type, *and* the `data-special-visibility`, and lump them all together.

After using those techniques in the /wishlist page, I saw much room for improvement in my super card design. I want to make it so that I only have the tags in the `data-tags` and not as more element; I want to make it so that the title and subtitle elements are literally the same element; and I want to reduce the redundancies and complexity of the code in general. But all of this **isn't** my focus right now; I am more trying to get content added right now. Perhaps in the 0.7 family, I will work on this idea. 

## Known bugs & Issues
1. If you hadn't noticed... there's no content... As of now, the page is really just a pretty way to say "not much here ¯\\\_(ツ)\_/¯".
2. There is a considerable challenge in code readability, due to the age of this project slowly but surely creating spaghetti code. This issue is most aparent in the stylessheets, especially the big ones like `styles_general.css`.