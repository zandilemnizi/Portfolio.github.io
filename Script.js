document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const target = this.getAttribute('href');

      // Check if the target starts with "#" (internal navigation)
      if (target.startsWith("#")) {
          e.preventDefault();
          document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
  });
});


function toggleText() {
    var hiddenText = document.querySelector('.hidden-text');
    var btn = document.querySelector('.read-more-btn');

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        btn.textContent = "Read less";
    } else {
        hiddenText.style.display = "none";
        btn.textContent = "Read more";
    }
}
