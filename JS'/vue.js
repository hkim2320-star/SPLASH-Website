const app = VTTCue.createApp({
  data() {
    return {
        count: 0
    }
    }
});

app.component('counter-button', {
    template: `
    <div class="text-center">
        <button class="btn btn-primary" @click="count++">
            Clicked {{ count }} times
        </button>
    </div>
    `,
    data() {
        return {
            count: 0
        }
    }
});

app.mount('#vueApp');