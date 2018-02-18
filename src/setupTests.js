import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//this file configures enzyme-adapter, the file name is handled from create-react-app
//the dev server is looking for with file and run it before the tests
//we no more have to eject the project to achieve enzyme configuration
configure({adapter: new Adapter()});