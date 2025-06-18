# 🧩 react-accessible-modal-hrnet

A lightweight, accessible and animated React modal — inspired by [jquery-modal](https://jquerymodal.com) but built for modern React projects. Perfect for forms, confirmations, alerts, and more.

---

## 🚀 Installation

```bash
npm install react-accessible-modal-hrnet
```

---

## ⚙️ Usage

```tsx
import { Modal } from "react-accessible-modal-hrnet";
import "react-accessible-modal-hrnet/dist/components/modal.css"; // Required styles

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello from the Modal!</h2>
      </Modal>
    </>
  );
}
```

---

## 🎛 Modal Props

| Prop           | Type               | Default     | Description                                                                 |
|----------------|--------------------|-------------|-----------------------------------------------------------------------------|
| `isOpen`       | `boolean`          | **required** | Whether the modal is currently open                                        |
| `onClose`      | `() => void`       | **required** | Callback triggered when modal should close                                 |
| `children`     | `React.ReactNode`  | **required** | Modal content                                                              |
| `escapeClose`  | `boolean`          | `true`       | Whether pressing `ESC` closes the modal                                    |
| `clickClose`   | `boolean`          | `true`       | Whether clicking the overlay closes the modal                              |
| `showClose`    | `boolean`          | `true`       | Whether to show the close (×) button                                       |
| `fadeDuration` | `number` (ms)      | `300`        | Animation duration in milliseconds                                         |
| `fadeDelay`    | `number` (0–2)     | `1`          | Delay before modal content fades in (multiplied by `fadeDuration`)         |
| `closeClass`   | `string`           | `""`         | Extra CSS class applied to the close button                                |
| `closeText`    | `string`           | `"×"`        | Text/label of the close button                                             |

---

## 📦 CSS

The component **inject styles automatically**.

You can override or replace the styles if needed.

---

## ♿ Accessibility

This modal includes:

- `aria-modal="true"`
- Keyboard support (tab navigation, ESC to close)
- Accessible close button
- Overlay focusable with keyboard

---

## 🧪 Coming Soon

- Focus trap inside the modal
- Scroll lock when modal is open
- ARIA labels (`aria-labelledby`, `aria-describedby`)
- Optional auto-close timer
- Custom animation classes

---

## 🛠 Contributing

Pull requests welcome if you want to improve:

- Accessibility
- Styling and theming
- Testing
- Features (focus trap, scroll lock, etc.)

---

## 📜 License

MIT © [Seb](https://github.com/Sebastienpanda)
