import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const CONTACT_EMAIL = 'info@dapet.app';

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">{t('pages.about.contactNameLabel')}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={t('pages.about.contactNamePlaceholder')}
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">{t('pages.about.contactEmailLabel')}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder={t('pages.about.contactEmailPlaceholder')}
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">{t('pages.about.contactMessageLabel')}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder={t('pages.about.contactMessagePlaceholder')}
        />
      </div>
      <button type="submit" className="contact-submit">
        {t('pages.about.contactSubmit')}
      </button>
    </form>
  );
}

export default ContactForm;
