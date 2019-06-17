import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './Editor';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe("Editor", () => {
  
});