const dashboard = async () => {
    const response = await fetch('/api/users/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

const homepage = async () => {
    const response = await fetch('/api/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        
        alert(response);
    }
}


document.querySelector('#homepage').addEventListener('click', homepage)

document.querySelector('#dashboard').addEventListener('click', dashboard)