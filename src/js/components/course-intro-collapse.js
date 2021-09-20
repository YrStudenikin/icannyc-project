const collapseBtn = document.querySelector('.course-intro__btn-detail');
const collapseCourseDetail = document.querySelector('.course-intro__collapse');

if (collapseBtn) {
  collapseBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const itemToggle = JSON.parse(this.getAttribute('aria-expanded'));
    let booleanToString = b => b.toString();

    this.setAttribute('aria-expanded', booleanToString(!itemToggle));
    collapseCourseDetail.classList.toggle('course-intro__collapse--open');
  });
}

