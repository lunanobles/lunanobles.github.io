# `0.5.6 | Univeral Detailed Project Cards`
- Published **Sep. 13, '26**
- In the HTML, I've coded blocks to help me actually work on this MASSIVE page via the `MARK:` comments because HTML is weird and doesn't support `#region` & `#endregion` in my coding envinroment (I use VSCode).
- Changed all simple project cards into their super card counterparts.
  > All the cards in the "all" section are broken because I didn't give them unique IDs yet. This isn't a content update, just me working on getting everything in place so I CAN add the content later.
- Updated the `FocusCard()` function to work via `classList.toggle()` because that's just plain better, ngl.
- More typo fixes in the changelog 😭.
- Changed the Princess Celene card image to the associated profile image.
- Added the three variations of the Discord icon.

---

## Future/Planned Updates

```0.5.7 | Project Card Filtering via Tags```<br/>
```0.5.8 | Project Cards Content, Media, Descriptions, Etc...```<br/>

---
## Changelog History
_(In Newest to Oldest Order.)<br/>(📦 indicates a release version.)_





<!-- MARK: 0.5.0...0.5.? -->
### 0.5.0 &#x2194; 0.5.?
> At this point in development, new features should be kept to a minimum, and there should be a focus on content.

#### `0.5.5 | Other Preparations for Continuing Development`
- Published **Sep. 12, '26**
- Various minor changes and other typo fixes for this CHANGELOG.md. Most notably, the previously missing 0.5.3 version was added.
- Added profile for Princess Celene and IRL, and renamed all images to indicate their associated profiles.
- Changed the version ID GitHub link box thingy to just say the version family.
- The FocusCard() function now allows for the input of `this` to allow for more universal functionallity, but said functionallity is not implimented anywhere else yet.

#### `0.5.4 | And we're back!`
- Published **Sep. 12, '26**
- Added new search phrases to the keywords metadata.
- Created this CHANGELOG to replace the growing README's changelog.
  > The README.md file will likely change less often now, while the CHANGELOG.md file will update to add every new commit to the history. The changelong here will be in newest-oldest order rather than the opposite found in the previous README.md.
  > CHANGELOG commits will stop putting the `— lunanobles` after the commit name. Also, commit summaries will drop the `Version` in front of the version ID.
- The readme will focus more on overall project description, known issues, etc.
- Fixed(-ish) the clickable cards to show more detail.
  > I'm probably going to make this a specific button the apears on hover, instead of clicking anywhere on the box.
- Fixed a few typos and errors in previous changelog installments, but I wouldn't be surprised if I missed others.

#### `0.5.3 | Software & Game Development Addition`
- Published **Jun. 05, '26**
- Added a card, description, and image for "GameMaker Games".

#### `0.5.2a-b | Profile Content & Info I-II` &mdash; lunanobles
- Published **May 05, '26**
- Fixed profile selection button's text overflowing
- Readjusted the sizing and some style of the project cards
- Split project search section into "Featured Projects" and "All Projects" sections
- Added some information to "DeLeDuck" profile
- Added acredation for art

#### `0.5.1 | Basic Content II` &mdash; lunanobles
- Published **Apr. 04, '26**
- Fixed errors in this README.md.
- Fixed the error with mobile layout scrolling.
- Remade the styles for the project cards.
- Added another paragraph of content to the Main section.

#### `0.5.0a-b | Reorganising CSS files I-II` &mdash; lunanobles
- Published **Mar. 16, '26** & **Mar. 29, '26**
- Specified what goes in the general and special stylesheets, respectivly.
- Removed --global-fontsize.
- Hid text on nav pannel when the screen become too small (<1000px)
- Fixed issues with mobile nav-bar.
- Moved selectors in special that should be in general:
  - Anchors (a)
  - Paragraphs (main p)
  - Splitport Class (*.splitport, *.splitport-vertical, etc...)
  - Certain Light-mode Queries





<!-- MARK: 0.4b.0...0.4b.8 -->
### 0.4b.0 &#x2194; 0.4b.8

#### `0.4b.8 | Light-mode minor changes` &mdash; lunanobles
- Published **Mar. 16, '26**
- Edited colours for light-mode.
- Changed :hover colour of nav items.

#### `0.4b.7 | Navigation Pannel Design` &mdash; lunanobles
- Published **Mar. 15, '26**
- Created new style for (non-mobile) navigation pannel.
- Created a dropdown system for nav items. This is inaccesable to mobile layout.

#### `0.4b.6+ | Debug tool for ultra-small screens` &mdash; lunanobles
- Published **Mar. 15, '26**
- Added screen width display to error page for small screens.

#### `0.4b.6 | Mobile Layout II` &mdash; lunanobles
- Published **Mar. 15, '26**
- Enlarged navigation on mobile, increasing accessablity.
- Removed profiles for screen-widths below 450px.
- Lowered absolute min-width threshold to just 320px wide.
- Split mobile layout styling from the general stylesheet.

