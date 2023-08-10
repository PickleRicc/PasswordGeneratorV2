const generateBtn = document.getElementById('generate-btn')
const sliderValue = document.getElementById('rangeValue')

function rangeSlider() {
    const slider = document.getElementById("myRange");
    const rangeValue = document.getElementById("rangeValue");
    
    rangeValue.textContent = slider.value;
  }

  


generateBtn.addEventListener('click', function(){
    const sliderNum = document.getElementById('myRange').value
    const passwordOutput = document.getElementById('password')
    const passwordLength = parseInt(sliderNum)

    const characters = getSelectedCharset()
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        password += characters.substring(randomNum, randomNum + 1)
    }

    passwordOutput.textContent = password

    passwordStrength()
}) 

// Function to generate random text for password
function getSelectedCharset() {
    const inlcudeLowercase = document.getElementById('lowercase').checked
    const inlcudeUppercase = document.getElementById('uppercase').checked
    const inlcudeNumbers = document.getElementById('numbers').checked
    const inlcudeSymbols = document.getElementById('symbols').checked
    let charset = ""
    

    if (inlcudeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz"
    }

    if (inlcudeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (inlcudeNumbers) {
        charset += "0123456789"
    }

    if (inlcudeSymbols) {  
        charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    }

    return charset
}

function passwordStrength() {
    const password = document.getElementById('password').textContent; // Get the generated password
    const passwordLength = password.length;
    const strengthLabel = document.getElementById('strength-label');
    const strengthbar1 = document.getElementById('strength-bar-1');
    const strengthbar2 = document.getElementById('strength-bar-2');
    const strengthbar3 = document.getElementById('strength-bar-3');
    const strengthbar4 = document.getElementById('strength-bar-4');
    const inlcudeLowercase = document.getElementById('lowercase').checked
    const inlcudeUppercase = document.getElementById('uppercase').checked
    const inlcudeNumbers = document.getElementById('numbers').checked
    const inlcudeSymbols = document.getElementById('symbols').checked

    // Reset styles to default
    strengthLabel.textContent = '';
    strengthbar1.style.backgroundColor = '';
    strengthbar2.style.backgroundColor = '';
    strengthbar3.style.backgroundColor = '';
    strengthbar4.style.backgroundColor = '';

    if (passwordLength <= 8 && inlcudeLowercase == true && inlcudeUppercase == true && inlcudeNumbers == false && inlcudeSymbols == false) {  
        strengthLabel.textContent = "Too Weak"; 
        strengthbar1.style.backgroundColor = "#F64A4A";
    } else if(passwordLength <= 8 && inlcudeLowercase == true && inlcudeUppercase == false && inlcudeNumbers == false && inlcudeSymbols == false) {
        strengthLabel.textContent = "Too Weak";
        strengthbar1.style.backgroundColor = "#F64A4A";
    }else if(passwordLength <= 8 && inlcudeLowercase == false && inlcudeUppercase == true && inlcudeNumbers == false && inlcudeSymbols == false) {
            strengthLabel.textContent = "Too Weak";
            strengthbar1.style.backgroundColor = "#F64A4A";
    }else if (passwordLength <=12 && inlcudeLowercase == true || inlcudeUppercase == true && inlcudeNumbers == false && inlcudeSymbols == false) {
        strengthLabel.textContent = "WEAK";
        strengthbar1.style.backgroundColor = "#FB7C58";
        strengthbar2.style.backgroundColor = "#FB7C58";
    } else if (passwordLength <= 30 && inlcudeLowercase == true && inlcudeUppercase == true && inlcudeNumbers == true && inlcudeSymbols == false) {
        strengthLabel.textContent = "MEDIUM";
        strengthbar1.style.backgroundColor = "#FEEB7F";
        strengthbar2.style.backgroundColor = "#FEEB74";
        strengthbar3.style.backgroundColor = "#FEEB74";
    } else if (passwordLength <=30 && inlcudeLowercase == true && inlcudeUppercase == true && inlcudeNumbers == true && inlcudeSymbols == true) {
        strengthLabel.textContent = "STRONG";
        strengthbar1.style.backgroundColor = "#A3F77B";
        strengthbar2.style.backgroundColor = "#A3F77B";
        strengthbar3.style.backgroundColor = "#A3F77B";
        strengthbar4.style.backgroundColor = "#A3F77B";
    } else {
        alert("Please select at least one option and choose a password length of at least 5 characters.");
    }
}

document.getElementById("copy-btn").addEventListener("click", function() {
    const password = document.getElementById("password").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
  });
  