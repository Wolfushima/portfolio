export default function scrollToId(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}
