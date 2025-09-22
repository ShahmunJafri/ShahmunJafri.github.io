function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = [
    'programming.',
    'weightlifting.',
    'hiking.',
    'cooking.',
];
  
  const el = document.getElementById("typewriter");
  let sleepTime = 100;
  let curPhraseIndex = 0;

  //typewriting animation
  async function writeLoop() {
    while (true) {
      let curWord = phrases[curPhraseIndex];
  
      // Type out
      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }
  
      await sleep(sleepTime * 10);
  
      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }
  
      await sleep(sleepTime * 5);
  
      curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
  }

  const projectArray = [
    {
      category: "Computer Science",
      projects: [
        "Custom Shell", 
        "Currency Exchange", 
        "Custom Heap Allocator",
        "Assembly Project"
      ]
    },
    {
      category: "Data Science",
      projects: [
        "California Wildfire Project",
        "Number Recognition"
      ]
    },
    {
      category: "Apps",
      projects: [
        "Printing Company Database"
       ]
    }
  ];


  function formatSlug(title) {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]/g, "");
  }
  
  function renderProjects(projectArray) {
    const container = document.getElementById("project-columns");
    container.innerHTML = ""; 
  
    projectArray.forEach(({ category, projects }) => {
      const section = document.createElement("section");
      section.className = "project-category";
  
      const heading = document.createElement("h3");
      heading.textContent = category;
      section.appendChild(heading);
  
      if (projects.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Coming soon...";
        section.appendChild(p);
      } else {
        const thumbGrid = document.createElement("div");
        thumbGrid.className = "project-thumbnails";
        
        projects.forEach(title => {
          const slug = formatSlug(title);
          const a = document.createElement("a");
          a.href = `projects/${slug}/`;
          a.className = "project-thumbnail";
          
          const container = document.createElement("div");
          container.className = "thumbnail-image-container";
          
          const img = document.createElement("img");
          img.src = `images/${slug}.png`;
          img.alt = title;
          
          const overlay = document.createElement("div");
          overlay.className = "thumbnail-title";
          overlay.textContent = title;
          
          container.appendChild(img);
          container.appendChild(overlay);
          a.appendChild(container);
          
          thumbGrid.appendChild(a);
        });    
        section.appendChild(thumbGrid);        
      }
      container.appendChild(section);
    });
  }
  

  
  window.addEventListener("DOMContentLoaded", () => {
    const typewriterEl = document.getElementById("typewriter");
    const projects = document.getElementById("projects");
    if (typewriterEl) writeLoop();

    if(projects) renderProjects(projectArray);
  });
  