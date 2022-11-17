# react-styled-alert

react-styled-alert allows you to use react components in place of the usual alert popup, allowing you to style them however you want as well as execute code.

## Installation

```
$ npm install --save react-styled-alert
```

## Example

```jsx
// Your app
import { AlertProvider } from 'react-styled-alert';

export function App() {
  return(
    <AlertProvide>
      <Page />
      <Alert />
    </AlertProvider>
  );
}

// Your page
import { useAlert } from 'react-styled-alert';

export function Page() {
  const styledAlert = useAlert();
  return (
    <button onClick={() => styledAlert('Alert message!')}>
      Click me
    </button>
  );
}

// Your alert component
import { useAlertData } from 'react-styled-alert';

export function Alert() {
  const alert = useAlertData();
  if (alert) {
    return (
      <div>
        {alert.content}
        <button onClick={alert.onOk}>
          Ok
        </button>
      </div>
    );
  } else {
    return (
      <></>
    );
  }
}
```

## Documentation

This package comes with two hooks, `useAlert` and `useAlertData`. The first gives you a function to replace JavaScript's `alert`. You call it sending your message and two optional functions `onOk` and `onCancel`, meant to be called when the user clicks ok or cancel on the alert popup. The `useAlertData` hook gives you access to the data you sent with `useAlert`. The component is a provider, and the hooks only work when called from within it.

Internally, each call of the `useAlert` returned function fills an array with the data you sent so you can queue each alert, and the `useAlertData` hook returns the most recent one. Whenever you execute either `onOk` or `onCancel`, you will also remove their alert entry from this array.

### `AlertProvider` component

The other hooks only work when called on components rendered inside this provider.

```jsx
<AlertProvider>
  your app here
</AlertProvider>
```

### `useAlert` hook

This hook returns a function for you to use instead of JavaScript's `alert`. __Only works inside `AlertProvider`__.

```jsx
const styledAlert = useAlert();
styledAlert(
  content,
  onOk,        // Optional function to call when the user clicks ok
  onCancel     // Optional function to call when the user clicks cancel
);
```

It accepts three arguments:
- `content`
  A `ReactNode` to be the message displayed in your alert component. Can be the usual string but you can do anything with it, really.
- `onOk`
  Optional. A function to be called when the user clicks ok, supposing your alert component has an Ok button.
- `onCancel`
  Optional. A function to be called when the user clicks cancel, supposing your alert component has a Cancel button.

### `useAlertData` hook

To be used to create your alert component. This hook returns an object with the `content`, `onOk` and `onCancel` values passed to it by the `useAlert` hook, or `null` when no alert has been called yet. If no `onOk` was passed, `() => {return}` is received, and if no `onCancel` was passed, `null` is received. Don't forget that calling either removes their entire alert data from the queue. __Only works inside `AlertProvider`__.

```jsx
const alert = useAlertData();
console.log(alert);
// { content, onOk, onCancel } or null
```

## More Examples

```jsx
function StyledAlert() {
  const data = useAlertData();
  if (!data) return <></>;
  return (
    <div>
      {data.content}
      <button onClick={data.onOk}>
        Ok
      </button>
      {data.onCancel ? (
        <button onClick={data.onCancel}>
          Cancel
        </button>
      ) : (<></>)}
    </div>
  );
}
```

This component will return nothing if `useAlertData()` returns null, so whenever you use the return function of `useAlert`, it will render this component. If you call it with no `onCancel` argument, this component will only render the Ok button, otherwise it renders a Cancel button as well. You're free to make this component however you want, just make sure to call `onOk` somewhere or else you risk making alerts that never go away.

```jsx
const styledAlert = useAlert();

const handleLogout = () => {
  styledAlert(
    'Are you sure you want to logout?',
    () => logout(),
    () => {return}
  );
};
```

This is an example of a logout button code, using the `StyledAlert` example component above. When the user clicks Ok, the `logout()` function will be executed and then this alert data will be cleared, so the `StyledAlert` component will return `<></>` afterwards. Since we passed a function for `onCancel`, the cancel button will be rendered, and nothing besides clearing the popup will happen when the cancel button is clicked.

```jsx
const styledAlert = useAlert();
const [text, setText] = useState('');

const handleGetInput = () => {
  styledAlert(
    (
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    ),
    () => doSomething(text),
    () => {return}
  );
};
```

This example, also using the `StyledAlert` component above, renders an input field and once the user clicks ok, does something with it. There's also a cancel button if the user changes their mind.

## Credits

By [Rafael de Lima Bordoni](https://www.github.com/eldskald).

## License

Licensed under MIT.
