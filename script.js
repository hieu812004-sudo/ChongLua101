const i18n = {
    vi: {
        intro_title: "CHỐNG LỪA <span>101</span>",
        intro_subtitle: "Vượt qua 10 thử thách bẫy lừa đảo tinh vi nhất trên điện thoại!",
        label_name: "Nhập họ tên của bạn (để cấp chứng chỉ):",
        btn_start: "BẮT ĐẦU THỬ THÁCH 🚀",
        note_data: "*Mô phỏng chân thực giao diện nhắn tin thực tế.",
        btn_next: "Tình huống tiếp theo ➔",
        btn_download: "⬇️ Tải Chứng Chỉ Về Máy",
        btn_share: "Chia sẻ Facebook",
        btn_restart: "🔄 Chơi lại từ đầu",
        rank_master: "CHIẾN THẦN CHỐNG LỪA ĐẢO",
        rank_safe: "CÔNG DÂN SỐ AN TOÀN",
        rank_rookie: "TÂN BINH AN TOÀN MẠNG"
    },
    en: {
        intro_title: "ANTI-SCAM <span>101</span>",
        intro_subtitle: "Overcome 10 sophisticated scam traps on phone interface!",
        label_name: "Enter your full name (for certificate):",
        btn_start: "START CHALLENGE 🚀",
        note_data: "*Realistic simulated messaging interface.",
        btn_next: "Next Scenario ➔",
        btn_download: "⬇️ Download Certificate",
        btn_share: "Share on Facebook",
        btn_restart: "🔄 Play Again",
        rank_master: "ANTI-SCAM MASTER",
        rank_safe: "SAFE DIGITAL CITIZEN",
        rank_rookie: "CYBER ROOKIE"
    }
};

let currentLang = 'vi';

