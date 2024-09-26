const messageSuccess = document.querySelector('.message-success');
const input: HTMLInputElement | null = document.querySelector('.input-sar');
const copyBtn: HTMLButtonElement | null = document.querySelector('.btn-copy');
const permutiveBtn = document.querySelector('.btn-permutive');

function copy() {
  input?.select();
  document.execCommand('copy');
  if (input && input.value !== '') {
    if (copyBtn) {
      copyBtn.textContent = 'Copied';
      copyBtn.classList.add('success');
    }
    messageSuccess?.classList.add('animating');
  }
}

function perId() {
  if (input) {
    input.value = window.permutive?.context?.user_id || '';
    if (input.value.length > 0) {
      input.disabled = false;
      if (copyBtn) {
        copyBtn.disabled = false;
      }
    }
  }
}

// removes animating class once animation finished to fire animation again
messageSuccess?.addEventListener(
  'animationend',
  () => messageSuccess?.classList.remove('animating'),
);

copyBtn?.addEventListener('click', copy);

permutiveBtn?.addEventListener('click', perId);
