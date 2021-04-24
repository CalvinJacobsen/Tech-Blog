const editPostHandler = async (event) => {
    
    event.preventDefault();
    console.log('editposthandler triggered')
    
    const title = document.querySelector('#new-post-title').value.trim();
    const contents = document.querySelector('#new-post-content').value.trim();
    
    if (title && contents) {
        const response = await fetch(`/api/posts/editpost`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
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