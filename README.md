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

## Demo

Here is a [codesandbox demo](https://codesandbox.io/p/sandbox/react-styled-alert-demo-o5xwo8) with some code and how it looks.

## Credits

By [Rafael de Lima Bordoni](https://www.github.com/eldskald).

## License

Licensed under MIT.
