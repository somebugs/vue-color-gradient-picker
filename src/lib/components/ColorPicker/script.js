import Vue from 'vue';
import { Plugin } from "vue-fragment";
import VSelect from 'vue-select'

import Solid from './Solid';
import Gradient from './Gradient';

Vue.use(Plugin);

export default {
    name: "ColorPicker",

    props: {
        color: {
            type: Object,
            default: () => ({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
                hue: 0,
                saturation: 100,
                value: 100,
            })
        },
        onStartChange: {
            type: Function,
            default: () => {}
        },
        onChange: {
            type: Function,
            default: () => {}
        },
        onEndChange: {
            type: Function,
            default: () => {}
        },
    },

    components: {
        Solid,
        Gradient,
        VSelect
    },

    computed: {
        isGradient() {
            return this.colorMode !== 'Solid color'
        }
    },

    data() {
        return {
            colorMode: 'Linear gradient',
            colorOptions: ['Solid color', 'Linear gradient', 'Radial gradient'],
            gradient: {
                type: 'linear',
                degree: 0,
                points: [
                    {
                        left: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                    {
                        left: 100,
                        red: 255,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                ],
            },
        }
    },

    methods: {
        onColorTypeChange(type) {
            switch (type) {
                case 'Linear gradient':
                    type = 'linear'
                    break;
                case 'Radial gradient':
                    type = 'radial'
                    break;
            
                default:
                    type = ''
                    break;
            }
            if(!type) return
            this.gradient = {
                ...this.gradient,
                type,
            }
        }
    }
};
