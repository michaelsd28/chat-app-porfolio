

class AuthenticationService {

     host = 'http://localhost:8080';

    constructor() {
        this.authenticated = false;
    }

    login(username, password) {
        alert(username + ' ' + password);
        if (username === 'user' && password === 'password') {
            sessionStorage.setItem('authenticatedUser', username);
            window.location = '/chat/'+username;
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }
}