const allScenarios = [
    {
        sender: "Cán bộ Công an (SĐT lạ)",
        avatar: "👮",
        messages: [
            "Chào em, tôi là Đại úy Trần Văn Hùng - Cán bộ Đội Cảnh sát Quản lý hành chính Công an tỉnh Đồng Nai.",
            "Hệ thống ghi nhận CCCD của em đang bị kẻ gian sử dụng để mở tài khoản ngân hàng rửa tiền.",
            "Yêu cầu em kết bạn Zalo này và tải ứng dụng 'VNeID_BoCongAn.apk' để xác minh trong 30 phút!"
        ],
        choices: [
            { text: "Hoảng sợ, làm theo hướng dẫn và tải file .apk để chứng minh mình vô tội.", isCorrect: false, explanation: "CẢNH BÁO ĐỎ! File .apk là mã độc chiếm quyền điều khiển điện thoại. Cơ quan Công an KHÔNG BAO GIỜ làm việc qua Zalo." },
            { text: "Cúp máy ngay, báo cho gia đình và đến trực tiếp Công an xã/phường gần nhất.", isCorrect: true, explanation: "CHÍNH XÁC! Công an chỉ làm việc trực tiếp qua giấy mời/triệu tập hợp lệ." },
            { text: "Chụp ảnh CCCD và số dư tài khoản gửi qua Zalo để kiểm tra.", isCorrect: false, explanation: "SAI LẦM! Giúp kẻ gian dùng thông tin của bạn để vay tín dụng đen." }
        ]
    },
    {
        sender: "Tuyển Dụng Việc Làm Online",
        avatar: "💼",
        messages: [
            "Tuyển CTV xử lý đơn hàng tại nhà cho sàn TMĐT, thu nhập 300k - 500k/ngày.",
            "Thanh toán giúp shop đơn hàng 200.000đ, hệ thống sẽ hoàn gốc + 20% hoa hồng sau 3 phút."
        ],
        choices: [
            { text: "Thử chuyển 200k vì số tiền nhỏ, nếu nhận được tiền thật thì làm tiếp.", isCorrect: false, explanation: "BẪY 'NUÔI CON MỒI'! Các đơn đầu trả hoa hồng thật, đơn lớn sẽ khóa tài khoản." },
            { text: "Từ chối ngay và chặn tài khoản vì không có việc nhẹ lương cao.", isCorrect: true, explanation: "TUYỆT VỜI! Công việc hợp pháp không bao giờ yêu cầu ứng tiền túi trước." }
        ]
    },
    {
        sender: "Mẹ Yêu ❤️ (Facebook)",
        avatar: "👩",
        messages: [
            "Con ơi chuyển giúp mẹ 2.500.000đ vào STK cô Lan (1903882910 - Techcombank) gấp nhé, app lỗi!"
        ],
        choices: [
            { text: "Chuyển ngay vì thấy đúng nick Facebook của mẹ và đang rất gấp.", isCorrect: false, explanation: "RẤT NGUY HIỂM! Tài khoản Facebook người thân dễ bị hack để lừa tiền." },
            { text: "Gọi điện thoại trực tiếp qua số di động của mẹ để xác nhận.", isCorrect: true, explanation: "CHUẨN XÁC 100%! Luôn gọi thoại trực tiếp trước mọi giao dịch tiền bạc." }
        ]
    },
    {
        sender: "Hệ Thống Trúng Thưởng",
        avatar: "🎁",
        messages: [
            "CHÚC MỪNG! SĐT của bạn trúng iPhone 16 Pro Max! Bấm link đóng 350k phí vận chuyển:",
            "👉 http://nhan-qua-tri-an-vn2026.xyz"
        ],
        choices: [
            { text: "Bấm vào đường link xem giao diện có uy tín không.", isCorrect: false, explanation: "Bấm vào link lạ (.xyz) dễ dính mã độc đánh cắp thông tin." },
            { text: "Xóa tin nhắn ngay. Không tham gia chương trình nào thì không thể trúng thưởng.", isCorrect: true, explanation: "CHÍNH XÁC! Không có chương trình trúng thưởng nào bắt đóng phí trước." }
        ]
    },
    {
        sender: "Tổng Đài Viễn Thông",
        avatar: "📡",
        messages: [
            "Thuê bao của bạn sắp bị khóa 2 chiều. Bấm cú pháp **21*0988123456# để giữ SIM."
        ],
        choices: [
            { text: "Bấm cú pháp **21*...# theo hướng dẫn.", isCorrect: false, explanation: "BẪY CƯỚP OTP! Lệnh chuyển hướng toàn bộ cuộc gọi và mã OTP sang máy kẻ gian." },
            { text: "Bỏ qua, tự gọi lên tổng đài chính thức để kiểm tra.", isCorrect: true, explanation: "XUẤT SẮC! Tuyệt đối không bấm các cú pháp lạ có chứa dấu sao (*)." }
        ]
    },
    {
        sender: "App Hẹn Hò Trực Tuyến",
        avatar: "💘",
        messages: [
            "Hay mình gọi video 'tâm sự riêng tư' một chút nhé, hoặc gửi ảnh gợi cảm cho mình đi 😘"
        ],
        choices: [
            { text: "Gửi ảnh/video nhạy cảm vì nghĩ tin tưởng được.", isCorrect: false, explanation: "BẪY TỐNG TIỀN SEXTORTION! Kẻ gian quay lại và đe dọa bôi nhọ bạn." },
            { text: "Từ chối dứt khoát, không bao giờ gửi hình nhạy cảm qua mạng.", isCorrect: true, explanation: "QUÁ BẢN LĨNH! Bảo vệ bản thân trên không gian mạng là trên hết." }
        ]
    },
    {
        sender: "Fanpage Vé Concert",
        avatar: "🎵",
        messages: [
            "Pass lại 2 vé VIP sự kiện âm nhạc giá gốc. Chuyển khoản cọc 50% mình gửi vé điện tử!"
        ],
        choices: [
            { text: "Chuyển cọc ngay kẻo người khác mua mất.", isCorrect: false, explanation: "CHIÊU TRÒ BÁN VÉ GIẢ! Chuyển tiền xong tài khoản sẽ chặn bạn ngay." },
            { text: "Chỉ mua vé qua cổng bán vé chính thức của ban tổ chức.", isCorrect: true, explanation: "CHÍNH XÁC! Không mua vé qua các tài khoản mạng xã hội trôi nổi." }
        ]
    },
    {
        sender: "Điện Lực EVN (Giả mạo)",
        avatar: "⚡",
        messages: [
            "Hộ gia đình bạn chưa thanh toán tiền điện. Bấm vào link đóng tránh bị cắt điện: https://dien-luc-vn.cc"
        ],
        choices: [
            { text: "Bấm vào link nhập thông tin thẻ thanh toán nhanh.", isCorrect: false, explanation: "Trang web giả mạo đánh cắp thông tin thẻ ngân hàng và mã OTP." },
            { text: "Kiểm tra qua app ngân hàng chính thống, không bấm link lạ.", isCorrect: true, explanation: "XUẤT SẮC! Mọi thanh toán đều thực hiện qua app ngân hàng chính thức." }
        ]
    },
    {
        sender: "Sàn Đầu Tư Tài Chính 4.0",
        avatar: "📈",
        messages: [
            "Chuyên gia đọc lệnh kéo về bờ 100%, cam kết lợi nhuận 30-50%/ngày. Vốn từ 500k!"
        ],
        choices: [
            { text: "Nạp 500k thử vận may xem sao.", isCorrect: false, explanation: "Sàn giao dịch ảo tự lập, không bao giờ cho rút tiền gốc." },
            { text: "Chặn ngay tin nhắn. Đầu tư siêu tốc luôn là lừa đảo.", isCorrect: true, explanation: "TUYỆT VỜI! Không có mô hình đầu tư hợp pháp nào cam kết lời siêu tốc." }
        ]
    },
    {
        sender: "Thuê Tài Khoản Ngân Hàng",
        avatar: "💳",
        messages: [
            "Cần thuê tài khoản ngân hàng chính chủ của sinh viên nhận tiền, trả hoa hồng 500k/ngày."
        ],
        choices: [
            { text: "Cho thuê ngay vì kiếm tiền dễ quá.", isCorrect: false, explanation: "RẤT NGUY HIỂM! Bạn đang tiếp tay cho tội phạm rửa tiền và vướng lao lý." },
            { text: "Từ chối thẳng thừng vì vi phạm pháp luật.", isCorrect: true, explanation: "HOÀN TOÀN CHÍNH XÁC! Không cho thuê tài khoản dưới mọi hình thức." }
        ]
    }
];

