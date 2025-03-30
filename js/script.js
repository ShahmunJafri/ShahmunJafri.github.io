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
  
  
  //call the needed animation here
  window.addEventListener("DOMContentLoaded", () => {
    const typewriterEl = document.getElementById("typewriter");
    if (typewriterEl) writeLoop();
  });
  