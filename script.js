const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        const value = input.value;
        if (/^\d$/.test(value)) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        } else {
          input.value = ''; // only allow digits
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            if (index > 0) {
              inputs[index - 1].focus();
              inputs[index - 1].value = '';
            }
          } else {
            input.value = '';
          }
          e.preventDefault();
        } else if (!/^\d$/.test(e.key) && e.key !== 'Tab' && e.key.length === 1) {
          e.preventDefault(); // block non-digit input
        }
      });
    });

    // Autofocus the first input on load
    window.addEventListener('load', () => {
      inputs[0].focus();
    });
