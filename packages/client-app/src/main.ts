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

const getButton = document.createElement('button');
getButton.type = 'button';
getButton.textContent = '겟 요청 테스트';

getButton.addEventListener('click', () => {
  fetch('http://localhost:8080/wiki').then(console.log);
});

app.append(getButton);

const postButton = document.createElement('button');
postButton.type = 'button';
postButton.textContent = '확그냥 막그냥 포스트 요청 날려버리기';

postButton.addEventListener('click', () => {
  fetch('http://localhost:8080/wiki', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keyword: '안녕하세요',
      content: '난 냐옹이다냐옹2',
    }),
  }).then(console.log);
});

app.append(postButton);
