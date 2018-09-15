export const dom = {

  body() { return this.getByTag('body'); },
  container() { return this.getByClass('page-container'); },
  getByTag(name) { return document.getElementsByTagName(name)[0]; },
  getByClass(name) { return document.getElementsByClassName(name)[0]; },
  getByClasses(name) { return document.getElementsByClassName(name); },
  getByQuery(name) { return document.querySelector(name); },
  getByQueries(name) { return document.querySelectorAll(name); },
  getClosest(elem, selector) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) return elem;
    }
    return null;
  }

}