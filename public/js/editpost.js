const editPostHandler = async (event) => {

    event.preventDefault();
    //console.log('editposthandler triggered')

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
            alert('Post successfully editted!')
        } else {
            alert('Unable to edit post!');
        }
    }
};

const deletePostHandler = async (event) => {

    event.preventDefault();
    //console.log('deletePostHandler triggered')
    const postId = $(".editpost-form").attr('id');

    const response = await fetch(`/api/posts/${postId}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        alert('The post was successfully deleted! Let\'s hope that wasn\'t something important!')
    } else {
        alert('Unable to delete your post!');
    }

}

document.querySelector('.delete-post-btn').addEventListener("click", deletePostHandler)
document.querySelector('.editpost-form').addEventListener('submit', editPostHandler)
