import type { PianoTemplate } from '#types/piano';

export const onTemplateShow = (template: PianoTemplate) => {
  if (template.templateId === 'OTN6797XUKB0') {
    window.ga && window.ga('send', 'event', 'adBlocker', location.pathname);
  }
};
