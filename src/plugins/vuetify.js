import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs'
    // mobileBreakpoint: 모바일 일때의 true가 되는 property 값도 오버라이딩 할 수 있다.
  }
});
