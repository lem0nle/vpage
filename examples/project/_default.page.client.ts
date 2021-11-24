import { setupClientRouter } from 'vpage/router'
setupClientRouter({
  onTransitionStart() {
    console.log('start transition')
  },
  onTransitionEnd() {
    console.log('end transition')
  },
})
