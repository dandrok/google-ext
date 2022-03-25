const arr = [
  'dafran',
  'tibia',
  'overwatch',
  'kripp',
  'dogdog',
  'punio',
  'quin69',
  'kripparrian',
  'exbc',
  'ca123movies',
  '123movies',
  'movies123',
  '123',
  'movies',
]

var oldHref = document.location.href

window.onload = function () {
  var bodyList = document.querySelector('body')

  var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      console.log('mutation :>> ', mutation)
      if (oldHref != document.location.href) {
        oldHref = document.location.href

        const hrefy = window.location.href
        const bdy = document.body.innerHTML

        /* check if HTML body contain any word from arr */
        if (arr.some((el) => bdy.indexOf(el) > -1)) {
          return (location.href = 'https://www.google.com/')
        }

        /* check if href link contain any word from arr */
        if (arr.some((el) => hrefy.indexOf(el) > -1)) {
          return (location.href = 'https://www.google.com/')
        }
      }
    })
  })

  var config = {
    childList: true,
    subtree: true,
  }

  observer.observe(bodyList, config)
}
