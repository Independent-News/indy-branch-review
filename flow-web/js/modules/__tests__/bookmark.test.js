/**
 * @jest-environment jsdom
 */

import { CLASS_BOOKMARK_BUTTON } from '#app/constants/classNames';

import { InternalApi } from '#app/public/js/utils/internalApi';

import * as thatModule from '../bookmark';

jest.mock('#app/public/js/utils/internalApi');

describe('Bookmark public JS modules', () => {
  const mockButton = {
    classList: {
      contains: jest.fn(),
      add: jest.fn(),
      remove: jest.fn(),
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('updateBookmarkState()', () => {
    const mockArgs = [null, mockButton];

    beforeEach(() => {
      jest.spyOn(thatModule, 'deleteBookmark').mockImplementation();
      jest.spyOn(thatModule, 'submitBookmark').mockImplementation();
    });

    it('will call deleteBookmark with passed args if button has saved class', () => {
      mockButton.classList.contains.mockReturnValueOnce(true);
      thatModule.updateBookmarkState(...mockArgs);
      expect(thatModule.deleteBookmark).toHaveBeenCalledTimes(1);
      expect(thatModule.deleteBookmark).toHaveBeenCalledWith(...mockArgs);
      expect(mockButton.classList.contains).toHaveBeenCalledTimes(1);
      expect(mockButton.classList.contains).toHaveBeenCalledWith('saved');
    });

    it('will call submitBookmark with passed args if button does not have saved class', () => {
      mockButton.classList.contains.mockReturnValueOnce(false);
      thatModule.updateBookmarkState(...mockArgs);
      expect(thatModule.submitBookmark).toHaveBeenCalledTimes(1);
      expect(thatModule.submitBookmark).toHaveBeenCalledWith(...mockArgs);
    });
  });

  describe('deleteBookmark()', () => {
    const mockArticleId = '12345';
    const mockArgs = [mockArticleId, mockButton];

    beforeEach(() => {
      document.body.innerHTML = `
      <button class="${CLASS_BOOKMARK_BUTTON} saved" data-article-id="${mockArticleId}"></button>
    `;
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('will short circuit if button arg contains submitting class', () => {
      mockButton.classList.contains.mockReturnValueOnce(true);
      thatModule.deleteBookmark(...mockArgs);
      expect(mockButton.classList.contains).toHaveBeenCalledTimes(1);
      expect(mockButton.classList.contains).toHaveBeenCalledWith('submitting');
    });

    it('will make request to delete bookmark and update classes with local storage on successful request', async () => {
      mockButton.classList.contains.mockReturnValueOnce(false);
      InternalApi.delete.mockResolvedValueOnce({
        ok: true,
        json: jest.fn(() => Promise.resolve()),
      });
      jest.spyOn(thatModule, 'removeBookmarkLocalStorage').mockImplementation();
      await thatModule.deleteBookmark(...mockArgs);
      expect(mockButton.classList.add).toHaveBeenCalledTimes(1);
      expect(mockButton.classList.add).toHaveBeenCalledWith('submitting');
      expect(InternalApi.delete).toHaveBeenCalledTimes(1);
      expect(InternalApi.delete).toHaveBeenCalledWith(
        `bookmarks/${mockArticleId}`,
      );
      expect(mockButton.classList.remove).toHaveBeenCalledTimes(1);
      expect(mockButton.classList.remove).toHaveBeenCalledWith('submitting');
      expect(document.body.innerHTML).toMatchSnapshot();
      expect(thatModule.removeBookmarkLocalStorage).toHaveBeenCalledTimes(1);
      expect(thatModule.removeBookmarkLocalStorage).toHaveBeenCalledWith(
        mockArticleId,
      );
    });

    it('will maintain saved class and console error on unsuccessful delete request', async () => {
      jest.spyOn(console, 'error').mockImplementation();
      document.body.innerHTML = `
      <button class="${CLASS_BOOKMARK_BUTTON} saved" data-article-id="${mockArticleId}"></button>
    `;
      mockButton.classList.contains.mockReturnValueOnce(false);
      InternalApi.delete.mockResolvedValueOnce({
        ok: false,
      });
      await thatModule.deleteBookmark(...mockArgs);
      expect(mockButton.classList.remove).toHaveBeenCalledTimes(1);
      expect(mockButton.classList.remove).toHaveBeenCalledWith('submitting');
      expect(document.body.innerHTML).toMatchSnapshot();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(
        'Fetch failed: ',
        'Network response was not ok.',
      );
    });
  });
});
