import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Noteteaser from '../components/Noteteaser';
import { faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons'


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Noteteaser',
    component: Noteteaser,
  } as ComponentMeta<typeof Noteteaser>;

  export const Image: ComponentStory<typeof Noteteaser> = () => <Noteteaser iconType={faImage} title="Syllabus" categories={["CPSC 221"]}></Noteteaser>;

  export const PDF: ComponentStory<typeof Noteteaser> = () => <Noteteaser iconType={faFilePdf} title="Syllabus" categories={["Econ 100"]}></Noteteaser>;