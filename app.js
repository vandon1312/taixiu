// script.js
function playGame(prediction) {
    // Quay số xúc xắc
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;

    // Hiển thị kết quả xúc xắc
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('dice3').textContent = dice3;

    // Tính tổng
    let sum = dice1 + dice2 + dice3;

    // Kiểm tra xem dự đoán đúng không
    let result = '';
    if (sum > 10) {
        result = 'Tài';
    } else {
        result = 'Xỉu';
    }

    // Hiển thị kết quả
    let message = '';
    if (result === prediction) {
        message = `Bạn chọn ${prediction}. Kết quả là ${result}. Bạn thắng!`;
    } else {
        message = `Bạn chọn ${prediction}. Kết quả là ${result}. Bạn thua!`;
    }
    document.getElementById('message').textContent = message;
}
