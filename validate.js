function validateName(){
    var alphs= /^[A-Za-z]+$/;
    var n= document.forms["submit-form"]["name"].value;
    if(n==""){
        document.getElementById("nameErr").innerHTML="This field is required";
        return false;
    }
    else if(alphs.test(n)==false){
        document.getElementById("nameErr").innerHTML="Please input alphabets";
        return false;
    }else{
        document.getElementById("nameErr").innerHTML="";
        return true;
    }
    
}

function validateEmail() {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var e= document.forms["submit-form"]["email"].value;
    console.log(re.test(e));
    if(e==""){
        document.getElementById("emailErr").innerHTML="This field is required";  
        return false;        
    }
    else if(re.test(e)==false){
        document.getElementById("emailErr").innerHTML="Enter a valid email with '@' and '.'";   
        return false;        
    }else{
        document.getElementById("emailErr").innerHTML="";
        return true; 
    }
}

function validateSubject(){
    var sub= document.forms["submit-form"]["subject"].value;
    if(sub.length<1){
        document.getElementById("sbjErr").innerHTML="This field is required"; 
        return false;           
    }else if(sub.length>20){
        document.getElementById("sbjErr").innerHTML="Maximum 20 characters"; 
        return false;  
    }
    else{
        document.getElementById("sbjErr").innerHTML=""; 
        return true;           
    }

}
function validateMessage(){
    var m= document.forms["submit-form"]["message"].value;
    if(m.length<1){
        document.getElementById("msgErr").innerHTML="This field is required";
        return false;
    }else if(m.length>1000){
        document.getElementById("msgErr").innerHTML="Maximum 1000 characters";
        return false;
    }else{
        document.getElementById("msgErr").innerHTML="";
        return true;
    }
}          

function validateForm(){

    if(validateName()==false || validateEmail()==false || validateSubject()==false || validateMessage()==false){
        return false;
    }else{
        return true;
    }   
}


