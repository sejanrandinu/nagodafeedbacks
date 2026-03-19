const API_URL = "https://nagoda-review-api.nagodadb.workers.dev/api/reviews"; // Change this to your deployed worker URL

const translations = {
    si: {
        deptTitle: "නාගොඩ ප්‍රාදේශීය ලේකම් කාර්යාලය",
        title: "අපි ගැන අපට කියන්න",
        nameLabel: "නම (කැමති නම් පමණක්)",
        namePlaceholder: "ඔබේ නම ඇතුළත් කරන්න",
        phoneLabel: "දුරකථන අංකය (කැමති නම් පමණක්)",
        phonePlaceholder: "ඔබේ දුරකථන අංකය ඇතුළත් කරන්න",
        addressLabel: "ලිපිනය (කැමති නම් පමණක්)",
        addressPlaceholder: "ඔබේ ලිපිනය ඇතුළත් කරන්න",
        purposeLabel: "පැමිණි අංශය *",
        purposePlaceholder: "ඔබ පැමිණි අංශය ඇතුළත් කරන්න",
        purposeDefault: "-- කරුණාකර තෝරන්න --",
        purposeDS: "ප්‍රාදේශීය ලේකම් හමුවීමට",
        purposeADS: "සහකාර ප්‍රාදේශීය ලේකම් හමුවීමට",
        purposeEst: "ආයතන අංශය",
        purposeNIC: "හැඳුනුම්පත් අංශය",
        purposeReg: "රෙජිස්ට්‍රාර් අංශය",
        purposeMotor: "මෝටර් රථ අංශය",
        purposeShroff: "සරප් අංශය",
        purposeAccounts: "ගිණුම් අංශය",
        purposeDev: "සංවර්ධන අංශය",
        purposeSocial: "සමාජ සේවා අංශය",
        purposeSamurdhi: "සමෘද්ධි අංශය",
        purposeVidatha: "විදාතා සම්පත් මධ්‍යස්ථානය",
        purposeGN: "ග්‍රාම නිලධාරී අංශය",
        purposeOther: "වෙනත්",
        messageLabel: "පණිවිඩය (කැමති නම් පමණක්)",
        messagePlaceholder: "ඔබේ අදහස මෙහි ලියන්න...",
        ratingBad: "අසතුටුදායකයි",
        ratingHappy: "හොඳයි",
        ratingVeryHappy: "ඉතා හොඳයි",
        submitBtn: "යොමු කරන්න",
        thankYouText: "ඔබේ ප්‍රතිචාරයට ස්තුතියි!",
        newReviewBtn: "තවත් ප්‍රතිචාරයක්",
        docTitle: "අපි ගැන අපිට කියන්න"
    },
    ta: {
        deptTitle: "நாகொட பிரதேச செயலகம்",
        title: "எங்களைப் பற்றி எங்களிடம் கூறுங்கள்",
        nameLabel: "பெயர் (விருப்பமிருந்தால் மட்டும்)",
        namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
        phoneLabel: "தொலைபேசி எண் (விருப்பமிருந்தால் மட்டும்)",
        phonePlaceholder: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
        addressLabel: "முகவரி (விருப்பமிருந்தால் மட்டும்)",
        addressPlaceholder: "உங்கள் முகவரியை உள்ளிடவும்",
        purposeLabel: "வருகைக்கான காரணம் *",
        purposePlaceholder: "நீங்கள் வந்த காரணத்தை உள்ளிடவும்",
        purposeDefault: "-- தயவுசெய்து தேர்ந்தெடுக்கவும் --",
        purposeDS: "பிரதேச செயலாளரைச் சந்திக்க",
        purposeADS: "உதவி பிரதேச செயலாளரைச் சந்திக்க",
        purposeEst: "தாபனப் பிரிவு",
        purposeNIC: "அடையாள அட்டைப் பிரிவு",
        purposeReg: "பதிவாளர் பிரிவு",
        purposeMotor: "மோட்டார் போக்குவரத்துப் பிரிவு",
        purposeShroff: "காசாளர் பிரிவு",
        purposeAccounts: "கணக்குப் பிரிவு",
        purposeDev: "அபிவிருத்திப் பிரிவு",
        purposeSocial: "சமூக சேவைகள் பிரிவு",
        purposeSamurdhi: "சமுர்த்திப் பிரிவு",
        purposeVidatha: "விதாத்தா வள நிலையம்",
        purposeGN: "கிராம உத்தியோகத்தர் பிரிவு",
        purposeOther: "மற்றவை",
        messageLabel: "செய்தி (விருப்பமிருந்தால் மட்டும்)",
        messagePlaceholder: "உங்கள் கருத்தை இங்கே எழுதவும்...",
        ratingBad: "திருப்தியற்றது",
        ratingHappy: "நல்லது",
        ratingVeryHappy: "மிகவும் நல்லது",
        submitBtn: "சமர்ப்பிக்க",
        thankYouText: "உங்கள் கருத்துக்கு நன்றி!",
        newReviewBtn: "மீண்டும்",
        docTitle: "எங்களைப் பற்றி எங்களிடம் கூறுங்கள்"
    },
    en: {
        deptTitle: "Nagoda Divisional Secretariat",
        title: "Tell Us About Us",
        nameLabel: "Name (Optional)",
        namePlaceholder: "Enter your name",
        phoneLabel: "Phone Number (Optional)",
        phonePlaceholder: "Enter your phone number",
        addressLabel: "Address (Optional)",
        addressPlaceholder: "Enter your address",
        purposeLabel: "Purpose of Visit *",
        purposePlaceholder: "Enter your purpose here",
        purposeDefault: "-- Please select --",
        purposeDS: "To meet Divisional Secretary",
        purposeADS: "To meet Asst. Divisional Secretary",
        purposeEst: "Establishment Branch",
        purposeNIC: "NIC Branch",
        purposeReg: "Registrar Branch",
        purposeMotor: "Motor Traffic Branch",
        purposeShroff: "Shroff Branch",
        purposeAccounts: "Accounts Branch",
        purposeDev: "Development Branch",
        purposeSocial: "Social Services Branch",
        purposeSamurdhi: "Samurdhi Branch",
        purposeVidatha: "Vidatha Resource Centre",
        purposeGN: "Grama Niladhari Branch",
        purposeOther: "Other",
        messageLabel: "Message (Optional)",
        messagePlaceholder: "Write your feedback here...",
        ratingBad: "Unsatisfactory",
        ratingHappy: "Good",
        ratingVeryHappy: "Very Good",
        submitBtn: "Submit",
        thankYouText: "Thank you for your feedback!",
        newReviewBtn: "Submit Another",
        docTitle: "Tell Us About Us"
    }
};

