const newPostHandler = async (event) => {
    
    event.preventDefault();
    console.log('newposthandler triggered')
    
    const newTitle = document.querySelector('#post-title').value.trim();
    const newContents = document.querySelector('#post-content').value.trim();

    if (newTitle && newContents) {
        const response = await fetch(`/api/posts/createpost`, {
            method: 'POST',
            body: JSON.stringify({ newTitle, newContents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};

document.querySelector('.newpost-form').addEventListener('submit', newPostHandler)
