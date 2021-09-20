const tooltip = document.querySelectorAll('.tooltip-btn');

tooltip.forEach(item => {
  let tooltipContent = item.querySelector('.tooltip-btn__content');

  tippy(item, {
    content: tooltipContent.innerHTML,
    trigger: 'click',
    arrow: true,
    allowHTML: true,
    maxWidth: 380,
    placement: 'right',
  });

  if (window.innerWidth <= 400) {
    item._tippy.setProps({maxWidth: 230})
  }

/*  const { popperInstance, options } = item._tippy
  options.placement = popperInstance.options.maxWidth = 300
  popperInstance.update()*/
});
