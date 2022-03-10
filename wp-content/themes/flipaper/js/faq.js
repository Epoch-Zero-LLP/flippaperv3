var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Add class active to header of FAQ
        var panel = this.nextElementSibling;
        var toggleFaq = panel.classList;

        // Check if class open is added else remove
        if (toggleFaq.contains("open")) {
            toggleFaq.remove("open");
        } else {
            toggleFaq.add("open");
        }
    });
}