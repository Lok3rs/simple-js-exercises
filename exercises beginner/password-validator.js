function validator(username, password) {
    let res;
    password.toLowerCase().includes(username.toLowerCase()) || password.includes(" ") || password.length < 8 ?
        res = false : res = true;
    return res;

}

console.log(validator("John", "xoxoxojohnxo"))