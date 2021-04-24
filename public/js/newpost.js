const newPostHandler = async (event) => {
    
    event.preventDefault();
    console.log('newposthandler triggered')
    
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();

    if (title && contents) {
        const response = await fetch(`/api/posts/newpost`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
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
