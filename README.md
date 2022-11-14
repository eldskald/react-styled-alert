# React-Styled-Alert

React-Styled-Alert allows you to use react components in place of the usual alert popup, allowing you to style them however you want as well as execute code.

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

This package comes with two hooks and one components that you can import.

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

To be used to create your alert component. This hook returns an object with the `content`, `onOk` and `onCancel` values passed to it by the `useAlert` hook, or `null` when no alert has been called yet. __Only works inside `AlertProvider`__.

```jsx
const alert = useAlertData();
console.log(alert);
// { content, onOk, onCancel } or null
```

Whenever you use the function returned by `useAlert`, the values you pass as arguments to it will be passed to the object returned by `useAlertData`. If you don't pass an `onOk`, the value returned here will be the `() => {return}` function, while if you don't pass an `onCancel`, the value will be `undefined`. Calling either function will also clear the `useAlertData` return values. Internally, the alert data values are actually an array and this hook gives you the last pushed value, so if you call the `useAlert` return function multiple times, all data will be queued so when you call `onOk` or `onCancel`, the data will become the next alert data on the queue.

Here's another example of how to use the `useAlertData` hook:

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

# Credits

By [Rafael de Lima Bordoni](https://www.github.com/eldskald).

# License

Licensed under MIT.
