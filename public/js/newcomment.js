const newCommentHandler = async (event) => {
    
    event.preventDefault();
    console.log('newCommentHandler triggered!')
    
    const commentContents = document.querySelector('#comment-post-content').value.trim();
    const postId = $(".post-and-comment-form").attr('id');
    
    console.log(postId);
    if (commentContents) {
        const response = await fetch(`/api/posts/${postId}/newcomment`, {
            method: 'POST',
            body: JSON.stringify({ commentContents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new comment');
        }
    }
};

document.querySelector('.post-and-comment-form').addEventListener('submit', newCommentHandler)