// รายชื่อไฟล์การ์ด (1 ถึง 30)
const cards = Array.from({ length: 30 }, (_, index) => `card${index + 1}`); // ["card1", "card2", ..., "card30"]

// ฟังก์ชันสุ่มการ์ด
function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

// แสดงการ์ดเมื่อโหลดหน้าเว็บ
window.onload = () => {
    const cardElement = document.getElementById("card");
    const randomCard = getRandomCard();
    cardElement.innerHTML = `<img src="cards/${randomCard}.png" alt="Random Card">`; // ใช้ .png
    cardElement.setAttribute("data-card", randomCard); // เก็บชื่อการ์ดใน data attribute
};

// เปลี่ยนการ์ดเมื่อกดปุ่ม "สุ่มการ์ดใหม่"
document.getElementById("new-card-button").addEventListener("click", () => {
    const cardElement = document.getElementById("card");
    const randomCard = getRandomCard();
    cardElement.innerHTML = `<img src="cards/${randomCard}.png" alt="Random Card">`; // ใช้ .png
    cardElement.setAttribute("data-card", randomCard); // อัปเดตชื่อการ์ด
});

// เมื่อกดปุ่ม "เลือกการ์ดนี้"
document.getElementById("select-card-button").addEventListener("click", () => {
    const cardElement = document.getElementById("card");
    const selectedCard = cardElement.getAttribute("data-card"); // อ่านค่า data-card
    if (selectedCard) {
        window.location.href = `result.html?card=${selectedCard}`;
    } else {
        alert("ไม่สามารถเลือกการ์ดได้ กรุณาสุ่มการ์ดใหม่!"); // แจ้งเตือนเมื่อไม่มีการ์ด
    }
});
