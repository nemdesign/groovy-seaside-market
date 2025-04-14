document.addEventListener('DOMContentLoaded', () => {
  // main-visual のアニメーション開始
  const mainVisual = document.getElementById('main-visual');
  setTimeout(() => {
    mainVisual.classList.add('active');
  });

  // .fade-in 要素に IntersectionObserver を適用
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.2, // 画面の20%見えたら発火
    root: null // ← これで「ブラウザ全体のスクロール」が対象になる
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 1回だけアニメするなら追加
      }
    });
  }, options);

  faders.forEach(el => observer.observe(el));
});
