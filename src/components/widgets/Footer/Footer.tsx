import styles from './styles.module.scss';
import A1Icon from '@/assets/icons/social-media/a1.svg';
import LifeIcon from '@/assets/icons/social-media/life.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import TelegramIcon from '@/assets/icons/social-media/telegram1.svg';
import MailIcon from '@/assets/icons/mail.svg';
import MessageIcon from '@/assets/icons/message.svg';
import VkIcon from '@/assets/icons/social-media/vk.svg';
import InstagramIcon from '@/assets/icons/social-media/instagram.svg';
import YoutubeIcon from '@/assets/icons/social-media/youtube.svg';
import TikTokIcon from '@/assets/icons/social-media/tiktok.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contacts__container}>
          <div className={styles.contacts}>
            <div className={styles.contact__item}>
              <A1Icon />
              <span>+375 29 302 10 21</span>
            </div>
            <div className={styles.contact__item}>
              <LifeIcon />
              <span>+375 25 502 10 21</span>
            </div>
            <div className={styles.contact__item}>
              <PhoneIcon />
              <span>+375 17 302 10 21</span>
            </div>
            <div className={styles.contact__item}>
              <TelegramIcon />
              <a
                href="https://t.me/my21vekby"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
            <div className={styles.contact__item}>
              <MailIcon />
              <a href="mailto:21@21vek.by">Почта</a>
            </div>
            <div className={styles.contact__item}>
              <MessageIcon />
              <a href="/contact-form">Написать нам</a>
            </div>
          </div>
        </div>

        <div className={styles.socials}>
          <div className={styles['socials__icon-wrapper']}>
            <a
              href="https://vk.com/21vek_by"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VkIcon />
            </a>
          </div>
          <div className={styles['socials__icon-wrapper']}>
            <a
              href="https://www.instagram.com/21vek.by/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className={styles['socials__icon-wrapper']}>
            <a
              href="https://www.youtube.com/channel/UChNfLMJmxWcaMy1oPxxSvog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
          </div>
          <div className={styles['socials__icon-wrapper']}>
            <a
              href="https://t.me/my21vekby"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </div>
          <div className={styles['socials__icon-wrapper']}>
            <a
              href="https://www.tiktok.com/@21vek.by"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
