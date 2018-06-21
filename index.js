import Vue from 'vue'

// Base component
import App from './componenta'

new Vue({ // eslint-disable-line no-new
    el: '#app',
        render: function (createElement) {
        return createElement(App)
    }
})