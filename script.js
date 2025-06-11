// script.js

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const reportForm = document.getElementById("reportForm");
  const reportResult = document.getElementById("reportResult");

  // Load last result from localStorage
  const savedReport = localStorage.getItem("astroReport");
  if (savedReport) {
    reportResult.innerHTML = savedReport;
  }

  reportForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = reportForm.elements[0].value;
    const birthDate = new Date(reportForm.elements[1].value);

    if (!name || !birthDate) {
      reportResult.textContent = "Please fill out both fields.";
      return;
    }

    const zodiac = getZodiacSign(birthDate);

    const message = `
      <p>Hello <strong>${name}</strong>,</p>
      <p>Your Zodiac Sign is: <strong>${zodiac}</strong></p>
      <p>🔮 The stars favor you today. Embrace new beginnings and wear something blue for good luck!</p>
    `;

    reportResult.innerHTML = message;
    localStorage.setItem("astroReport", message);

    // Optional Node.js backend call
    // await fetch("/api/report", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, birthDate: birthDate.toISOString(), zodiac })
    // });
  });

  function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  }
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    const dropdown = e.target.parentElement;
    if (window.innerWidth < 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('active');
      });
    }
  });
});
