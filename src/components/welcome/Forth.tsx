import { RouterLink } from "vue-router";
import s from "./welcome.module.scss";
import { defineComponent } from "vue";
import { X } from "./X";

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <X>{{
        icon:()=><img src="../" class={s.img} />,
        title:()=><h2>444<br/>444</h2>,
        // button:()=><><FirstAction></FirstAction></>
      }}
      </X>
    );
  },
});