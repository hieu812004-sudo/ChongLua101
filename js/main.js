
// ======================================
// 1. MENU ĐIỀU HƯỚNG
// ======================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


// ======================================
// 2. DỮ LIỆU 5 TÌNH HUỐNG LỪA ĐẢO
// ======================================

const scenarios = [

    {
        sender: "Cán bộ công an (giả mạo)",
        message: "Chúng tôi phát hiện tài khoản của bạn liên quan đến một vụ án. Hãy cung cấp mã OTP và chuyển tiền vào tài khoản tạm giữ để xác minh.",

        options: [
            {
                text: "Cung cấp OTP và làm theo yêu cầu.",
                score: 0,
                type: "wrong"
            },
            {
                text: "Bình tĩnh, không cung cấp OTP, không chuyển tiền và chủ động xác minh qua cơ quan công an chính thức.",
                score: 20,
                type: "correct"
            },
            {
                text: "Hỏi người này thêm thông tin rồi mới quyết định.",
                score: 5,
                type: "partial"
            }
        ],

        explanation: "Cơ quan công an không yêu cầu người dân cung cấp OTP hoặc chuyển tiền vào tài khoản để phục vụ điều tra. Hãy dừng liên lạc và xác minh qua kênh chính thức."
    },

    {
        sender: "Nhà tuyển dụng trực tuyến",
        message: "Tuyển cộng tác viên làm việc tại nhà, thu nhập 500.000 - 1.000.000 đồng/ngày. Chỉ cần nạp trước 200.000 đồng để kích hoạt nhiệm vụ.",

        options: [
            {
                text: "Chuyển tiền để kích hoạt công việc.",
                score: 0,
                type: "wrong"
            },
            {
                text: "Kiểm tra thông tin công ty, không nộp tiền để nhận việc và từ chối nếu có dấu hiệu bất thường.",
                score: 20,
                type: "correct"
            },
            {
                text: "Thử chuyển một khoản nhỏ để kiểm tra.",
                score: 5,
                type: "partial"
            }
        ],

        explanation: "Một dấu hiệu phổ biến của lừa đảo việc làm là yêu cầu nộp tiền trước để nhận nhiệm vụ hoặc mở khóa hoa hồng. Không chuyển tiền khi chưa xác minh được đơn vị tuyển dụng."
    },

    {
        sender: "Thông báo trúng thưởng",
        message: "Chúc mừng! Bạn đã trúng điện thoại trị giá 20 triệu đồng. Nhấn vào đường link bên dưới và nhập thông tin cá nhân để nhận quà.",

        options: [
            {
                text: "Nhấn vào đường link và nhập thông tin.",
                score: 0,
                type: "wrong"
            },
            {
                text: "Không truy cập đường link lạ, không cung cấp thông tin và kiểm tra chương trình qua kênh chính thức.",
                score: 20,
                type: "correct"
            },
            {
                text: "Chuyển tiếp đường link cho bạn bè hỏi xem có thật không.",
                score: 5,
                type: "partial"
            }
        ],

        explanation: "Tin nhắn trúng thưởng bất ngờ có thể được sử dụng để dụ người dùng truy cập website giả mạo và đánh cắp dữ liệu. Không chia sẻ hoặc phát tán đường link đáng ngờ."
    },

    {
        sender: "Ngân hàng (giả mạo)",
        message: "Tài khoản ngân hàng của bạn sẽ bị khóa trong 24 giờ. Vui lòng đăng nhập vào đường link này để xác minh thông tin ngay lập tức.",

        options: [
            {
                text: "Đăng nhập theo đường link trong tin nhắn.",
                score: 0,
                type: "wrong"
            },
            {
                text: "Không nhấn vào liên kết, mở ứng dụng ngân hàng chính thức hoặc gọi số tổng đài trên website chính thức để kiểm tra.",
                score: 20,
                type: "correct"
            },
            {
                text: "Trả lời tin nhắn để hỏi thêm thông tin.",
                score: 5,
                type: "partial"
            }
        ],

        explanation: "Kẻ gian có thể tạo website giả mạo giống ngân hàng để lấy tên đăng nhập, mật khẩu và mã OTP. Hãy tự mở ứng dụng chính thức hoặc liên hệ ngân hàng bằng số điện thoại đáng tin cậy."
    },

    {
        sender: "Bạn bè",
        message: "Mình đang cần tiền gấp, chuyển giúp mình 2 triệu đồng vào tài khoản này nhé. Điện thoại mình đang có vấn đề nên chưa gọi được.",

        options: [
            {
                text: "Chuyển tiền ngay vì đây là bạn thân.",
                score: 0,
                type: "wrong"
            },
            {
                text: "Gọi trực tiếp vào số điện thoại quen thuộc hoặc xác minh bằng cách khác trước khi chuyển tiền.",
                score: 20,
                type: "correct"
            },
            {
                text: "Nhắn tin hỏi thêm lý do rồi chuyển nếu thấy hợp lý.",
                score: 5,
                type: "partial"
            }
        ],

        explanation: "Kẻ gian có thể chiếm đoạt tài khoản mạng xã hội để giả danh người quen vay tiền. Hãy xác minh danh tính bằng cuộc gọi trực tiếp trước khi thực hiện giao dịch."
    }

];



