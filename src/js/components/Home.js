
import { templates } from '../settings.js';

class Home{
  constructor(element) {
    const thisHomePage = this;

    thisHomePage.element = element;
    thisHomePage.render(element);
  }


  render(element){
    const thisHomePage = this;

    const generatedHTML = templates.homePage(element);

    thisHomePage.dom = {
      wrapper: element,
    };
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
  }
}
export default Home;