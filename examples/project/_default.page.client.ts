import { useRouter } from 'vpage/router'
useRouter({
  onTransitionStart() {
    console.log('start transition')
  },
  onTransitionEnd() {
    console.log('end transition')
  },
})
