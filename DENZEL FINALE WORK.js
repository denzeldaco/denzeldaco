// set the target date and time
 const targetDate = new Date('2024-03-10T12:00:00').getTime();
 let timeInterval;

 //Function to start the countdown
 function startCountdown() {
 // Update the countdown every second
 timeInterval = setInterval(updateCountdown, 1000);
 }

 // Function to update the countdown
 function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate te remaining time
    const distance = targetDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the remaining time
    document.getElementById('days').textContent = formatTime(days)
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    // If the countdown is over, stop the timer
    if (distance < 0) {
        clearInterval(timeInterval);
        document.getElementById('timer').textContent = 'Countdown expired!';
    }
 }
// Function to format time (add leading zeros)
 function formatTime(time) {
    return time < 10 ? '0' + time : time;
 }
 // Event listener for the start button
 document.getElementById('startBtn').addEventListener('click', startCountdown);

 // Initial call to update the countdown immediately
 updateCountdown();