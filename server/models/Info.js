
const user=[];

module.exports=class User{
    constructor(name,email){
        this.name=name
        this.email=email

    }

    save(){
        user.push(this);
    }

    static fetchAll(){
        return this.user;
    }
}

