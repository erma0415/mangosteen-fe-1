import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
        <div class={s.wrapper}>
            <header>
                <img src="" alt="" />
                <h1>山竹记账</h1>
            </header>
            <main>
                <RouterView name="main" />
            </main>
            <footer>
                <RouterView name="footer" />
            </footer>
        </div>
    );
  },
});