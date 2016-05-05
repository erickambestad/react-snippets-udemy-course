import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

// Use de 'describe' to group together similar test
describe('CommentList', () => {

    let component;

    beforeEach(() => {
        const props = { comments: ['New comment', 'Other comment'] };
        component =  renderComponent(CommentList, null, props);
    });

    it('shows a LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('New comment');
        expect(component).to.contain('Other comment');
    });

});