let currentLang = 'si';

// DOM Elements
const langBtns = document.querySelectorAll('.lang-btn');
const titleText = document.getElementById('titleText');
const nameLabel = document.getElementById('nameLabel');
const userNameInput = document.getElementById('userName');
const phoneLabel = document.getElementById('phoneLabel');
const userPhoneInput = document.getElementById('userPhone');
const addressLabel = document.getElementById('addressLabel');
const userAddressInput = document.getElementById('userAddress');
const messageLabel = document.getElementById('messageLabel');
const userMessageInput = document.getElementById('userMessage');
const ratingBadText = document.getElementById('ratingBadText');
const ratingHappyText = document.getElementById('ratingHappyText');
const ratingVeryHappyText = document.getElementById('ratingVeryHappyText');
const submitBtn = document.getElementById('submitBtn');
const thankYouText = document.getElementById('thankYouText');
const newReviewBtn = document.getElementById('newReviewBtn');
const reviewForm = document.getElementById('reviewForm');
const successMessage = document.getElementById('successMessage');

// Language Switcher
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        langBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        currentLang = btn.getAttribute('data-lang');
        updateLanguage();
    });
});

function updateLanguage() {
    const t = translations[currentLang];

    document.title = t.docTitle;
    document.documentElement.lang = currentLang;

    // Updates
    document.getElementById('deptTitleText').textContent = t.deptTitle;
    titleText.textContent = t.title;

    nameLabel.textContent = t.nameLabel;
    userNameInput.placeholder = t.namePlaceholder;

    phoneLabel.textContent = t.phoneLabel;
    userPhoneInput.placeholder = t.phonePlaceholder;

    document.getElementById('addressLabel').textContent = t.addressLabel;
    document.getElementById('userAddress').placeholder = t.addressPlaceholder;

    document.getElementById('purposeLabel').innerHTML = t.purposeLabel.replace('*', '<span style="color: red;">*</span>');
    document.getElementById('userPurposeOther').placeholder = t.purposePlaceholder;

    document.getElementById('purposeOptionDefault').textContent = t.purposeDefault;
    document.getElementById('purposeOptionDS').textContent = t.purposeDS;
    document.getElementById('purposeOptionADS').textContent = t.purposeADS;
    document.getElementById('purposeOptionEst').textContent = t.purposeEst;
    document.getElementById('purposeOptionNIC').textContent = t.purposeNIC;
    document.getElementById('purposeOptionReg').textContent = t.purposeReg;
    document.getElementById('purposeOptionMotor').textContent = t.purposeMotor;
    document.getElementById('purposeOptionShroff').textContent = t.purposeShroff;
    document.getElementById('purposeOptionAccounts').textContent = t.purposeAccounts;
    document.getElementById('purposeOptionDev').textContent = t.purposeDev;
    document.getElementById('purposeOptionSocial').textContent = t.purposeSocial;
    document.getElementById('purposeOptionSamurdhi').textContent = t.purposeSamurdhi;
    document.getElementById('purposeOptionVidatha').textContent = t.purposeVidatha;
    document.getElementById('purposeOptionGN').textContent = t.purposeGN;
    document.getElementById('purposeOptionOther').textContent = t.purposeOther;

    messageLabel.textContent = t.messageLabel;
    userMessageInput.placeholder = t.messagePlaceholder;

    ratingBadText.textContent = t.ratingBad;
    ratingHappyText.textContent = t.ratingHappy;
    ratingVeryHappyText.textContent = t.ratingVeryHappy;

    submitBtn.textContent = t.submitBtn;

    thankYouText.textContent = t.thankYouText;
    newReviewBtn.textContent = t.newReviewBtn;
}

