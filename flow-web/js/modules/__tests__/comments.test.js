/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import {
  CLASS_COMMENT_EMPTY,
  CLASS_COMMENT_LOADED,
  CLASS_JS_COMMENT,
  CLASS_JS_COMMENT_COUNT,
  CLASS_JS_COMMENT_PLURAL,
} from '#app/constants/classNames';
import { ID_COMMENTS_AREA } from '#app/constants/ids';

import MockThemeProvider from '#app/__mocks__/ThemeProvider';

import { CommentCount } from '#app/component/library/Article/Comments/CommentCount';

import { changeCTA, showCommentCount } from '../comments';

describe('Comments', () => {
  it.todo('postData()');
  it.todo('reAuthenticateComments()');
  it.todo('updateNickname()');
  it.todo('isValidKeyChar()');
  it.todo('createNicknameForm()');
  it.todo('initNicknameForm()');
  it.todo('checkNickname()');
  it.todo('limitCommentingHeight()');
  it.todo('addAnalyticsClickHandlers()');
  it.todo('logoutOfCommentingIfLoggedIn()');
  it.todo('isLoggedIn()');

  describe('changeCTA()', () => {
    function setup(props) {
      const { count = null } = props || {};

      const { container } = render(
        <MockThemeProvider>
          <CommentCount data-count={count} />
        </MockThemeProvider>,
      );

      changeCTA();

      return {
        wrapper: container.querySelector(`.${CLASS_JS_COMMENT}`),
        empty: container.querySelector(`.${CLASS_COMMENT_EMPTY}`),
        plural: container.querySelector(`.${CLASS_JS_COMMENT_PLURAL}`),
        count: container.querySelector(`.${CLASS_JS_COMMENT_COUNT}`),
      };
    }

    beforeAll(() => {
      global.JSGlobals = {
        viafoura: { endpoint: '', section_uuid: '' },
      };
    });

    afterAll(() => {
      delete global.JSGlobals;
    });

    it("should add a 'loaded' class and an [href] to the link", () => {
      const { wrapper } = setup();

      expect(wrapper).toHaveClass(CLASS_COMMENT_LOADED);
      expect(wrapper).toHaveAttribute('href', `#${ID_COMMENTS_AREA}`);
    });

    it('should render an empty UI when there are no comments', () => {
      const { empty, count } = setup();

      expect(count.textContent).toEqual('');
      expect(empty).toBeInTheDocument();
    });

    it('should render an empty UI when there are zero comments', () => {
      const { wrapper, count, empty } = setup({ count: 0 });

      expect(wrapper.dataset.count).toEqual('0');
      expect(count.textContent).toEqual('');
      expect(empty).toBeInTheDocument();
    });

    it('should render the current count when there is one comment', () => {
      const { empty, plural } = setup({ count: 1 });

      expect(empty).not.toBeInTheDocument();
      expect(plural.textContent).toEqual('Comment');
    });

    it('should render the current count when there are comments', () => {
      const { wrapper, empty, count, plural } = setup({ count: 10 });

      expect(wrapper.dataset.count).toEqual('10');
      expect(count.textContent).toEqual('10');
      expect(plural.textContent).toEqual('Comments');
      expect(empty).toBeNull();
    });

    it('should act upon all CommentCount components on the page', () => {
      const { container } = render(
        <MockThemeProvider>
          <CommentCount />
          <CommentCount data-count={0} />
          <CommentCount data-count={1} />
          <CommentCount data-count={2} />
        </MockThemeProvider>,
      );

      changeCTA();

      const els = container.getElementsByClassName(CLASS_JS_COMMENT);

      [...els].forEach((el) =>
        expect(el.classList.contains(CLASS_COMMENT_LOADED)).toBe(true),
      );
    });
  });

  it.todo('getCommentCount()');

  describe('showCommentCount()', () => {
    it('should update the comment count on the page', () => {
      const { container } = render(
        <MockThemeProvider>
          <CommentCount />
        </MockThemeProvider>,
      );

      const el = container.querySelector(`.${CLASS_JS_COMMENT}`);
      const countEl = container.querySelector(`.${CLASS_JS_COMMENT_COUNT}`);

      showCommentCount(10);

      expect(el.dataset.count).toEqual('10');
      expect(countEl.textContent).toEqual('10');
    });

    it('should act upon all CommentCount components on the page', () => {
      const counts = [null, 0, 1, 2];

      const { container } = render(
        <MockThemeProvider>
          {counts.map((count, i) => (
            <CommentCount key={i} data-count={count} />
          ))}
        </MockThemeProvider>,
      );

      changeCTA();

      const els = container.getElementsByClassName(CLASS_JS_COMMENT);

      [...els].forEach((el, i) => {
        expect(el.dataset.count).toEqual(counts[i]?.toString() ?? undefined);
      });
    });
  });

  it.todo('initViafora()');
  it.todo('pageHasComments()');
  it.todo('initComments()');
});
