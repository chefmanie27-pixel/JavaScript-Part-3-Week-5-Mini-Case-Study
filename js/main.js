// ==========================================
// 1. SETUP LOG IN DATA
// ==========================================

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "password123";

let sidebarIsOpen = false;

// ==========================================
// 2. LOG IN FUNCTION
// ==========================================
function validateLogin() {
    
    const loginForm = document.getElementById("login-form");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
        });
    }

    const usernameInput = document.getElementById("uname");
    const passwordInput = document.getElementById("pwd");
    
    const typedUsername = usernameInput.value;
    const typedPassword = passwordInput.value;

    const errorModal = document.querySelector(".modal");

    if (typedUsername === CORRECT_USERNAME && typedPassword === CORRECT_PASSWORD) {
    
        window.location.href = "index.html";
    } else {
        
        if (errorModal) {
            errorModal.style.display = "block";
        }
    
        passwordInput.value = "";
    }
}

// ==========================================
// 3. CLOSE ERROR BOX FUNCTION
// ==========================================
function dismissModal() {
    const errorModal = document.querySelector(".modal");
    
    if (errorModal) {
        errorModal.style.display = "none";
    }
}

// ==========================================
// 4. SIDEBAR MENU FUNCTION
// ==========================================
function toggleNav() {
  
    const sidebar = document.querySelector(".nav-sidebar");
    const toggleButton = document.querySelector(".btn-toggle-nav");
    const allLinks = document.querySelectorAll(".nav-sidebar a, .nav-sidebar span");

    sidebar.style.transition = "width 0.3s";
    toggleButton.style.transition = "transform 0.3s";

    if (sidebarIsOpen === false) {
        sidebar.style.width = "272px";          
        toggleButton.style.transform = "rotate(90deg)"; 

        allLinks.forEach(function(link) {
            link.style.opacity = "1";
            link.style.visibility = "visible";
        });

        sidebarIsOpen = true; 
    } 
  
    else {
        sidebar.style.width = "50px";           
        toggleButton.style.transform = "rotate(0deg)";  
        
        
        allLinks.forEach(function(link) {
            link.style.opacity = "0";
            link.style.visibility = "hidden";
        });

        sidebarIsOpen = false; 
    }
}