let string = "";
let input = document.querySelector("#display");
let buttons = document.querySelectorAll(".button")
     Array.from(buttons).forEach((button) => {
      button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
               input.value = string;
                
            } catch (error) {
                console.log("syntax error")
                input.value="Syntax Error"
            }
        } 
        else if (e.target.innerHTML == "AC") {
          string = "";
          input.value = string;
        } 
        else if(e.target.innerHTML == "DEL"){
            display.value=display.value.toString().slice(0,-1);
            console.log(display.value);
            string=display.value;
            input.value=string;
    
        }
        else {
          console.log(e.target);
          string += e.target.innerHTML;
          input.value = string;
        }
      });
    });

