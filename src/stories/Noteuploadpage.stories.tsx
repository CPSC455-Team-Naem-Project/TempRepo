import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {courses} from '../constants/courses'
import Fileuploadsidebar from '../components/Fileuploadsidebar';
import Noteuploadpage from '../components/Noteuploadpage';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Noteuploadpage',
    component: Noteuploadpage,
  } as ComponentMeta<typeof Noteuploadpage>;

  const options = [
    { label: 'CPSC 310', id: 1 },
    { label: 'ECON 101', id: 2 },
  ];


  export const Primary: ComponentStory<typeof Noteuploadpage> = () => <Noteuploadpage options = {options} ></Noteuploadpage>;

