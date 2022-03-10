function toggleLangDropdown() {
    var langDropdown = document.getElementById("lang-switcher").classList;

    if ( langDropdown.contains("lang__dropdown--active") ) {
        // If class name is added delete class name
        langDropdown.remove("lang__dropdown--active");
    } else {
        // If class does not exist add class name on click
        langDropdown.add("lang__dropdown--active");
    }
}