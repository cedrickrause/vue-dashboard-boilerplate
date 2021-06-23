import { shallowMount } from '@vue/test-utils';
import Title from '@/components/Title.vue';

describe('Title.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Title, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
