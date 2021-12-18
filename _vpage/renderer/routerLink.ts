import { h, defineComponent } from 'vue'
export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    const base = import.meta.env.BASE_URL || '/'
    return () =>
      h(
        'a',
        {
          ...props,
          href: props.href.startsWith('/')
            ? base + props.href.slice(1)
            : props.href,
        },
        slots,
      )
  },
})
