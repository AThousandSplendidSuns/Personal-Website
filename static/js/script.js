document.addEventListener('DOMContentLoaded', function () {
  var loading = document.getElementById('zyyo-loading');
  if (loading) {
    window.setTimeout(function () {
      loading.style.opacity = '0';
    }, 180);
  }

  document.querySelectorAll('.projectItem').forEach(function (item) {
    item.addEventListener('pointerdown', function () {
      item.classList.add('pressed');
    });
    item.addEventListener('pointerup', function () {
      item.classList.remove('pressed');
    });
    item.addEventListener('pointerleave', function () {
      item.classList.remove('pressed');
    });
  });
});
