function showSuccess(event) {
    // Form එකක් ඇතුලේ button එක තිබේ නම් page එක reload වීම වැළැක්වීමට
    event.preventDefault(); 
    
    // Popup එක display කරවීම (Flexbox මඟින් මැදට ගනී)
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    // Popup එක නැවත හැංගීම
    document.getElementById("successPopup").style.display = "none";
    
    
    
}