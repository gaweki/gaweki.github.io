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
    navigator.clipboard.writeText(url).then(function () {
      console.log('Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}