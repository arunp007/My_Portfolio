function validation(){
    var status = 1
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var message = document.getElementById('message')

    if(name.value == ""){
        document.getElementById('name').style.borderColor="red"
        document.getElementById('name_error').innerHTML="** Please Enter Your Name **"
        document.getElementById('name_error').style.color="red"
        document.getElementById('name_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('name').style.borderColor="black"
        document.getElementById('name_error').style.display="none"
        var status = 1
    }

    if(name.value == ""){
        document.getElementById('email').style.borderColor="red"
        document.getElementById('email_error').innerHTML="** Please Enter Your Email **"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('email').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
        var status = 1
    }

    if(name.value == ""){
        document.getElementById('message').style.borderColor="red"
        document.getElementById('message_error').innerHTML="** Please Enter Your Message **"
        document.getElementById('message_error').style.color="red"
        document.getElementById('message_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('message').style.borderColor="black"
        document.getElementById('message_error').style.display="none"
        var status = 1
    }

    if(status == 0){
        return false
    }

    if(status == 1){
        return true
    }
}