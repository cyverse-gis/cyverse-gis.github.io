import { View } from '/node_modules/uki/dist/uki.esm.js';

class Navbar extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: '/calliope/views/Navbar/template.html' },
      { type: 'json', url: '/calliope/views/Navbar/pages.json' },
      { type: 'less', url: '/calliope/views/Navbar/style.less' }
    ]);
  }
  isCurrentPath (path) {
    const noExtension = window.location.pathname.replace('.html', '');
    return noExtension === path || (path === '/' && noExtension === '/index');
  }

    menuItemsEnter.append('a')
      .classed('nav-link', true)
      .attr('href', d => d.path)
      .html(d => {
        if (this.isCurrentPath(d.path)) {
          return `${d.title} <span class="sr-only">(current)</span>`;
        } else {
          return d.title;
        }
      });
  }
}

export default Navbar;
