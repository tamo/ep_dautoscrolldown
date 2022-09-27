'use strict';

const scrollToDown = () => {
  const iframe = document.querySelector('iframe[name="ace_outer"]');
  const childDocument = iframe.contentDocument
    ? iframe.contentDocument
    : iframe.contentWindow.document;
  childDocument.documentElement.scrollTop = childDocument.documentElement.scrollHeight;
};

const autoScrollBtn = document.querySelector('[data-type="button"][data-key="autoscrolltodown"] a');

exports.postAceInit = (name, context) => {
  if (!autoScrollBtn) {
    return;
  }

  const {onLoad, displayButton} = context.clientVars.dAutoScrollDownSettings;

  autoScrollBtn.onclick = () => {
    autoScrollBtn.classList.toggle('selected');
  };

  const scrollBtn = document.querySelector('[data-type="button"][data-key="scrolltodown"] a');
  scrollBtn.onclick = () => {
    scrollToDown();
  };

  if (displayButton === false) {
    scrollBtn.style.display = 'none';
  }

  const isReadOnly = document.querySelector('body.readonly');

  if (onLoad === 'both') {
    autoScrollBtn.classList.add('selected');
  } else if (onLoad === 'write-only' && !isReadOnly) {
    autoScrollBtn.classList.add('selected');
  } else if (onLoad === 'off') {
    return;
  } else if (isReadOnly && onLoad !== 'write-only') {
    autoScrollBtn.classList.add('selected');
  }
};

exports.acePostWriteDomLineHTML = (name, context) => {
  if (!autoScrollBtn) {
    return;
  }

  if (autoScrollBtn.classList.contains('selected')) {
    scrollToDown();
  }
};