#### `0.4b.5 | Basic Content I` &mdash; lunanobles
- Published **Mar. 14, '26**
- Added the lots of text content for the 'Home' section.
- Slight adjustments to the mobile layout, nothing major.
- Removed viewPageAs in leu of profiles.
- Added profile selector (DeLeDuck, Celene, and IRL).

#### `0.4b.4 | Mobile Layout I` &mdash; lunanobles
- Published **Mar. 14, '26**
- Designed mobile layout for devices below 800px wide.
- Created error page for devices less than 500px wide.
- Adjusted nav-bar to top, only showing icons for hyperlinks.
- Adjusted profile to bottom, with only image, name, and socials.

#### `0.4b.3 | New Colour Palette` &mdash; lunanobles
- Published **Mar. 14, '26**
- New colour theme for dark-mode and light-mode.
- Fixed text escaping from splitport-vertical boxes.
- Changed viewPageAs() to view professional or view personal.
- Adjusted margin between certain elements.
- Added hyperlink to the GitHub repository for the webpage version info.

#### `0.4b.2 | README Note` &mdash; lunanobles
- Published **Mar. 13, '26**
- Added a note about how the branch was made and weirdly merged back idek.

#### `0.4b.1 | Minor Layout & Style Updates` &mdash; lunanobles
- Published **Mar. 12, '26**
- Changed colour of hr bar.
- Added extra margin around the page.
- Introduced viewPageAs() JS function.
- Actually updated the "Webpage Version" box.
- Removed hr in nav.

#### `0.4b.0 | Layout & Style Redesign Basics` &mdash; lunanobles
- Published **Mar. 11, '26**
- Added README.md Official Versions / Changelog.
- Redesigned layout of page.
  - Added "view page as" feature.
  - Navigation on left, main in centre, and profile on right.
- Redesigned style of page.
  - Colour palette changes to fit dark theme.
- &#x26A0; Project search system inoperable!





<!-- MARK: Merger -->
### Branch creation &mdash; overall-redesign &mdash; 0.4b.0

> This was a weird one, it was my first time making a branch, and I had just started learning Git. This got set to main in a weird way, I have no clue what happend ngl.





<!-- MARK: 0.3.0...0.3.3 -->
### 0.3.0 &#x2194; 0.3.3

#### `0.3.2 | Seperation of Stylesheets I` &mdash; lunanobles

- Published **Jan. 26, '26**.
- Deleted module_projects.html.
- Deleted module_projects.js.
- Seperated css stylesheets into styles_general.css (for major styling) and styles_special.css (for specific/local styling).

#### `0.3.1 | Projects Programming & Implimentation` &mdash; lunanobles

- Published **Jan. 25, '26**.
- Created nine (9) images (Discord, GitHub, RecRoom, and YouTube marks and mark variants).
- Added buttons to projects section.
- Added programming functionality to projects section.
- Added tags.
- Added tags styling.
- Added special colours.
- Added picture and source elements for icon marks.
- Slightly increased size of section subheaders.

#### `0.3.0 | Small Projects Section Update` &mdash; lunanobles

- Published **Jan. 24, '26**.
- Added README.md workload section.
- Added styling for project section.
- Added cards for project section.
- Added transparent colours.
- Added css project styles.
  - _(Append:)_
  - README.md date update.





<!-- MARK: 0.2.1...0.2.4 -->
### 0.2.1 &#x2194; 0.2.4
#### `0.2.4 | Design and Formmatting Basics` &mdash; lunanobles

- Published **Dec. 17, '25**.
- README.md remake.
- Nav-menu layout basics.
- General styles and layout.
- Created module_projects.html.
- Created module_projects.js.
- Added mobile layout media query style.
- Major css styling.
- Minor chages to styles_font.css.

#### `0.2.3 | Foundational HTML/CSS` &mdash; lunanobles

- Published **Nov. 24, '25**.
- Renamed font-styles.css to styles_font.css.
- Basic HTML.
- Basic CSS.
- Ranamed images folder to images_profile.
- Added images_public folder.
- Added RecRoom_mark.png.
- Added YouTube_mark.png.

#### `0.2.2 | Various Changes` &mdash; lunanobles

- Published **Nov. 12, '25**.
- Small changes to font-styles.css.
- Basic README.md.
- Reset styles.css.

#### `0.2.1 | Reformatting CSS` &mdash; lunanobles

- Published **Nov. 12, '25**.
- Created font-styles.css.
- Created three (3) images (personal icon, personal logo, profile).
- Renamed one (1) image.
- Edited index.html to accommodate new css updates.





<!-- MARK: Pre-0.2.X -->
### Pre-0.2.X

No _official_ versions from this time...