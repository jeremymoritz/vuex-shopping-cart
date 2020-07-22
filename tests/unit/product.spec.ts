import { shallowMount, createLocalVue } from '@vue/test-utils';
import Product from '@/components/Product.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Product.vue', () => {
  it('renders props when passed', () => {
    const title = 'fake title';
    const author = 'fake author';
    const image = {
      url: 'fake_url',
      width: 543,
      height: 232
    };
    const price = 12345;
    const quantityInCart = 5;
    const wrapper = shallowMount(Product, {
      propsData: { title, author, image, price, quantityInCart },
      localVue,
      router
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(author);
  });
});
