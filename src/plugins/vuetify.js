import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const theme = {
  primary: colors.deepOrange
}

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs'
    // mobileBreakpoint: 모바일 일때의 true가 되는 property 값도 오버라이딩 할 수 있다.
  },
  theme: {
    themes: {
      light: theme,
      dark: theme
    }
  }
});
