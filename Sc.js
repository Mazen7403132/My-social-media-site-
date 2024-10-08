// Function to handle posting
document.getElementById('postButton').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;

    if (postContent.trim() !== "") {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        
        const postText = document.createElement('p');
        postText.textContent = postContent;
        
        postContainer.appendChild(postText);
        
        // Add the new post to the feed
        document.getElementById('posts').prepend(postContainer);
        
        // Clear the textarea after posting
        document.getElementById('postContent').value = '';
    } else {
        alert("Post content cannot be empty!");
    }
});