// panels
(function() {
      const panels = [...document.querySelectorAll('.panel')];
      
      panels.forEach(panel => {
            panel.addEventListener('click', function(e) {
                     setTimeout(() => {
                        this.classList.remove('open')
                  }, 1000);
                  if(this.classList.contains('open')) {
                  } else {
                        this.classList.add('open')
                  }       
            });    
      })
      
})();



// checkbox
const checkboxes = [...document.querySelectorAll('.item input')];
let lastChecked;

function handleCheck(e) {
      let inBetween = false;
      if(e.shiftKey && this.checked) {
            checkboxes.forEach(checkbox => {
                  console.log(checkbox);
                  if(checkbox === this || checkbox === lastChecked) {
                        inBetween = !inBetween;
                  }
                  if(inBetween) {
                        checkbox.checked = true; 
                   }
            })
      }
      lastChecked = this;
}


      checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', handleCheck) 
      });

//      close
      const close = [...document.querySelectorAll('.close')];
      
      
      close.forEach(el => {
            el.addEventListener('click', function(e) {
                  const checkboxContent = this.parentElement;
                    checkboxContent.remove();
              });
      })

