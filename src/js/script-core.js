!(function () {
  $(document).ready(function () {
    AOS.init({
      once: true,
    });

    //add year in copyright
    const copyYear = document.getElementById('copyYear');
    const date = new Date();
    const year = date.getFullYear();
    copyYear.innerText = year.toString();
  });
})();
