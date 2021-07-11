import { shallowMount } from '@vue/test-utils';
import ProjectTitle from '@/components/ProjectTitle.vue';

describe('ProjectTitle.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ProjectTitle, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
