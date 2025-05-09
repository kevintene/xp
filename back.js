const backgrounds = [
    'url("backgrounds/Moon flower (Unedited Version).webp")',
    'url("backgrounds/Red moon desert.webp")',
    'url("backgrounds/Wind.webp")',
    'url("backgrounds/Vortec space.webp")',
    'url("backgrounds/Tulips.webp")',
    'url("backgrounds/Stonehenge (Getty Images Rescan).webp")',
    'url("backgrounds/Follow.webp")',
    'url("backgrounds/Azul.webp")',
    'url("backgrounds/Autumn.webp")',
    'url("backgrounds/Ascent.webp")',
    'url("backgrounds/Azul.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
    'url("backgrounds/xp.webp")',
  ];

const randomIndex = Math.floor(Math.random() * backgrounds.length);

document.body.style.backgroundImage = backgrounds[randomIndex];
