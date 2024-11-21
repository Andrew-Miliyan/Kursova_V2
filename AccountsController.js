import AccountsService from './AccountsService.js'

class AccountsController{
    async login(req,res){
        try {
            res.render('login',{title:"Вхід"})

        }catch(e){
            res.json(e.message)
        }
    }
    async loginValidate(req,res){
        try {
            const isValidated=await AccountsService.validate(req.body)
            if(isValidated){
                res.redirect('/api/collections')
            }else{
                res.render('login',{title:"User not found"})
            }
        }catch(e){
            res.json(e.message)
        }
    }
    async register(req,res){
        try {
            res.render('register',{title:"Реєстрація"})

        }catch(e){
            res.json(e.message)
        }
    }
    async createAccount(req,res){
        try {
            const account = await AccountsService.createAccount(req.body.login,req.body.password)
            if(account){
                res.render('login',{title:"Користувача додано успішно"})
            }else{
                res.render('register',{title:"Невдалося створити користувача"})
            }
        }catch(e){
            res.json(e.message)
        }
    }
}

export default new AccountsController()