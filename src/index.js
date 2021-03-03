import Template from '@templates/Template.js';
import '@styles/main.css'
import '@styles/vars.styl'

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
  console.log('Hola aqui andamos bien pedos, bien locos')
  console.log('Chido parse')
})();
