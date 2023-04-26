const bool: boolean = true;
console.log(bool ? 1 : 3)


interface User {
    login: string
    password: string
}

interface Admin extends User {
    status: "admin" | 'moderator' | 'editor'
}

const Vor: Admin = {
    login: 'vanyavor',
    password: '********',
    status: 'moderator'