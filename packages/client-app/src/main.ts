import './style.css';
import typescriptLogo from './typescript.svg';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

const button = document.createElement('button');
button.textContent = '확그냥 막그냥 포스트 요청 날려버리기';

button.addEventListener('click', () => {
  fetch('http://localhost:8080/wiki', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: '난 냐옹이다냐옹',
    }),
  }).then(console.log);
});

app.append(button);
