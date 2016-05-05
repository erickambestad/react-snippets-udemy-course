import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use de 'describe' to group together similar test
describe('App', () => {

    let component;

    beforeEach(() => {
        component  = renderComponent(App);
    });

    it('shows a comment box', () => {

        expect(component.find('.CommentBox')).to.exist;

    });

    it('shows a comment list', () => {

        expect(component.find('.CommentList')).to.exist;

    });

});
