export const YOUTUBE_URL = 'https://www.youtube.com/embed/';
export const VIDEO_OPTIONS = '?rel=0&autoplay=1&mute=1&controls=0&showinfo=0&loop=1&disablekb=1';
export const VIDEO_URL = (id: string): string => `${YOUTUBE_URL}${id}${VIDEO_OPTIONS}&playlist=${id}`;
