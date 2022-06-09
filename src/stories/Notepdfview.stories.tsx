import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {courses} from '../constants/courses'
import Fileuploadsidebar from '../components/Fileuploadsidebar';
import Noteuploadpage from '../components/Noteuploadpage';
import Notepdfview from '../components/Notepdfview';
import {MyDocument} from '../../testData/testPDF2'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Notepdfview',
    component: Notepdfview,
  } as ComponentMeta<typeof Notepdfview>;

  const options = [
    { label: 'CPSC 310', id: 1 },
    { label: 'ECON 101', id: 2 },
  ];

  let testPDF = "../../testData/testPDF.pdf"

  export const Primary: ComponentStory<typeof Notepdfview> = () => <Notepdfview options = {options} pdfFilePath={MyDocument}></Notepdfview>;

  