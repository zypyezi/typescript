
## typescript + vue

```
    demo1 : 直接使用 ts文件
    
    demo2 : 使用.vue 文件的形式
        1. script 标签上需要加 lang = "ts" 表明使用typescript语法
        2. import文件时， 默认拓展名为ts， 所以需要显式表明 .vue文件
        3. export default Vue.extend({ })
        4. 需要添加vue-shims.d.ts 文件去告知typescript 如何去处理.vue文件

    demo3 ： 使用修饰符 .vue 文件
        1. 使用到vue-property-decorator 包， 【vue-class-component 是vue-property-decorator 里被引入的依赖】
        2. js部分 语法差异较大， 详见下方说明 
        3. tsconfig.json中需要设置 experimentalDecorators 为true

```





```
    vue-property-decorator 详细使用方法：

    @Component (from vue-class-component)
    @Prop
    @Model
    @Watch
    @Emit
    @Inject
    @Provide
    Mixins (the helper function named mixins defined at vue-class-component)
    
    // 注意修饰器放的位置
     @Component({
        components:{
            componentA,
            componentB,
        },
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        }
    })

    export default class HelloDecorator extends Vue {
        @Prop(String) propA:string;
        
        @Prop([String,Number]) propB:string|number;
        
        @Prop({
            type: String, // type: [String , Number]
            default: 'default value', // 一般为String或Number
            //如果是对象或数组的话。默认值从一个工厂函数中返回
            // defatult: () => {
            //     return ['a','b']
            // }
            required: true,
            validator: (value) => {
                return [
                'InProcess',
                'Settled'
                ].indexOf(value) !== -1
            }
        })
        propC:string;

    }


```