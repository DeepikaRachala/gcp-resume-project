// Sample JSON content
const resumeData = {
    "title": "Deepika Rachala",
    "subtitle": "Cloud Administrator",
    "objective": "Dedicated and detail-oriented GCP Cloud Administrator with a solid foundation in network management, evidenced by a CCNA certification. Bringing 2 years of hands-on experience in Python programming and 4 years of administrative expertise, I am eager to leverage my technical skills and organizational abilities to optimize cloud infrastructure, enhance security, and drive efficient operations within a dynamic organization.",
    "contact": {
        "email": "deepikarachala92@gmail.com"
    },
    "skills": ["Network Configuration","OSPF, VPN, BGP", "Network Troubleshooting", "Python, Golang", "HTML,CSS,JS", "Bootstrap, Wordpress, Tailwind/css", "Basics of Ansible, Terraform", "Basics of Docker, K8s",  "GitHub","Practical knowledge of GCP"],
    "sections": [
        {
            "title": "EXPERIENCE",
            "items": [
                {
                    "date": "Jan 01, 2023 - Dec 12, 20203",
                    "title": "Network admin - Al Adsani Trading and Contracting - Doha, Qatar",
                    "content": "Worked as an Admin Assistance/Networking Intern, supporting office duties and managing device installation and cabling. Performed data backups, handled communication issues, and installed and troubleshot software applications. Monitored backup solutions and resolved mail server issues, ensuring data integrity and efficient office operations."
                },
                {
                    "date": "Feb, 2020 - Dec, 2021",
                    "title": "Lead Trainer - Qatar Robotics Club - Doha, Qatar",
                    "content": "Served as Lead STEM Trainer, creating and delivering a comprehensive curriculum in Python, Roblox, web development, AI, and robotics for grades 6-12. Developed digital content, video tutorials, and summer courses, while managing online classes and assessments for over 20 students via Zoom during COVID. Trained faculty on STEM curriculum and communicated with parents about student progress."
                },
                {
                    "date": "Sep, 2019 - Jan, 2020",
                    "title": "Coding trainer - Geek Express - Doha, Qatar",
                    "content": "Worked as part-time STEM Educator at Geek Express to teach kids coding and App Development at their respective schools as part of their Extra Curricular Activities. Delivered STEM-oriented instruction through project-based learning using multiple platform (APP Development, Robotics, 3D designing, AR/VR Skills, Gaming, Motion Design, Data Science)"
                },
                {
                    "date": "April, 2019 - June, 2019",
                    "title": "Loyola International School (Doha, Qatar)",
                    "content": "Worked as admin for Loyola International school. With time and effort my role has stabilized core functionality of school. Maintained Student record database for complete school having strength of 800 students. Handled student related issues and parents’ queries."
                },
                {
                    "date": "June, 2018 - Jan, 2019",
                    "title": "Admin and Coding trainer - Savoy Education Center - Doha, Qatar",
                    "content": "Managed center having strength of above 50 students including, scheduling of monthly programs and promoting organization through social media. Organized, assessed and created a Student record management system for handling courses and fee details."
                },
                {
                    "date": "Feb, 2015 - Aug, 2017",
                    "title": "Administrative Assistant - Scribble Advertising Company - Doha, Qatar",
                    "content": "Delivered firsthand support to senior leaders and decision makers while managing a variety of key functions including oversight of attendance system, uploading corporate documents to the cloud and composing letters/presentations for the company."
                }
            ]
        },
        {
            "title": "EDUCATION",
            "items": [
                {
                    "date": "Mar, 2009 - April, 2013",
                    "title": "Bachelor’s in Information Technology - School Name - JNTU -Hyderabad, India"
                },
                {
                    "date": "Jan 2024 - April 2024",
                    "title": "CCNP Enterprise Encor training - Aplha Training center - Hyderabad, Country"
                }
            ]
        }
    ]
};

// Function to populate the HTML with JSON data
function populateResume(data) {
    document.getElementById('title').textContent = data.title;
    document.getElementById('subtitle').textContent = data.subtitle;
    document.getElementById('objective').textContent = data.objective;
    

    const contactInfo = data.contact;
    document.getElementById('contact-info').innerHTML = `
        Email: ${contactInfo.email}
    `;

    const skillSet = document.getElementById('skillgroup')
    data.skills.forEach(item => {
        const itemDiv = document.createElement('div')
        itemDiv.className = 'skills'

        const itemName = document.createElement('h3')
        itemName.textContent = item
        itemDiv.appendChild(itemName)
        skillSet.appendChild(itemDiv)
    })
    const sectionsDiv = document.getElementById('group');
    data.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'custom-section';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);

        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const itemTitle = document.createElement('p');
            itemTitle.className = 'item-title';
            itemTitle.textContent = item.title;
            itemDiv.appendChild(itemTitle);

            const itemDate = document.createElement('p');
            itemDate.className = 'item-date';
            itemDate.textContent = item.date;
            itemDiv.appendChild(itemDate);

            if (item.content) {
                const itemContent = document.createElement('div');
                itemContent.className = 'item-content';
                itemContent.innerHTML = item.content.replace(/\n/g, '<br>');
                itemDiv.appendChild(itemContent);
            }

            sectionDiv.appendChild(itemDiv);
        });

        sectionsDiv.appendChild(sectionDiv);
    });
}

// Populate the resume on page load
populateResume(resumeData);
