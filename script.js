// 公式LINEのURL：決まったら、ここに入れる（例：'https://lin.ee/xxxxxxx'）。空のあいだは、お申込みのブロックに移動する（HTML側のhrefも同じURLにしてある）
var LINE_URL = 'https://lin.ee/ayQNJZg';

(function () {
  if (LINE_URL) {
    document.querySelectorAll('a[data-line]').forEach(function (a) {
      a.href = LINE_URL;
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  // スマホ下部の固定ボタンは、ページ内にお申込みボタンが見えているあいだは隠す
  var bar = document.getElementById('floatCta');
  if (!bar || !('IntersectionObserver' in window)) return;
  var seen = new Set();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) seen.add(e.target); else seen.delete(e.target); });
    bar.classList.toggle('is-hidden', seen.size > 0);
  });
  document.querySelectorAll('main .btn').forEach(function (el) { io.observe(el); });
})();
