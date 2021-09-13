const items = document.querySelectorAll(".accordion__btn");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle === 'false') {
    // let thisCollapse = this.parentNode.querySelector('.accordion__collapse');

    // collapsing(thisCollapse);
    this.setAttribute('aria-expanded', 'true');
  }
}

function collapsing(elCollapse) {
  elCollapse.classList.add('accordion__collapse--collapsing');
  let thisBody = elCollapse.querySelector('.accordion__body');
  let bodyHeight = thisBody.clientHeight;
  console.log(bodyHeight);

}

items.forEach(item => item.addEventListener('click', toggleAccordion));
