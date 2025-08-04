// // function checkBirthday() {
// //     const birthdayStr = "2025-08-03T00:00:00"; // <-- Change to your birthday
// //     const birthday = new Date(birthdayStr);
// //     const today = new Date();

// //     if (
// //         today.getDate() === birthday.getDate() &&
// //         today.getMonth() === birthday.getMonth()
// //     ) {
// //         window.location.href = "index.html"; // Redirect if it's birthday
// //         return;
// //     }

// //     // Else show countdown
// //     startCountdown(birthday);
// //     showGoogleForm();
// // }

// // function startCountdown(targetDate) {
// //     const message = document.getElementById("message");

// //     const interval = setInterval(() => {
// //         const now = new Date().getTime();
// //         const distance = targetDate.getTime() - now;

// //         if (distance <= 0) {
// //             clearInterval(interval);
// //             message.innerText = "🎉 It's your birthday! Refresh to celebrate!";
// //             return;
// //         }

// //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //         const hours = Math.floor(
// //             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// //         );
// //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //         message.innerText = `⏳ Your birthday is in ${days}d ${hours}h ${minutes}m ${seconds}s`;
// //     }, 1000);
// // }
// function checkBirthday() {
//             const birthdayStr = "2025-08-03T00:00:00"; // 🎂 Set your birthday
//             const birthday = new Date(birthdayStr);
//             const today = new Date();

//             if (
//                 today.getDate() === birthday.getDate() &&
//                 today.getMonth() === birthday.getMonth()
//             ) {
//                 window.location.href = "index.html";
//                 return;
//             }

//             startCountdown(birthday);
//         }

//         function startCountdown(targetDate) {
//             const message = document.getElementById("message");
//             const formLink = document.getElementById("form-link");
//             formLink.style.display = "block";

//             const interval = setInterval(() => {
//                 const now = new Date().getTime();
//                 const distance = targetDate.getTime() - now;

//                 if (distance <= 0) {
//                     clearInterval(interval);
//                     message.innerText = "🎉 It's your birthday! Refresh to celebrate!";
//                     return;
//                 }

//                 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//                 const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//                 message.innerText = `⏳ Your birthday is in ${days}d ${hours}h ${minutes}m ${seconds}s`;
//             }, 1000);
//         }

// function showGoogleForm() {
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//         <p>🎁 While you're here, fill this secret form:</p>
//         <a href="https://forms.gle/YOUR_FORM_LINK" target="_blank" style="font-weight: bold; color: #007bff;">👉 Click here to fill the birthday form</a>
//     `;
// }
