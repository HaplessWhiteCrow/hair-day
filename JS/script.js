function    toggleMenu(){
    var navList=document.getElementById("nav-list");
    navList.classList.toggle("active");
}


function initializeBookingForm() {
    const today = new Date().toISOString().split('T')[0];
    const bookingDateInput = document.getElementById('booking_date');
    bookingDateInput.setAttribute('min', today);
    document.querySelector('form').addEventListener('submit', function(e) {
        const selectedDate = new Date(bookingDateInput.value);
        
        if (selectedDate.getDay() === 0) {
            alert('Sorry, we are closed on Sundays. Please choose another day.');
            e.preventDefault(); 
        }
    });
}
initializeBookingForm();


