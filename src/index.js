/* global Vue */

// https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
// https://vuejs.org/v2/api/#Options-Data

Vue.directive("is-danger", {
  bind(el) {
    el.classList.add("is-danger");
  },
  inserted(el) {
    console.log("inserted", el);
    el.style.color = "white";
  },
  update(el) {
    console.log("updated", el);
  },
  componentUpdated(el) {
    console.log("updated", el);
  },
  unbind(el) {
    console.log("unbided", el);
  }
});

Vue.mixin({
  beforeCreate() {
    console.log("global beforeCreate");
  }
});

const mixin1 = {
  beforeCreate() {
    console.log("before create mixin");
  },
  data() {
    return {
      nameFromMixin: ""
    };
  },
  methods: {
    mixinMethod() {
      console.log("mixin method");
    }
  }
};

Vue.component("list", {
  name: "list",
  description: "Basic list",
  mixins: [mixin1],
  props: {
    label: {
      type: String
    }
  },
  template: `
    <div>
      <slot name="before-label"/>
      <h2 style="color: red">{{label}}</h2>
      <slot name="after-label"/>
      <slot/>
    </div>
  `
});

const ListItem = {
  name: "ListItem",
  mixins: [mixin1],
  props: {
    item: {
      type: String
    }
  },
  template: `
    <div style="color: blue">
      {{item}}
      <slot/>
    </div>
  `
};

Vue.component("list-item", ListItem);

const vm = new Vue({
  el: "#app",
  name: "App",
  description: "Main app",
  components: {},
  props: [],
  directives: {
    "color-text": {
      bind(el, binding) {
        el.style.color = binding.value;
      }
    }
  },
  data: {
    name: "Michael",
    lastName: "Villalba"
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  },
  beforeCreate() {
    console.log("beforeCreated");
    console.log(this);
  },
  created() {
    console.log("created");
    console.log("this", this.person);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    console.log(this);
  },
  destroyed() {
    console.log("destoyed");
    console.log(this);
  },
  methods: {
    printName() {
      console.warn(this.fullName);
    }
  },
  watch: {
    name(newValue) {
      console.log("newValue:", newValue);
    }
  },
  actived() {},
  errorCaptured(error, component, info) {
    return false;
  }
});

const vm2 = new Vue({
  el: "#app2",
  data: {
    name: "Fulanito",
    lastName: "De Tal"
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  }
});
