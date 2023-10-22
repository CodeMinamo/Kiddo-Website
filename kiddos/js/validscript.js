$(document).ready(function(e) {    
   $("#register-stu").validate(
    {
        rules:{
                'Name':{
                required:true,
                accept:"[a-zA-Z]+"
            },
                'username':{
                required:true,
                minlength:3,
                maxlength:10
            },
            'password':{
                required:true,
                minlength:4,
                maxlength:8
            },
            
            'email':{
                required:true,
                email:true
            },
            'answer':{
                required:true,
            }      
         }
    });
    
});