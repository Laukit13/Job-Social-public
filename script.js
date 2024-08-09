// File upload functionality
const fileInput = document.getElementById('file-input');
const fileName = document.getElementById('file-name');
const analyzeButton = document.querySelector('button');
let fileContent = '';

fileInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        fileName.textContent = e.target.files[0].name;
        analyzeButton.disabled = false;
    } else {
        fileName.textContent = 'No file chosen';
        analyzeButton.disabled = true;
    }
});

function isATSOptimized(filename) {
    return filename.toLowerCase().includes('ats');
}

function analyzeResume() {
    const analysis = document.getElementById('analysis');
    const resumeName = fileName.textContent;
    const totalPages = 2; // This would ideally be determined by analyzing the actual file
    const atsOptimized = isATSOptimized(resumeName);
    const sections = {
        education: Math.random() < 0.5, // Randomly determine if section exists for demo
        skills: Math.random() < 0.5,
        experience: Math.random() < 0.5
    };
    const shortlistChance = atsOptimized ? Math.floor(Math.random() * 30) + 70 : Math.floor(Math.random() * 30) + 1;

    analysis.innerHTML = `
        <h2>Resume Analysis:</h2>
        <div class="analysis-item">
            <span>1. Resume Name:</span> ${resumeName}
        </div>
        <div class="analysis-item">
            <span>2. Total Pages:</span> <span class="${totalPages <= 2 ? 'good' : 'bad'}">${totalPages} (${totalPages <= 2 ? 'Good' : 'Too Long'})</span>
        </div>
        <div class="analysis-item">
            <span>3. ATS Optimized:</span> <span class="${atsOptimized ? 'good' : 'bad'}">${atsOptimized ? 'Optimized' : 'Not Optimized'}</span>
            <p class="explanation">${atsOptimized ? 'Your resume appears to be optimized for Applicant Tracking Systems.' : 'Your resume may not be fully optimized for Applicant Tracking Systems (ATS). This could result in your application being overlooked by automated screening processes.'}</p>
        </div>
        <div class="analysis-item">
            <span>4. Sections:</span>
            <br>Education: <span class="${sections.education ? 'good' : 'bad'}">${sections.education ? 'Yes' : 'No'}</span>
            <br>Skills: <span class="${sections.skills ? 'good' : 'bad'}">${sections.skills ? 'Yes' : 'No'}</span>
            <br>Experience: <span class="${sections.experience ? 'good' : 'bad'}">${sections.experience ? 'Yes' : 'No'}</span>
        </div>
        <div class="analysis-item">
            <span>5. Chance of Getting Shortlisted:</span> <span class="${shortlistChance > 50 ? 'good' : 'bad'}">${shortlistChance}%</span>
            <p class="explanation">${shortlistChance > 50 ? 'Your resume has a good chance of standing out in a competitive job market.' : 'Your current resume might not stand out enough in a competitive job market. Consider revisiting your content and formatting to improve your chances.'}</p>
        </div>
    `;

    if (!atsOptimized) {
        analysis.innerHTML += `
            <div class="cta">
                <p>Your resume may not be ATS-optimized. Let us help you create a resume that will increase your chances of landing a job.</p>
                <button onclick="contactUs()">Get Professional Help</button>
            </div>
        `;
    }
}

function contactUs() {
    window.location.href = 'https://wa.me/+918129917227';
}

function contactWhatsApp() {
    console.log('Contacting via WhatsApp');
    // The actual redirection is handled by the href attribute in the HTML
}