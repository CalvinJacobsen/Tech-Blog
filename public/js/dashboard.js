const newPost = async () => {
    const response = await fetch('/dashboard/newpost', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard/newpost');
    } else {

        alert(response);
    }
}


document.querySelector('#new-post-btn').addEventListener('click', newPost)