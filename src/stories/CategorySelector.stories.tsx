import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategorySelctor from '../components/CategorySelector';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CategorySelctor',
    component: CategorySelctor,
  } as ComponentMeta<typeof CategorySelctor>;

  export const Primary: ComponentStory<typeof CategorySelctor> = () => <CategorySelctor categories={["CPSC 221", "ECON 100", "MATH 101"]}></CategorySelctor>;