let achievements = [
    { id: "first_win", title: "Khởi Đầu An Toàn", desc: "Hoàn thành lần chơi đầu tiên", unlocked: false },
    { id: "perfect_score", title: "Chiến Thần Tỉnh Táo", desc: "Đạt điểm tuyệt đối 1000/1000", unlocked: false },
    { id: "crypto_savvy", title: "Bậc Thầy Phòng Vệ", desc: "Vượt qua tất cả các bẫy tài chính", unlocked: false }
];

if (localStorage.getItem("chonglua_achievements")) {
    achievements = JSON.parse(localStorage.getItem("chonglua_achievements"));
}

let activeScenarios = [];
let currentStep = 0;
let score = 0;
let playerName = "Công Dân Số";

const screenIntro = document.getElementById("screen-intro");
const screenGame = document.getElementById("screen-game");
const screenResult = document.getElementById("screen-result");

const inputName = document.getElementById("player-name");
const btnStart = document.getElementById("btn-start");
const chatBox = document.getElementById("chat-box");
const choicesContainer = document.getElementById("choices-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackDesc = document.getElementById("feedback-desc");
const btnNext = document.getElementById("btn-next");

const themeSwitch = document.getElementById("theme-switch");
const btnLang = document.getElementById("btn-lang");
const btnTips = document.getElementById("btn-tips");
const btnAchievements = document.getElementById("btn-achievements");

const modalTips = document.getElementById("modal-tips");
const modalAchievements = document.getElementById("modal-achievements");

const completedCountEl = document.getElementById("completed-count");
const sidebarProgressFill = document.getElementById("sidebar-progress-fill");

// Theme Switch
themeSwitch.addEventListener("change", () => {
    const html = document.documentElement;
    if (themeSwitch.checked) {
        html.setAttribute("data-theme", "dark");
    } else {
        html.setAttribute("data-theme", "light");
    }
});

// Language Toggle
btnLang.addEventListener("click", () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    btnLang.textContent = currentLang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English';
    updateLanguageTexts();
});

