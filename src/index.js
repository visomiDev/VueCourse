/* global Vue */

// https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
// https://vuejs.org/v2/api/#Options-Data

const vm = new Vue({
  el: "#app",
  data: {
    visible: true,
    isNotVisible: true,
    data: ["leche", "huevos", "harina", "trigo"],
    todos: {
      leche: "2L",
      huevos: "1k",
      harina: "1k",
      trigo: "1k"
    }
  },
  computed: {
    filteredTodos() {
      const { huevos, ...rest } = this.todos;
      return rest;
    }
  },
  template: `
    <div class="parent">
      <div v-if="visible">
        <h1>Esta cosa existe</h1>
      </div>
      <div v-else-if="isNotVisible">
        <h1>Esta cosa 2</h1>
      </div>
      <div v-else>
        <h1>Esta cosa no existe</h1>
      </div>

      <div v-show="visible">
        <h1>Esta cosa es visible</h1>
      </div>

      <ul>
        <li
          v-for="(value, index) in data"
          :key="index"
        >
          {{index}}: {{value}}
        </li>
      </ul>

      <ul>
        <li
          v-for="(value, key, index) in todos"
          :key="key"
        >
          {{key}}: {{value}}
        </li>
      </ul>

      <ul>
        <li
          v-for="(value, key, index) in filteredTodos"
          :key="key"
        >
          {{key}}: {{value}}
        </li>
      </ul>
    </div>
  `
});

vm.visible = true;
vm.isNotVisible = true;
