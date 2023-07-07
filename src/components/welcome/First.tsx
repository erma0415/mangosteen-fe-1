import { RouterLink } from "vue-router";
import s from "./welcome.module.scss";
import { defineComponent } from "vue";
import { X } from "./X";

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <X>{{
        icon:()=><img src="../" class={s.img} />,
        title:()=><h2>会挣钱<br/>还要会省钱</h2>,
      }}
      </X>
    );
  },
});