// ======================================
// 3. KHAI BÁO BIẾN GAME
// ======================================

let currentScenario = 0;
let totalScore = 0;
let answered = false;
let gameFinished = false;

// Thống kê câu trả lời
let correctCount = 0;
let partialCount = 0;
let wrongCount = 0;

// Lấy các phần tử HTML
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("score");
const progressFill = document.getElementById("progressFill");

const sender = document.getElementById("sender");
const message = document.getElementById("message");

const answerOptions = document.getElementById("answerOptions");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const nextButton = document.getElementById("nextButton");

const correctDisplay = document.getElementById("correctCount");
const partialDisplay = document.getElementById("partialCount");
const wrongDisplay = document.getElementById("wrongCount");

// Các phần tử chứng nhận
const certificatePanel =
    document.getElementById("certificatePanel");

const playerName =
    document.getElementById("playerName");

const createCertificate =
    document.getElementById("createCertificate");

const certificatePreview =
    document.getElementById("certificatePreview");

const certificateCanvas =
    document.getElementById("certificateCanvas");

const downloadCertificate =
    document.getElementById("downloadCertificate");



// ======================================
// 4. CẬP NHẬT ĐIỂM VÀ THỐNG KÊ
// ======================================

function updateStats() {

    scoreDisplay.textContent = `Điểm: ${totalScore}`;

    correctDisplay.textContent = `Đúng: ${correctCount}`;

    partialDisplay.textContent =
        `Chưa an toàn: ${partialCount}`;

    wrongDisplay.textContent = `Nguy hiểm: ${wrongCount}`;

}


// ======================================
// 5. HIỂN THỊ TÌNH HUỐNG
// ======================================

