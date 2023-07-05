import { shallow } from "enzyme"
import Button from "./../index"
import { Primary, Secondary, Tertiary } from "./../stories"

// Button
test("renders a Button Button component with children", () => {
	const wrapper = shallow(<Button>Click me</Button>)
	expect(wrapper.text()).toContain("Click me")
})

test("fires a click event", () => {
	const handleClick = jest.fn()
	const wrapper = shallow(<Button onClick={handleClick}>Click me</Button>)
	wrapper.simulate("click")
	expect(handleClick).toHaveBeenCalledTimes(1)
})

// Button
test("renders a Button Primary component with children", () => {
	const wrapper = shallow(<Primary>Click me</Primary>)
	expect(wrapper.text()).toContain("Click me")
})

test("fires a click event", () => {
	const handleClick = jest.fn()
	const wrapper = shallow(<Primary onClick={handleClick}>Click me</Primary>)
	wrapper.simulate("click")
	expect(handleClick).toHaveBeenCalledTimes(1)
})

// Secondary
test("renders a Secondary Button component with children", () => {
	const wrapper = shallow(<Secondary>Click me</Secondary>)
	expect(wrapper.text()).toContain("Click me")
})

test("fires a click event", () => {
	const handleClick = jest.fn()
	const wrapper = shallow(<Secondary onClick={handleClick}>Click me</Secondary>)
	wrapper.simulate("click")
	expect(handleClick).toHaveBeenCalledTimes(1)
})

// Tertiary
test("renders a Tertiary Button component with children", () => {
	const wrapper = shallow(<Tertiary>Click me</Tertiary>)
	expect(wrapper.text()).toContain("Click me")
})

test("fires a click event", () => {
	const handleClick = jest.fn()
	const wrapper = shallow(<Tertiary onClick={handleClick}>Click me</Tertiary>)
	wrapper.simulate("click")
	expect(handleClick).toHaveBeenCalledTimes(1)
})
