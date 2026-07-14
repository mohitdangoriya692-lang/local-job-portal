// UP ke saare 75 Districts ki complete list
const districts = [
    "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha (Jyotiba Phule Nagar)", 
    "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", 
    "Barabanki", "Bareilly", "Basti", "Bhadohi (Sant Ravidas Nagar)", "Bijnor", 
    "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", 
    "Faizabad (Ayodhya)", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar (Noida)", 
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", 
    "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", 
    "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", 
    "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", 
    "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", 
    "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", 
    "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", 
    "Varanasi", "Ayodhya", "Prayagraj (Allahabad)"
];

// Aapka bheja hua complete data row-wise map kiya gaya hai
const jobsData = [
    { company: "LocalMart", role: "Delivery Associate", district: "Agra", address: "22, Circular Road, Saharanpur", phone: "9876543210", wa: "9876543210", openings: 10, edu: "High School" },
    { company: "Saharanpur Electronics", role: "Sales Executive", district: "Aligarh", address: "Shop No. 12, Main Market, Sarai Road, Saharanpur", phone: "9876543211", wa: "9876543211", openings: 3, edu: "High School" },
    { company: "Mittal & Sons Finance", role: "Accountant", district: "Ambedkar Nagar", address: "15/A, Gandhi Chowk, Saharanpur", phone: "9876543212", wa: "9876543212", openings: 1, edu: "Bachelor’s" },
    { company: "ABC Solutions", role: "Data Entry Operator", district: "Amethi", address: "Plot No. 101, Industrial Area, Saharanpur", phone: "9876543213", wa: "9876543213", openings: 2, edu: "8th Pass" },
    { company: "Sharma Enterprises", role: "Office Assistant", district: "Amroha (Jyotiba Phule Nagar)", address: "56, Nehru Colony, Saharanpur", phone: "9876543214", wa: "9876543214", openings: 2, edu: "Intermediate or Higher" },
    { company: "Gupta Agro Products", role: "Field Sales Manager", district: "Auraiya", address: "19, Agriculture Market, Nakur, Saharanpur", phone: "9876543215", wa: "9876543215", openings: 8, edu: "Bachelor’s" },
    { company: "Creative Studio", role: "Graphic Designer", district: "Azamgarh", address: "2nd Floor, City Center Mall, Saharanpur", phone: "9876543216", wa: "9876543216", openings: 2, edu: "Diploma" },
    { company: "City Hospital", role: "Receptionist", district: "Baghpat", address: "21/B, Civil Lines, Saharanpur", phone: "9876543217", wa: "9876543217", openings: 2, edu: "High School" },
    { company: "CallHub Services", role: "Customer Support Rep", district: "Bahraich", address: "45, IT Park, Saharanpur", phone: "9876543218", wa: "9876543218", openings: 6, edu: "Intermediate or Higher" },
    { company: "Shishu Mandir School", role: "Teacher", district: "Ballia", address: "Plot No. 5, Shastri Nagar, Saharanpur", phone: "9876543219", wa: "9876543219", openings: 3, edu: "Bachelor’s" },
    { company: "Jindal Pvt. Ltd.", role: "Marketing Executive", district: "Balrampur", address: "Industrial Estate, Rampur Road, Saharanpur", phone: "9876543220", wa: "9876543220", openings: 3, edu: "Bachelor’s" }
];

// App start hote hi automatic districts load karne ke liye
window.onload = function() {
    const selectEl = document.getElementById('district-select');
    districts.forEach(dist => {
        let opt = document.createElement('option');
        opt.value = dist;
        opt.innerText = dist;
        selectEl.appendChild(opt);
    });
};

// Pages badalne ka function (Navigation control)
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    // Active Tab color change handle karne ke liye
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-all-jobs').classList.remove('active');
    document.getElementById('nav-about').classList.remove('active');

    if(pageId === 'home-page') {
        document.getElementById('nav-home').classList.add('active');
        

// --- YAHAN YE ADD KAREIN (Line 54 se 57) ---
    if (pageId === 'home-page') {
        document.getElementById('district-select').value = 'Show All';
        document.getElementById('education-select').value = 'Show All';
    }
// ------------------------------------------
    } else if(pageId === 'results-page') {
        document.getElementById('nav-all-jobs').classList.add('active');
    } else if(pageId === 'about-page') {
        document.getElementById('nav-about').classList.add('active');
    }
}

// Function: Cards generate aur render karne ke liye
function displayJobs(jobsArray) {
    const container = document.getElementById('job-list-container');
    container.innerHTML = '';

    if(jobsArray.length === 0) {
        container.innerHTML = `<div class="no-jobs">Aapke criteria ke hisab se koi job nahi mili!</div>`;
    } else {
        jobsArray.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <div class="job-info">
                    <h3>${job.company}</h3>
                    <p>${job.address}</p>
                    <p><strong>Role:</strong> ${job.role} | <strong>Openings:</strong> ${job.openings}</p>
                    <p><strong>Education Required:</strong> ${job.edu}</p>
                </div>
                <div class="job-actions">
                    <a href="https://wa.me/${job.wa}" target="_blank" class="action-icon icon-wa"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="tel:${job.phone}" class="action-icon icon-call"><i class="fa-solid fa-phone"></i></a>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

// Filter ke hisab se job dikhane ka logic
function filterAndShowJobs() {
    const selectedDistrict = document.getElementById('district-select').value;
    const selectedEdu = document.getElementById('education-select').value;
    // SIRF YEH 4 LINES NAYI ADD KARI HAIN:
    if (selectedDistrict === 'Show All' && selectedEdu === 'Show All') {
        alert("Kripya aage badhne ke liye apni District aur Job-type select karein. Dhanyavad!");
        return; 
    }

    const filtered = jobsData.filter(job => {
        const distMatch = (selectedDistrict === 'Show All' || job.district === selectedDistrict);
        const eduMatch = (selectedEdu === 'Show All' || job.edu === selectedEdu);
        return distMatch && eduMatch;
    });

    displayJobs(filtered);
    showPage('results-page');
}

// Naya functionality: Header ke "All Jobs" click karne par poora data bina filter ke khulega
function showAllJobsWithoutFilter() {
    displayJobs(jobsData);
    showPage('results-page');
}
