import { ref } from '@vue/reactivity'
// comment out the above import to make the issue disappear
import 'vue' // This import is necessary to reproduce the issue

const r = ref(100)
//    ^? Ref<any>

// @ts-expect-error should be an error
r.value = 'error'