// UI Event Listeners
const userPurposeSelect = document.getElementById('userPurposeSelect');
const otherPurposeGroup = document.getElementById('otherPurposeGroup');

userPurposeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherPurposeGroup.classList.remove('hidden');
    } else {
        otherPurposeGroup.classList.add('hidden');
    }
});

// Form Submission
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if rating is selected
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert("Please select a rating.");
        return;
    }

    // Prepare data to send to API
    const userPurposeSelectElem = document.getElementById('userPurposeSelect');
    const userPurposeOtherElem = document.getElementById('userPurposeOther');
    let purposeValue = "";
    if (userPurposeSelectElem.value) {
        if (userPurposeSelectElem.value === 'other') {
            purposeValue = userPurposeOtherElem.value.trim();
            if (!purposeValue) {
                alert(currentLang === 'si' ? "කරුණාකර ඔබ පැමිණි අංශය ඇතුළත් කරන්න." : (currentLang === 'ta' ? "தயவுசெய்து உங்கள் வருகைக்கான காரணத்தை உள்ளிடவும்." : "Please enter your purpose of visit."));
                userPurposeOtherElem.focus();
                return;
            }
        } else {
            purposeValue = userPurposeSelectElem.options[userPurposeSelectElem.selectedIndex].text;
        }
    } else {
        alert(currentLang === 'si' ? "කරුණාකර පැමිණි අංශය තෝරන්න." : (currentLang === 'ta' ? "தயவுசெய்து வருகைக்கான காரணத்தைத் தேர்ந்தெடுக்கவும்." : "Please select a purpose of visit."));
        userPurposeSelectElem.focus();
        return;
    }

    const reviewData = {
        lang: currentLang,
        rating: rating.value,
        name: userNameInput.value || "Anonymous",
        phone: userPhoneInput.value || "-",
        address: document.getElementById('userAddress').value || "-",
        purpose: purposeValue,
        message: userMessageInput.value || "-"
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "...";

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                reviewForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
                reviewForm.reset();
            } else {
                alert("Submission failed. Please try again.");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Network error. Please try again later.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            updateLanguage();
        });
});

// Reset after success
newReviewBtn.addEventListener('click', () => {
    successMessage.classList.add('hidden');
    reviewForm.classList.remove('hidden');
});

// Initialize language
updateLanguage();
