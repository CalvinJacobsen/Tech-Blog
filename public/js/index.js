const homepage = async () => {
    const response = await fetch('/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        
        alert(response);
    }
}

const dashboard = async () => {
    const response = await fetch('/dashboard', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

const login = async () => {
    const response = await fetch('/login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/login');
    } else {
        
        alert(response);
    }
}

document.querySelector('#homepage').addEventListener('click', homepage)
document.querySelector('#dashboard').addEventListener('click', dashboard)
document.querySelector('#login').addEventListener('click', login)