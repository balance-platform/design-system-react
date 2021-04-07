# Design-System (React)

Компоненты дизайн-системы (React).

## Стек технологий:

- React
- SASS (SCSS)

## Подключение в проект

Установить зависимость с компонентами:

```
npm install https://github.com/balance-platform/design-system-react.git
```

Установить зависимость с темами:

```
npm install https://github.com/balance-platform/design-system-themes.git
```

Далее пользоваться следующим образом:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// Пока так, но в случае использования NPM можно сократить до
// import Button from 'design-system-react/Button'
import Button from 'design-system-react/src/components/Button';

// Подключить тему
import 'design-system-themes/alfa/theme.scss';

ReactDOM.render(
  <>
    <Button>Нажми меня</Button>
    <Button disabled>Меня не нажмешь</Button>
    <Button processing>А меня уже нажали</Button>
  </>,
  document.getElementById('root')
);
```

**Внимание!** Само собой нужно настроить Webpack соответствующим образом, чтобы импортируемые компоненты прогонялись через Babel (необходимость в этом отпадет при использовании NPM).

Посмотреть имеющиеся компоненты можно [тут](https://balance-platform.github.io/design-system-react).
