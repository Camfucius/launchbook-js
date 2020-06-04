// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0]
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let appendElement = (target, tag, text) => {
    let element = document.createElement(tag)
    let textNode = document.createTextNode(text)
    element.appendChild(textNode)
    target.appendChild(element)
  }
  let body = document.getElementsByTagName("sidebar-left")[0];
  appendElement(sideBar, "favorites", "Least Favs");

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let statusUpdateForm = document.getElementsByClassName('ad-slot')[1];
statusUpdateForm.style.visibility = 'hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
statusUpdateForm.style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.

// Exercise 8): Find Sam's post and change its text to something incredible.
newText = document.getElementsByTagName("p")
newText[4].innerText = "Something incredible"
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let posts = document.getElementsByClassName("posts")[0]
let likeable = posts.getElementsByTagName(`li`)[0]
likeable.classList.add(`post-liked`)
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
let ericShare = posts.getElementsByTagName(`li`)[7]
ericShare.classList.add(`post-shared`)
// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share
ericShare.classList.remove('post-shared')