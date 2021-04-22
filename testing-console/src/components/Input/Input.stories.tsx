import { InputBaseProps } from '../../models';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};
const Template = (args: InputBaseProps): JSX.Element => <Input {...args} />;

export const Default = Template.bind({});
