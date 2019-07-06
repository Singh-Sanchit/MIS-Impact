window.onload = function(){
    if(document.querySelector(".authentication-log-in")){
        document.querySelector(".authentication-log-in").onclick = function(){
            document.querySelector(".authentication-signIn").classList.add("authentication-active-dx");
            document.querySelector(".authentication-signUp").classList.add("authentication-inactive-sx");
            document.querySelector(".authentication-signUp").classList.remove("authentication-active-sx");
            document.querySelector(".authentication-signIn").classList.remove("authentication-inactive-dx");
        }
    }
    
    if(document.querySelector(".authentication-back")){
        document.querySelector(".authentication-back").onclick = function(){
            document.querySelector(".authentication-signUp").classList.add("authentication-active-sx");
            document.querySelector(".authentication-signIn").classList.add("authentication-inactive-dx");
            document.querySelector(".authentication-signIn").classList.remove("authentication-active-dx");
            document.querySelector(".authentication-signUp").classList.remove("authentication-inactive-sx");
        }
    }   
}

