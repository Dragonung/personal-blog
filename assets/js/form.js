//submit button is the only unique API for form.js
const submitEl = document.querySelector('#submit');

//Redirect form page to blog page 
function redirect(event) {
    const unInput = document.querySelector('#username');
    const titleInput = document.querySelector('#title');
    const blogContent = document.querySelector('#content');

    console.log("redirect");

    event.preventDefault();
    //grab existing blog posts
    const blogposts = JSON.parse(localStorage.getItem("blogposts"));
    //create blog post with username, title and content
    const blogpost ={
        username: unInput.value,
        title: titleInput.value,
        content: blogContent.value,
    }
    //add to existing blog posts
    //save blog posts
    if (blogposts){
        blogposts.push(blogpost);
        localStorage.setItem("blogposts", JSON.stringify(blogposts));
    }
    else{
        localStorage.setItem("blogposts", JSON.stringify([blogpost]));
    }
    location.href = "./blog.html"
}
//Event listener for submit button
submitEl.addEventListener('click', redirect);