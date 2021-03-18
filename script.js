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


document.getElementById('close').addEventListener('click', function() {
      const checkboxContent = this.parentElement;
      checkboxContent.remove();







});