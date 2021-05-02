import React from 'react';

import { Story } from '@storybook/react';
import Text from '.';
import { InputBaseProps } from '../../models';

const Template: Story<InputBaseProps> = (args) => <Text {...args} />;

export default {
  title: 'Form/Text',
  component: Text,
  parameters: {},
};

export const Default = Template.bind({});
