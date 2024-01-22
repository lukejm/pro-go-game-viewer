import white from '../assets/white.svg';

function Move(locationId, img) {
  const el = document.getElementById(locationId);
  el.style.backgroundImage = `url({white})`;
}

export default Move;