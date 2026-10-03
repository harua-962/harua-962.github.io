const historyData = [
    {
        date: "2025年4月",
        event: "ZEN大学 知能情報社会学部 知能情報学科 入学"
    },
    {
        date: "2025年8月",
        event: "ZEN Study 動くWebページコンテスト 2025 夏"
    },
    {
        date: "2025年9月",
        event: "GCI 2025 Summer 修了"
    },
    {
        date: "2025年9月",
        event: 'ZEN大学 地域連携プログラム<br>"100年の歴史ある地域の拠点 共同売店をDX化 ～ICT・AI活用で「橋で渡れる沖縄の離島」の課題を探り魅力をアップデート！～"<br>Airレジの動画マニュアルを作成'
    },
    {
        date: "2026年3月～5月",
        event: "ZEN大学 地域連携プログラム 食と農の関係人口を増やす企画-戦略-立案プログラム"
    },
    {
        date: "2026年 8月",
        event: "平林金属株式会社 ネパールコーヒーSNS運用 インターン"
    }
   
];

const skillsData = [
    {
        name: "TOEIC Listening&Reading Test",
        description: "740点"
    },
    {
        name: "実用英語技能検定",
        description: "2級"
    },
    { 
        name: "HTML/CSS", 
        description: "Webアプリのコーディング," 
    },
    { 
        name: "JavaScript", 
        description: "Webアプリ開発" 
    },
    {
        name: "Python",
        description: "データ分析" 
    },
    {
        name: "Adobe Premiere Pro",
        description: "動画編集"
    },
    {
        name: "Adobe Photoshop",
        description:  "画像加工"
    },
    
    
];

const projectsData = [
    {
        imgSrc: "images/beach-timer.png",
        imgAlt: "育成タイマーのスクリーンショット",
        title: "育成タイマー",
        description: "時間をセットすると、経過に応じて植物も成長します。",
        link: "https://github.com/harua-962/growth-timer-v2",
        isExternal: true
    },
    {
        imgSrc: "images/manual.png",
        imgAlt: "動画マニュアルのスクリーンショット",
        title: "Airレジ 動画マニュアル",
        description: "大学の地域連携プログラムで作成した、Airレジの操作動画マニュアルです。機器の操作に不慣れなご高齢の店員さんが、何度も見返すことができるように分かりやすい編集を意識しました。",
        link: "project2.html",
        isExternal: false
    },
    {
        imgSrc: "images/safe-meal-shot.png",
        imgAlt: "safe-mealのスクリーンショット",
        title: "2026年2月 動くWebアプリコンテスト2026冬 視聴者特別賞受賞",
        description: "受賞作品: safe-meal",
        link: "https://github.com/harua-962/safe-meal",
        isExternal: true
    }
    
];


document.addEventListener('DOMContentLoaded', () => {
    
    renderHistory();
    renderSkills();
    renderProjects();

    setupSmoothScroll();
    setupScrollSpy();

});

function renderHistory() {
    const container = document.getElementById('history-list-container');
    if (!container) return;

    historyData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="history-date">${item.date}</span>
            <span class="history-event">${item.event}</span>
        `;
        container.appendChild(li);
    });
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;


  skillsData.forEach(skill => {
    const li = document.createElement('li');
    
    li.innerHTML = `
        <strong class="skill-item-name">${skill.name}</strong>
        <span class="skill-item-separator">...</span>
        <span class="skill-item-desc">${skill.description}</span>
    `;
    container.appendChild(li);
  });
}

function renderProjects() {
    const container = document.getElementById('project-gallery-container');
    if (!container) return;

    projectsData.forEach(project => {
        const article = document.createElement('article');
        article.className = 'project-item';

        const linkAttributes = project.isExternal 
            ? 'target="_blank" rel="noopener noreferrer"' 
            : '';

        article.innerHTML = `
            <img src="${project.imgSrc}" alt="${project.imgAlt}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" ${linkAttributes}>詳細を見る</a>
        `;
        container.appendChild(article);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('#main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#main-nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (window.pageYOffset >= sectionTop - 80) { 
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}