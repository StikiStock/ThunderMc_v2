const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown')
        }
    })
});


const animated = document.querySelectorAll('.animated');
animated.forEach((el) => observer.observe(el));

function copy_text() {
    var copyText = document.getElementById("ip-text");  
    var input = document.createElement("textarea");
    input.value = copyText.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();
};