function updateLanguageTexts() {
    const dict = i18n[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.innerHTML = dict[key];
    });
}

// Modals
btnTips.addEventListener("click", () => modalTips.classList.remove("hidden"));
btnAchievements.addEventListener("click", () => {
    renderAchievements();
    modalAchievements.classList.remove("hidden");
});

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        modalTips.classList.add("hidden");
        modalAchievements.classList.add("hidden");
    });
});

function renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    grid.innerHTML = "";
    achievements.forEach(ach => {
        grid.innerHTML += `
            <div class="achievement-card ${ach.unlocked ? 'unlocked' : ''}">
                <h4>${ach.unlocked ? '🏆' : '🔒'} ${ach.title}</h4>
                <p>${ach.desc}</p>
            </div>
        `;
    });
}

function updateSidebarWidgets() {
    const completed = currentStep;
    const total = activeScenarios.length > 0 ? activeScenarios.length : 10;
    const pct = total > 0 ? (completed / total) * 100 : 0;

    // Cập nhật cột bên phải (Sidebar)
    completedCountEl.textContent = `${completed}/${total}`;
    sidebarProgressFill.style.width = `${pct}%`;

    // Cập nhật thanh Header phía trên cùng
    const headerScoreEl = document.getElementById("header-score");
    const headerCompletedEl = document.getElementById("header-completed");
    const headerProgressFillEl = document.getElementById("header-progress-fill");

    if (headerScoreEl) headerScoreEl.textContent = score;
    if (headerCompletedEl) headerCompletedEl.textContent = `${completed}/${total}`;
    if (headerProgressFillEl) headerProgressFillEl.style.width = `${pct}%`;
}

function checkAchievements(finalScore) {
    achievements[0].unlocked = true;
    if (finalScore === 1000) {
        achievements[1].unlocked = true;
        achievements[2].unlocked = true;
    }
    localStorage.setItem("chonglua_achievements", JSON.stringify(achievements));
    updateSidebarWidgets();
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

btnStart.addEventListener("click", () => {
    const nameVal = inputName.value.trim();
    if (nameVal !== "") playerName = nameVal;
    
    activeScenarios = shuffleArray([...allScenarios]).slice(0, 10);
    currentStep = 0;
    score = 0;
    document.getElementById("current-score").textContent = score;
    
    switchScreen(screenGame);
    loadScenario(currentStep);
    updateSidebarWidgets();
});

function switchScreen(targetScreen) {
    [screenIntro, screenGame, screenResult].forEach(s => s.classList.remove("active"));
    targetScreen.classList.add("active");
}

function loadScenario(index) {
    const data = activeScenarios[index];
    
    document.getElementById("scenario-counter").textContent = `Tình huống ${index + 1}/${activeScenarios.length}`;
    document.getElementById("progress-fill").style.width = `${((index + 1) / activeScenarios.length) * 100}%`;
    document.getElementById("sender-name").textContent = data.sender;
    document.getElementById("sender-avatar").textContent = data.avatar;

    chatBox.innerHTML = "";
    choicesContainer.innerHTML = "";
    feedbackBox.classList.add("hidden");
    choicesContainer.style.display = "flex";

    data.messages.forEach((msgText, i) => {
        setTimeout(() => {
            const msgDiv = document.createElement("div");
            msgDiv.className = "msg scammer";
            if (msgText.includes("http://") || msgText.includes("https://")) {
                msgDiv.innerHTML = msgText.replace(/(https?:\/\/[^\s]+)/g, '<span class="fake-link">$1</span>');
            } else {
                msgDiv.textContent = msgText;
            }
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, i * 400);
    });

    setTimeout(() => {
        data.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.text;
            btn.onclick = () => handleChoice(choice);
            choicesContainer.appendChild(btn);
        });
    }, data.messages.length * 400);

    updateSidebarWidgets();
}

