import { shallowMount, createLocalVue } from '@vue/test-utils';
import BookCartHome from '@/components/BookCartHome.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('BookCartHome.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BookCartHome, {
      propsData: { msg },
      localVue,
      router
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
