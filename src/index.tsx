import r2wc from "@r2wc/react-to-web-component"
import App from "./App"

const HelloWC = r2wc(App, {
  props: { name: "string" },
})

customElements.define("hello-wc", HelloWC)