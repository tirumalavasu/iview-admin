import directive from './directives'

const importDirective = Vue => {
   /**
    * Drag and drop instructions v-draggable="options"
    * options = {
    * trigger: /here passed in as a drag and drop trigger CSS selector /,
    * body: / here passes in the CSS selector / that needs to move the container /,
    * recover: / Is it restored to its original position after the end of dragging /
    * }
    */
   Vue.directive('draggable', directive.draggable)
   /**
    * clipboard directive v-draggable="options"
    * options = {
    * value: / Use the value of the v-model binding in the input box /,
    * success: / callback after successful copy /,
    * error: /callback after copy failure /
    * }
    */
   Vue.directive('clipboard', directive.clipboard)
}

export default importDirective