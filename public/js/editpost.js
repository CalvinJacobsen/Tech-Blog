

const editPostHandler = async (event) => {
    
    event.preventDefault();
    console.log('editposthandler triggered')
    
    const title = document.querySelector('#editted-post-title').value.trim();
    const content = document.querySelector('#editted-post-content').value.trim();
    const postId = $(".editpost-form").attr('id');
    
    if (title && content) {
        const response = await fetch(`/api/posts/editpost/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            alert('post successfully editted!')
        } else {
            alert('was unable to edit post');
        }
    }
};

document.querySelector('.editpost-form').addEventListener('submit', editPostHandler)