function showScenario() {

    const scenario = scenarios[currentScenario];

    answered = false;

    questionNumber.textContent =
        `Tình huống ${currentScenario + 1}/${scenarios.length}`;

    progressFill.style.width =
        `${((currentScenario + 1) / scenarios.length) * 100}%`;

    sender.textContent = scenario.sender;

    message.textContent = scenario.message;

    answerOptions.innerHTML = "";

    answerOptions.hidden = false;

    feedback.hidden = true;

    certificatePanel.hidden = true;

    nextButton.textContent = "Tình huống tiếp theo →";

    // Tạo các phương án lựa chọn
    scenario.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option.text}`;

        button.addEventListener("click", function () {

            selectAnswer(option, button);

        });

        answerOptions.appendChild(button);

    });

    updateStats();

}


// ======================================
// 6. XỬ LÝ CÂU TRẢ LỜI
// ======================================

function selectAnswer(selectedOption, selectedButton) {

    // Không cho phép chọn nhiều lần
    if (answered) return;

    answered = true;

    const allButtons =
        answerOptions.querySelectorAll(".answer-btn");

    // Khóa toàn bộ phương án
    allButtons.forEach(function (button) {

        button.disabled = true;

    });

    // Cộng điểm
    totalScore += selectedOption.score;

    // Cập nhật thống kê
    if (selectedOption.type === "correct") {

        correctCount++;

    } else if (selectedOption.type === "partial") {

        partialCount++;

    } else {

        wrongCount++;

    }

    // Đánh dấu đáp án người chơi đã chọn
    selectedButton.classList.add(selectedOption.type);

    // Hiển thị phương án an toàn nhất
    const scenario = scenarios[currentScenario];

    const safestIndex = scenario.options.findIndex(
        option => option.type === "correct"
    );

    if (safestIndex !== -1) {

        allButtons[safestIndex].classList.add("correct");

    }

    // Cập nhật điểm và thống kê
    updateStats();

    // Hiển thị phản hồi
    feedback.hidden = false;

    if (selectedOption.type === "correct") {

        feedbackTitle.textContent = "🎉 Chính xác! +20 điểm";

    } else if (selectedOption.type === "partial") {

        feedbackTitle.textContent =
            "⚠️ Chưa thực sự an toàn! +5 điểm";

    } else {

        feedbackTitle.textContent =
            "❌ Lựa chọn nguy hiểm! +0 điểm";

    }

    const safestOption = scenario.options[safestIndex];

    feedbackText.textContent =
        scenario.explanation +
        " Phương án an toàn nhất: " +
        safestOption.text;

    // Nếu là tình huống cuối
    if (currentScenario === scenarios.length - 1) {

        nextButton.textContent = "Xem kết quả →";

    }

}


// ======================================
// 7. LƯU ĐIỂM CAO NHẤT
// ======================================

function saveBestScore() {

    let bestScore = Number(
        localStorage.getItem("chongLua101_bestScore") || 0
    );

    if (totalScore > bestScore) {

        bestScore = totalScore;

        localStorage.setItem(
            "chongLua101_bestScore",
            bestScore
        );

    }

    return bestScore;

}


// ======================================
// 8. HIỂN THỊ KẾT QUẢ CUỐI GAME
// ======================================

function showResult() {

    gameFinished = true;

    questionNumber.textContent = "ĐÃ HOÀN THÀNH";

    progressFill.style.width = "100%";

    sender.textContent = "Chống lừa 101";

    message.textContent =
        "Bạn đã hoàn thành toàn bộ 5 tình huống mô phỏng!";

    answerOptions.hidden = true;

    feedback.hidden = false;

    certificatePanel.hidden = false;

    const bestScore = saveBestScore();

    let evaluation = "";

    if (totalScore >= 80) {

        evaluation =
            "Xuất sắc! Bạn có khả năng nhận diện và xử lý các tình huống khá tốt.";

    } else if (totalScore >= 50) {

        evaluation =
            "Khá tốt! Bạn đã có kiến thức cơ bản nhưng cần cẩn trọng hơn.";

    } else {

        evaluation =
            "Bạn cần luyện tập thêm để nhận diện các dấu hiệu lừa đảo.";

    }

    feedbackTitle.textContent = "🏆 KẾT QUẢ CỦA BẠN";

    feedbackText.textContent =
        `Bạn đạt ${totalScore}/100 điểm. ` +
        evaluation +
        ` Số câu an toàn: ${correctCount}, ` +
        `chưa an toàn: ${partialCount}, ` +
        `nguy hiểm: ${wrongCount}. ` +
        `Điểm cao nhất: ${bestScore}/100.`;

    nextButton.textContent = "🔄 Chơi lại";

    updateStats();

}


// ======================================
// 9. ĐIỀU KHIỂN CHUYỂN MÀN
// ======================================

nextButton.addEventListener("click", function () {

    if (gameFinished) {

        // Đặt lại toàn bộ dữ liệu
        currentScenario = 0;
        totalScore = 0;

        correctCount = 0;
        partialCount = 0;
        wrongCount = 0;

        answered = false;
        gameFinished = false;

        showScenario();

        return;

    }

    // Chỉ chuyển màn sau khi đã trả lời
    if (!answered) return;

    currentScenario++;

    if (currentScenario < scenarios.length) {

        showScenario();

    } else {

        showResult();

    }

});


// ======================================
// 10. KHỞI ĐỘNG GAME
// ======================================

if (
    questionNumber &&
    scoreDisplay &&
    progressFill &&
    sender &&
    message &&
    answerOptions &&
    feedback &&
    nextButton &&
    correctDisplay &&
    partialDisplay &&
    wrongDisplay
) {

    showScenario();

}

// ======================================
// 11. TAO CHUNG NHAN
// ======================================

createCertificate.addEventListener("click", function () {

    const name = playerName.value.trim();

    if (name.length < 2) {
        alert("Vui lòng nhập họ tên hợp lệ!");
        playerName.focus();
        return;
    }

    drawCertificate(name);

    certificatePreview.hidden = false;

});


// ======================================
// 12. VE CHUNG NHAN BANG CANVAS
// ======================================

function drawCertificate(name) {

    const canvas = certificateCanvas;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    // Nền chứng nhận
    ctx.fillStyle = "#F3F8FC";
    ctx.fillRect(0, 0, width, height);

    // Khung ngoài
    ctx.strokeStyle = "#173A58";
    ctx.lineWidth = 16;
    ctx.strokeRect(35, 35, width - 70, height - 70);

    // Khung trong
    ctx.strokeStyle = "#0CAFC0";
    ctx.lineWidth = 4;
    ctx.strokeRect(55, 55, width - 110, height - 110);

    // Logo và tên dự án
    ctx.textAlign = "center";

    ctx.fillStyle = "#0B91A1";
    ctx.font = "bold 42px Arial";
    ctx.fillText("CHỐNG LỪA 101", width / 2, 145);

    // Tiêu đề
    ctx.fillStyle = "#173A58";
    ctx.font = "bold 65px Arial";
    ctx.fillText("CHỨNG NHẬN", width / 2, 270);

    ctx.font = "bold 38px Arial";
    ctx.fillText(
        "CÔNG DÂN SỐ AN TOÀN",
        width / 2,
        335
    );

    // Nội dung
    ctx.fillStyle = "#52677B";
    ctx.font = "27px Arial";
    ctx.fillText(
        "VINH DANH NGƯỜI HOÀN THÀNH THỬ THÁCH",
        width / 2,
        420
    );

    // Tên người chơi
    ctx.fillStyle = "#0B91A1";
    ctx.font = "bold 54px Arial";
    ctx.fillText(name, width / 2, 520);

    // Thành tích
    ctx.fillStyle = "#52677B";
    ctx.font = "26px Arial";
    ctx.fillText(
        "Đã hoàn thành 5 tình huống mô phỏng",
        width / 2,
        590
    );

    // Điểm
    ctx.fillStyle = "#173A58";
    ctx.font = "bold 48px Arial";
    ctx.fillText(
        `THÀNH TÍCH: ${totalScore}/100`,
        width / 2,
        675
    );

    // Ngày hoàn thành
    const date = new Date().toLocaleDateString("vi-VN");

    ctx.fillStyle = "#52677B";
    ctx.font = "24px Arial";
    ctx.fillText(
        `Ngày hoàn thành: ${date}`,
        width / 2,
        755
    );

}


// ======================================
// 13. TAI CHUNG NHAN PNG
// ======================================

downloadCertificate.addEventListener("click", function () {

    const link = document.createElement("a");

    link.download = "chung-nhan-chong-lua-101.png";

    link.href = certificateCanvas.toDataURL("image/png");

    link.click();

});

