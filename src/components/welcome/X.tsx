import s from "./welcome.module.scss";
import { defineComponent, useSlots } from "vue";

export const X = defineComponent({
  setup: (props, context) => {
    const {slots} = context; 
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {/* <img src="../" class={s.img} />
          <h2>会挣钱<br/>还要会省钱</h2> */}
            {slots.icon?.()}
            {slots.title?.()}
        </div>
      </div>
    );
  },
});