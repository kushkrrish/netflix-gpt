const validation=(email,password)=>{
    const isPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{6,}$/.test(password);
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
    if(!isPassword){
        return "password is not valid";
    }
    if(!isEmail){
        return "Email is not valid";
    }
    return null;
}

export default validation;