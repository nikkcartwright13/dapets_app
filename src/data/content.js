import businessHero from '../assets/img/main_picture.png';
import iconVeterinary from '../assets/img/vet_service_center_veterinary.png';
import iconPetStore from '../assets/img/vet_service_center_pet_store.png';
import iconGrooming from '../assets/img/vet_service_center_grooming.png';
import iconHotel from '../assets/img/vet_service_center_hotel.png';
import iconDogWalker from '../assets/img/vet_service_center_dog_walker.png';

// Text for these lives in src/locales/*.json, keyed by `key` below
// (see features.items.<key>, appScreens.<key>, serviceCenters.categories.<key>).

export const FEATURES = [
  { key: 'profile', color: 'var(--color-primary)' },
  { key: 'groups', color: 'var(--color-green)' },
  { key: 'listings', color: 'var(--color-error)' },
  { key: 'services', color: 'var(--color-secondary)' },
  { key: 'feed', color: 'var(--color-primary)' },
  { key: 'chat', color: 'var(--color-green)' },
];

export const BUSINESS_HERO = businessHero;

export const SERVICE_CATEGORIES = [
  { key: 'veterinary', icon: iconVeterinary },
  { key: 'pet-store', icon: iconPetStore },
  { key: 'grooming', icon: iconGrooming },
  { key: 'hotel', icon: iconHotel },
  { key: 'dog-walker', icon: iconDogWalker },
];

export const SERVICE_CENTER_BENEFITS = [
  { key: 'stats', icon: '📊' },
  { key: 'loyalty', icon: '⭐' },
  { key: 'reach', icon: '🎯' },
  { key: 'retention', icon: '❤️' },
  { key: 'promotion', icon: '📣' },
  { key: 'ads', icon: '📱' },
  { key: 'tools', icon: '🛠️' },
];
