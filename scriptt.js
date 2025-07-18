let string = "";
let memory = 0; // for M+ and M-
let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } 
        
        else if (value == 'C') {
            string = "";
            input.value = string;
        } 

        else if (value == '%') {
            try {
                string = (parseFloat(string) / 100).toString();
                input.value = string;
            } catch {
                input.value = "Error";
            }
        }

        else if (value == 'M+') {
            memory += parseFloat(input.value || "0");
            alert("Memory: " + memory);
        }

        else if (value == 'M-') {
            memory -= parseFloat(input.value || "0");
            alert("Memory: " + memory);
        }

        else {
            string += value;
            input.value = string;
        }
    });
});
