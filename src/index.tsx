import r2wc from "@r2wc/react-to-web-component"
import App from "./App"

const HelloWC = r2wc(App, {
  props: { name: "string" },
})


const Button: React.FC<{
  text: string
}> = ({ text }) => {
  return <h1>Hello, {text}!</h1>
}

const HelloButton = r2wc(Button, {
  props: { text: "string" },
})

customElements.define("hello-wc", HelloWC)
customElements.define("hello-button", HelloButton)