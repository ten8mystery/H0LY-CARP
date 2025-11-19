function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}

function startGaming() {
    alert('Let the games begin!');
    // You can add more functionality here, like redirecting to a game page.
}

// Default tab displayed
switchTab('home');
