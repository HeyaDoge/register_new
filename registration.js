import Login from "./login"

class Register {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submiBtn
    $gotoSigninLink


    constructure() {
        this.$emailInputEmail = document.createElement("input");
        this.$emailInputEmail.type = "email";
        this.$emailInputEmail.placeholder = "Enter your email";

        this.$nameInputTxt = document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name?"

        this.$submiBtn = document.createElement("button");
        this.$submiBtn.type = "submit";
        this.$submiBtn.placeholder = "Register";
        this.$submiBtn.addEventListener = ""

        this.$passInputPass = document.createElement("input");
        this.$passInputPass.type = "password";
        this.$passInputPass.placeholder = "enter your password";

        this.$confirmPassInputPass = document.createElement("input");
        this.$confirmPassInputPass.type = "password"
        this.$confirmPassInputPass.placeholder = "confirm your password"

        this.$gotoSigninLink = document.createElement("a")
        this.$gotoSigninLink.innerHTML = "you already have an account? Signin now";
        this.$gotoSigninLink.addEventListener = ("click", this.gotosignin)

        this.$containerDiv = document.createElement("div")
        this.$containerDiv.classList.add("center", "app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTml = "Create your account";

        this.$signupForm = document.createElement("form");


    
    }

    initRender = (container) => {

        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$submiBtn);


        this.$containerDiv.appendChild(this.$containerDiv);
        this.$containerDiv.appendChild(this.$signupForm);
        this.$containerDiv.appendChild(this.$gotoSigninLink);

        container.appendChild(this.$containerDiv);

    }

    setError = (content) => {
        this.
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const email = this.$emailInputEmail.value;
        const pass = this.$passInputPass.value;
        const confirmPass = this.$confirmPassInputPass.value;
        const userName = this.$nameInputTxt.value

        if(email =="") {
        alert("Email cannot be empty");
        return;
        }
        if(password =="") {
           alert("password can not be empty");
        }
        
        if(username =="") {
            alert("username cannot be empty");
            return;
        }
        
        if(password.length < 6) {
            alert("password must have over 6 character");
            return;
        }
        if(confirmPassword =="") {
            alert("confirmPassword cannot be empty");
            return;
        }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(())
    gotosignin = () => {
const login = new Login()
app.changeActiveScreen(signup);
    }

}