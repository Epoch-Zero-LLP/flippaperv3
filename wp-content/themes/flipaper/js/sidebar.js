function openSidebar() {
    // Add sidebar to a variable and get class list.
    var toggleButton = document.getElementById("sidebar").classList;

    if ( toggleButton.contains("showSidebar") ) {
        // If class name is added delete class name
        toggleButton.remove("showSidebar");
    } else {
        // If class does not exist add class name on click
        toggleButton.add("showSidebar");
    }
}