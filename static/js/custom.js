const currentPath = location.pathname

if (currentPath !== "/") {
    document.getElementById('currentPageName').innerHTML = currentPath;
} else {
    document.getElementById('currentPageName').innerHTML = "/home";
}