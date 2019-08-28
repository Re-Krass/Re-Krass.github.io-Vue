import { shallowMount } from "@vue/test-utils";
import Window from "@/components/Window.vue";

test("renders when passed visible prop as true", () => {
    const wrapper = mount(Modal, {
        propsData: {
            visible: true
        }
    });
});
test("renders when passed visible prop as true", () => {
    const wrapper = mount(Modal, {
        propsData: {
            visible: true
        }
    });
    expect(wrapper.isEmpty()).toBe(false);
});

// describe("Window.vue", () => {
//     // Now mount the component and you have the wrapper
//     const wrapper = shallowMount(window);

// it("renders the correct markup", () => {
//     expect(wrapper.html()).toContain('<span class="count">0</span>');
// });

// // it's also easy to check for the existence of elements
// it("has a button", () => {
//     expect(wrapper.contains("button")).toBe(true);
// });

// it("button should increment the count", () => {
//     expect(wrapper.vm.count).toBe(0);
//     const button = wrapper.find("button");
//     button.trigger("click");
//     expect(wrapper.vm.count).toBe(1);
// });
// });
