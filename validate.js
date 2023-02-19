function validateForm(){
    var n= document.forms["submit-form"]["name"].value;
    var e= document.forms["submit-form"]["email"].value;
    var s= document.forms["submit-form"]["subject"].value;
    var m= document.forms["submit-form"]["message"].value;

        function validateName(name){
            var alphs=/^[A-Za-z]+$/;
            console.log(name.match(alphs))
            return name.match(alphs);
        }

        function validateEmail(email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log(re.test(email));
            return re.test(email);
        }

    
        if(validateName(n)==null){
            document.getElementById("nameErr").innerHTML="Please input Alphabets only";
        }else{
            document.getElementById("nameErr").innerHTML="";
        }

        if(!validateEmail(e)){
            document.getElementById("emailErr").innerHTML="Enter a valid email with '@' and '.'";          
        }else{
            document.getElementById("emailErr").innerHTML=""; 
        }

        if(s.length<1 || s.length>20){
            document.getElementById("sbjErr").innerHTML="Subject should be between 1 to 20 characters";            
        }else{
            document.getElementById("sbjErr").innerHTML="";            
        }

        if(m.length<1 || m.length>1000){
            document.getElementById("msgErr").innerHTML="Message should be between 1 to 1000 characters";            
        }else{
            document.getElementById("msgErr").innerHTML="";            
        }

        if(validateName(n)==null || !validateEmail(e) || s.length<1 || s.length>20 || m.length<1 || m.length>1000){
            return false;
        }else{
            return true;
        }   

}
