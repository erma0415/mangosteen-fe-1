import { RouterLink } from "vue-router";
import s from "./welcome.module.scss";
import { defineComponent } from "vue";

export const ThirdAction = defineComponent({
  setup: (props, context) => {
    return () => (
        <div class={s.actions}>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
        </div>
    );
  },
});