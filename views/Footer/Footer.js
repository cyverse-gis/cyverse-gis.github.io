import { View } from '../../calliope/node_modules/uki/dist/uki.esm.js';

class Footer extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: '/calliope/views/Footer/template.html' },
      { type: 'less', url: '/calliope/views/Footer/style.less' }
    ]);
  }
  setup () {
    this.d3el.html(this.resources[0])
      .classed('footer', true)
      .classed('bg-dark', true);
  }
}

export default Footer;
