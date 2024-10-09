

// navbar toggeling

const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}


//to add date and time 
function updateReportDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };
    document.getElementById('report-date').innerText = now.toLocaleDateString('en-US', options);
}

// Call the function to update the report date immediately
updateReportDate();