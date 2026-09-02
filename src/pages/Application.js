import AppScreenSection from '../components/sections/AppScreenSection';
import homeVideo from '../assets/video/home_page.mp4';
import homeVideoPoster from '../assets/video/home_page-poster.jpg';
import publicVideo from '../assets/video/public_page.mp4';
import publicVideoPoster from '../assets/video/public_page-poster.jpg';
import vidsVideo from '../assets/video/vids_page.mp4';
import vidsVideoPoster from '../assets/video/vids_page-poster.jpg';
import serviceVideo from '../assets/video/service_page.mp4';
import serviceVideoPoster from '../assets/video/service_page-poster.jpg';
import userVideo from '../assets/video/user_page.mp4';
import userVideoPoster from '../assets/video/user_page-poster.jpg';

const SECTIONS = [
  {
    sectionKey: 'home',
    screenVideo: homeVideo,
    screenPoster: homeVideoPoster,
    screenLabelKey: 'appScreens.home',
    reversed: false,
  },
  {
    sectionKey: 'public',
    screenVideo: publicVideo,
    screenPoster: publicVideoPoster,
    screenLabelKey: 'appScreens.discover',
    reversed: true,
  },
  {
    sectionKey: 'vids',
    screenVideo: vidsVideo,
    screenPoster: vidsVideoPoster,
    screenLabelKey: 'appScreens.vids',
    reversed: false,
  },
  {
    sectionKey: 'services',
    screenVideo: serviceVideo,
    screenPoster: serviceVideoPoster,
    screenLabelKey: 'appScreens.service-centers',
    reversed: true,
  },
  {
    sectionKey: 'profile',
    screenVideo: userVideo,
    screenPoster: userVideoPoster,
    screenLabelKey: 'appScreens.profile',
    reversed: false,
  },
];

function Application() {
  return (
    <>
      {SECTIONS.map((section) => (
        <AppScreenSection key={section.sectionKey} {...section} />
      ))}
    </>
  );
}

export default Application;
