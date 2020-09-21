export const handleShareURL = (title, url) => {
  if (navigator.canShare && navigator.canShare({
    title,
    url
  })) {
    navigator.share({
      title,
      url
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch(console.error);
  } else {
    navigator.clipboard.writeText(url);
    window.open(url, '_blank');
  }
}