# Problem Domain

The Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

## what would you like to have as features?

### required features

- i would go there, type in the kitten's name, age
- create a narrative of who this kitten is - personality, likes, etc.
- breed
- good with kids/dogs/other cats
- picture(s) - one at minimum, more is nice

### nice to have

- what their story is
- notes from the foster human
- health history
- videos
- animated gif
- social media links - linkedIn profile
- blink tag

 ## user scenario

 Jose is a volunteer for Seattle Kitten Rescue. He has some level of comfort with a browser and copying/pasting/saving/uploading/etc. He navigates to the enter a kitten form and enters the above info in a form box. When he clicks the "submit" button, the kitten's profile is displayed on the page.

### out of scope

   removing kittens from the site
   videos, health history, foster notes, social media, blink tag

## user stories

1. As a volunteer for Seattle Kitten Rescue, I want to have kitten bios show up on the page without having to write html myself, so that my workload is lessened. I will know this is done when I can hard-code a kitten bio in JavaScript and that kitten's bio is rendered on the page.

2. As a volunteer, I want to enter the kitten's data into a form, and have that kitten's specific profile automatically show up on the page, so that my workload is lessened. I will know this is done when I can enter kitten data into a form, and that kitten's bio shows up on the page

3. As the web services manager for Seattle Kitten Rescue, I want the code for the bio generation to be written in plain-vanilla JavaScript, so that it can be easily maintained. I will know this is done when I can look at a JavaScript file for the site, and see it written in ES5, with no use of libraries or frameworks.

# 🧩 Steps to Add an Object's Content to the Page

------------------------------------------------------------------------

## 🟢 1️⃣ Create the Object

**Methods / Concepts Used:** - Object literal `{ }` - Properties
(key--value pairs) - Method inside object - Function call

------------------------------------------------------------------------

## 🟢 2️⃣ Get the Parent Element from the DOM

**Purpose:** Decide where the new content will go.

**Method Used:** - `document.getElementById()`

------------------------------------------------------------------------

## 🟢 3️⃣ Create a Container Element

**Purpose:** Create a wrapper for the content.

**Method Used:** - `document.createElement()`

------------------------------------------------------------------------

## 🟢 4️⃣ Attach the Container to the Page

**Purpose:** Make the element visible in the DOM.

**Method Used:** - `appendChild()`

------------------------------------------------------------------------

## 🟢 5️⃣ Create and Add Text Elements

**Purpose:** Display object properties.

**Methods Used:** - `document.createElement()` - `.textContent` -
`appendChild()`

------------------------------------------------------------------------

## 🟢 6️⃣ Loop Through an Array Property

**Purpose:** Display multiple related values.

**Concepts / Methods Used:** - `for` loop - Array property access -
`document.createElement()` - `appendChild()`

------------------------------------------------------------------------

## 🟢 7️⃣ Create and Configure an Image

**Purpose:** Display dynamic image content.

**Methods Used:** - `document.createElement()` - `setAttribute()` -
`appendChild()`

------------------------------------------------------------------------

# 🎯 Big Picture Pattern

1.  Create object\
2.  Get parent\
3.  Create element\
4.  Attach element\
5.  Add content\
6.  Repeat as needed
