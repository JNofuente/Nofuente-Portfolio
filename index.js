
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth'
            });
        });
    });






document.addEventListener("DOMContentLoaded", function() {
    const leftText = document.querySelector(".left");
    
    function checkScroll() {
        const sectionPosition = leftText.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            leftText.classList.add("show");
        }
    }
    
    window.addEventListener("scroll", checkScroll);
});


/* EDUCATION   */

document.addEventListener("DOMContentLoaded", function() {
const eduText = document.querySelector(".edu-text");

function checkScroll() {
const sectionPosition = eduText.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if (sectionPosition < screenPosition) {
    eduText.classList.add("show");
}
}

window.addEventListener("scroll", checkScroll);
});





/*  ABOUT ME   */


document.addEventListener("DOMContentLoaded", function () {
let audio = document.getElementById("audio");
let progressBar = document.getElementById("progress-bar");
let playPauseBtn = document.getElementById("play-pause-btn");

function toggleAudio() {
if (audio.paused) {
    audio.play();
    playPauseBtn.src = "pauseicon.png";
    playPauseBtn.alt = "Pause";
} else {
    audio.pause();
    playPauseBtn.src = "playicon.png";
    playPauseBtn.alt = "Play";
}
}

function updateProgressBar() {
let percentage = (audio.currentTime / audio.duration) * 100;
progressBar.value = percentage;
}

function seekAudio() {
let seekTime = (progressBar.value / 100) * audio.duration;
audio.currentTime = seekTime;
}

function resetAudioControls() {
playPauseBtn.src = "playicon.png";
playPauseBtn.alt = "Play";
progressBar.value = 0;
}

playPauseBtn.addEventListener("click", toggleAudio);
audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", resetAudioControls);
progressBar.addEventListener("input", seekAudio);
});


/*      SKILLS       */

const skillsData = {
    "Basic Computer skills": {
        description: "Basic computer skills refer to fundamental knowledge and abilities needed to use a computer effectively for everyday tasks. These skills are essential in most workplaces and daily activities. Below is a breakdown of what they include:",
        tools: ["Operating System Navigation", "Typing and Keyboard Shortcuts", "Internet and Web Browsing", "Email and Communication","Basic Software Usage","Cybersecurity Awareness","Basic Troubleshooting", "Using External Devices"]
    },
    "Photo editing skills": {
        description: "Photo editing skills refer to the ability to enhance, manipulate, or transform images using various software tools. These skills range from basic adjustments like cropping and color correction to advanced techniques like retouching, compositing, and special effects.",
        tools: ["Basic Image Adjustments", "Retouching and Enhancement", "Working with Layers and Effects", "Advanced Editing Techniques", "Software Proficiency"]
    },
    
    "Video editing skills": {
        description: "Video editing skills involve the ability to cut, enhance, and arrange video clips to create a polished final product. These skills range from basic trimming to advanced effects and post-production techniques.",
        tools: ["Basic Video Cutting and Trimming", "Transitions and Effects", "Color Grading and Correction", "Audio Editing and Synchronization", "Text and Graphics Integration", "Exporting and Optimization", "Software Proficiency"]
    },

    "Basic IT Knowledge": {
        description: "Basic IT (Information Technology) knowledge refers to a fundamental understanding of computer systems, software, networks, and cybersecurity principles. These skills are essential for working with technology efficiently in both personal and professional settings.Understanding fundamental IT concepts such as networking, security, and troubleshooting.",
        tools: ["Computer Hardware & Software", "Operating Systems", "Networking Basics", "Cybersecurity Awareness", "Cloud Computing Basics","Basic Troubleshooting & Maintenance", "Basic Database and File Management", "Digital Communication Tools", "Introduction to Coding & Scripting", "IT Ethics & Best Practices"]
    },
    "Time Management": {
        description: "Time management refers to the ability to plan, organize, and control how much time is spent on different tasks to maximize productivity and efficiency. It helps individuals meet deadlines, reduce stress, and maintain a work-life balance.",
        tools: ["Prioritization of Tasks", "Planning & Scheduling", "Avoiding Procrastination", "Multitasking vs. Focused Work", "Delegation & Saying No", "Managing Interruptions & Distractions", "Tracking and Improving Time Usage", "Maintaining Work-Life Balance"]
    },
    "Problem Solving": {
        description: "Problem-solving is the ability to identify challenges, analyze possible solutions, and implement the best course of action to resolve an issue efficiently. It is a critical skill in both personal and professional settings, helping individuals navigate complex situations and make informed decisions.Analyzing and finding solutions to challenges effectively.",
        tools: ["Identifying the Problem", "Analyzing Possible Solutions", "Decision-Making", "Implementing the Solution", "Evaluating the Outcome", "Critical Thinking & Creativity", "Adaptability & Resilience", "Communication & Collaboration",]
        
        
    },
    "Effective Communication": {
        description: "Effective communication is the ability to convey ideas, thoughts, and information clearly and efficiently to ensure understanding between individuals. It involves both verbal and non-verbal skills, active listening, and adapting communication styles based on the audience. Strong communication is essential in both personal and professional settings.",
        tools: ["Verbal and Non Verbal Communication", "Active Listening", "Written Communication", "Empathy & Emotional Intelligence", "Clarity & Conciseness", "Confidence & Assertiveness", "Feedback & Conflict Resolution", "Adapting to Different Audiences", "Digital Communication"]
    },
    "Critical Thinking": {
        description: "Critical thinking is the ability to analyze, evaluate, and interpret information logically to make informed decisions. It involves questioning assumptions, considering different perspectives, and using reasoning to solve problems effectively. This skill is essential in decision-making, problem-solving, and strategic planning.",
        tools: ["Analyzing Information", "Logical Reasoning", "Questioning Assumptions", "Problem-Solving & Decision-Making", "Creativity & Innovation", "Evaluating Evidence", "Open-Mindedness & Adaptability", "Communication & Persuasion", "Ethical & Fair Judgment", "Application in Real Life"]
    }
};


document.addEventListener("DOMContentLoaded", () => {
    // Select all skill spans
    const skillItems = document.querySelectorAll(".skills-list span");
    skillItems.forEach(skill => {
        skill.addEventListener("click", function () {
            showSkillDetails(this.textContent);
        });
    });
});

function showSkillDetails(skill) {
    const container = document.getElementById("skill-description");
    const toolsContainer = document.getElementById("skill-tools");

    // Apply fade-out effect
    container.style.opacity = "0";
    container.style.transform = "translateX(-30px)";
    toolsContainer.style.opacity = "0";
    toolsContainer.style.transform = "translateX(-30px)";

    // Wait for fade-out to complete before changing content
    setTimeout(() => {
        // Clear previous content
        container.innerHTML = "";
        toolsContainer.innerHTML = "";

        // Add new description
        const newDescription = document.createElement("p");
        newDescription.textContent = skillsData[skill].description;
        container.appendChild(newDescription);

        // Add new tools list if available
        if (skillsData[skill].tools && skillsData[skill].tools.length > 0) {
            skillsData[skill].tools.forEach(tool => {
                const li = document.createElement("li");
                li.textContent = tool;
                toolsContainer.appendChild(li);
            });
        }

        // Apply fade-in effect after changing content
        setTimeout(() => {
            container.style.opacity = "1";
            container.style.transform = "translateX(0)";
            toolsContainer.style.opacity = "1";
            toolsContainer.style.transform = "translateX(0)";
        }, 50); // Small delay for smoother transition
    }, 300); // Wait for fade-out animation to complete
}
