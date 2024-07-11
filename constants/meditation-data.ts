export interface MeditationType {
  audio: string;
  id: number;
  image: string;
  title: string;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
    audio: 'trees.mp3',
    id: 1,
    image: 'trees.webp',
    title: 'Mountains',
  },
  {
    audio: 'river.mp3',
    id: 2,
    image: 'river.webp',
    title: 'Rivers',
  },
  {
    audio: 'meditate-under-tree.mp3',
    id: 3,
    image: 'meditate-under-tree.webp',
    title: 'Sunset',
  },
  {
    audio: 'beach.mp3',
    id: 4,
    image: 'beach.webp',
    title: 'Beaches',
  },
  {
    audio: 'yosemite-stars.mp3',
    id: 5,
    image: 'yosemite-stars.webp',
    title: 'Starry Night',
  },
  {
    audio: 'waterfall.mp3',
    id: 6,
    image: 'waterfall.webp',
    title: 'Waterfall',
  },
];

export const AUDIO_FILES: { [key: string]: any } = {
  'beach.mp3': require('@/assets/audio/beach.mp3'),
  'meditate-under-tree.mp3': require('@/assets/audio/meditate-under-tree.mp3'),
  'river.mp3': require('@/assets/audio/river.mp3'),
  'trees.mp3': require('@/assets/audio/trees.mp3'),
  'waterfall.mp3': require('@/assets/audio/waterfall.mp3'),
  'yosemite-stars.mp3': require('@/assets/audio/yosemite-stars.mp3'),
};
