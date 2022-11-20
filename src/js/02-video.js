import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setTimeStopPlayer = (event) => {
    const timeStopPlayer = event.seconds;
    localStorage.setItem('videoplayer-current-time', timeStopPlayer);
}

player.on('timeupdate', throttle(setTimeStopPlayer, 1000));


const newTimePlayer = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(newTimePlayer);

 