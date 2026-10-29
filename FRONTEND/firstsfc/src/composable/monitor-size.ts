import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useMonitorSize(){
    const sizes = reactive({
        browserWidth:window.innerWidth,
        mobileWidth:screen.width,
        isMobile:false
    })

    const browserResized = () => {
        sizes.browserWidth = window.innerWidth
        sizes.mobileWidth = screen.width
        sizes.isMobile = isMobile()
    }

    const isMobile = () => {
        return window.innerWidth <= 768 ? true : false
    }

    onMounted(()=>{
        window.addEventListener('resize',browserResized)
    })

    onUnmounted(()=>{
        window.removeEventListener('resize',browserResized)
    })

    return{
        ...toRefs(sizes)
    }
}