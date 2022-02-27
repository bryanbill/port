
const changeTheme = () => {
    document.getElementById("projects").classList.toggle("projects");
    document.documentElement.classList.toggle('dark');

    // Switch the theme icon
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon.classList.contains("fa-sun")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}