function handleChoice(choice) {
    const userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.textContent = choice.text;
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    choicesContainer.style.display = "none";
    feedbackBox.classList.remove("hidden");

    if (choice.isCorrect) {
        score += 100;
        document.getElementById("current-score").textContent = score;
        feedbackTitle.textContent = "✅ XỬ LÝ AN TOÀN (+100 điểm)";
        feedbackTitle.className = "feedback-title correct";
    } else {
        feedbackTitle.textContent = "❌ SẬP BẪY LỪA ĐẢO (0 điểm)";
        feedbackTitle.className = "feedback-title wrong";
    }

    feedbackDesc.textContent = choice.explanation;
    btnNext.textContent = (currentStep < activeScenarios.length - 1) ? "Tình huống tiếp theo ➔" : "Xem Chứng Chỉ Kết Quả 🏆";
    
    updateSidebarWidgets();
}

btnNext.addEventListener("click", () => {
    currentStep++;
    if (currentStep < activeScenarios.length) {
        loadScenario(currentStep);
    } else {
        showResultScreen();
    }
});

function showResultScreen() {
    switchScreen(screenResult);
    
    const maxScore = activeScenarios.length * 100;
    const rankEl = document.getElementById("result-rank");
    const summaryEl = document.getElementById("result-summary");

    let rankTitle = i18n[currentLang].rank_master;
    if (score === maxScore) {
        rankEl.textContent = "🏆 XUẤT SẮC TUYỆT ĐỐI!";
        rankTitle = i18n[currentLang].rank_master;
    } else if (score >= maxScore * 0.7) {
        rankEl.textContent = "🛡️ CẢNH GIÁC CAO!";
        rankTitle = i18n[currentLang].rank_safe;
    } else {
        rankEl.textContent = "⚠️ CẦN CẨN TRỌNG HƠN!";
        rankTitle = i18n[currentLang].rank_rookie;
    }

    summaryEl.textContent = `Bạn đạt ${score}/${maxScore} điểm phòng vệ trên không gian mạng.`;
    checkAchievements(score);
    generateCertificate(playerName, score, maxScore, rankTitle);
    updateSidebarWidgets();
}

function generateCertificate(name, userScore, maxScore, rankTitle) {
    const canvas = document.getElementById("cert-canvas");
    const ctx = canvas.getContext("2d");

    const grad = ctx.createLinearGradient(0, 0, 800, 560);
    grad.addColorStop(0, "#0f172a");
    grad.addColorStop(1, "#1e3a8a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 560);

    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 8;
    ctx.strokeRect(24, 24, 752, 512);

    ctx.strokeStyle = "rgba(251, 191, 36, 0.4)";
    ctx.lineWidth = 2;
    ctx.strokeRect(36, 36, 728, 488);

    ctx.fillStyle = "#93c5fd";
    ctx.font = "bold 18px 'Be Vietnam Pro', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CHIẾN DỊCH AN TOÀN KHÔNG GIAN MẠNG - ĐỒNG NAI", 400, 85);

    ctx.fillStyle = "#fbbf24";
    ctx.font = "800 36px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("CHỨNG NHẬN CÔNG DÂN SỐ AN TOÀN", 400, 145);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "400 20px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("Trân trọng chứng nhận bạn:", 400, 200);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 42px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(name.toUpperCase(), 400, 260);

    ctx.beginPath();
    ctx.moveTo(200, 280);
    ctx.lineTo(600, 280);
    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "500 20px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Điểm phòng vệ: ${userScore}/${maxScore}`, 400, 330);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 24px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`DANH HIỆU: ${rankTitle}`, 400, 380);

    const today = new Date().toLocaleDateString('vi-VN');
    ctx.fillStyle = "#94a3b8";
    ctx.font = "italic 16px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Ngày cấp: ${today} | Chống Lừa 101 - Đồng Nai`, 400, 480);
}

document.getElementById("btn-download").addEventListener("click", () => {
    const canvas = document.getElementById("cert-canvas");
    const link = document.createElement("a");
    link.download = `Chung-Nhan-Chong-Lua-101-${playerName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
});

document.getElementById("btn-share-fb").addEventListener("click", () => {
    const shareText = encodeURIComponent(`Mình vừa đạt điểm số phòng vệ và nhận chứng nhận tại thử thách Chống Lừa 101!`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareText}`, "_blank");
});

document.getElementById("btn-restart").addEventListener("click", () => {
    switchScreen(screenIntro);
    currentStep = 0;
    updateSidebarWidgets();
});

updateSidebarWidgets();