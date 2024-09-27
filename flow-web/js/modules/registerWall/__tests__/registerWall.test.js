/**
 * @jest-environment jsdom
 */

import { EVENT_REG_WALL_LOADED } from '#app/constants/customEvents';
import { ID_PIANO_REGISTER_WALL } from '#app/constants/ids';
import { CLASS_LIMITED_ACCESS_NON_PREMIUM } from '#app/constants/piano';
import * as registerWallVariants from '#app/constants/registerWallVariants';

import initReact from '#app/public/js/utils/initReact';

jest.mock('#app/public/js/utils/initReact');

describe('registerWall()', () => {
  const mockCreateRootRender = jest.fn();
  let createRoot;
  let RegisterWallRenderer;
  let log;

  beforeEach(async () => {
    jest.doMock('react-dom/client', () => ({
      __esModule: true,
      createRoot: jest.fn(),
    }));
    jest.doMock(
      '#app/component/library/Article/RegisterWall/RegisterWallRenderer',
      () => ({
        __esModule: true,
        default: jest.fn(),
      }),
    );
    jest.doMock('../../log', () => ({
      __esModule: true,
      log: jest.fn(),
    }));
    jest.spyOn(document.body, 'dispatchEvent').mockImplementationOnce();
    jest.spyOn(document, 'getElementById');

    createRoot = (await import('react-dom/client')).createRoot;
    createRoot.mockReturnValueOnce({
      render: mockCreateRootRender,
    });
    RegisterWallRenderer = (
      await import(
        '#app/component/library/Article/RegisterWall/RegisterWallRenderer'
      )
    ).default;
    log = (await import('../../log')).log;
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll(() => {
    jest.resetAllMocks();
    delete window.regWall;
  });

  it('will expose initRegWall method to window object which will dispatch the reg wall loaded event, initialize React and instantiate render method correctly', async () => {
    const mockRegWallKey = 'some-reg-wall-key';
    await import('../registerWall');
    window.regWall.render = jest.fn();
    await window.regWall.initRegWall(mockRegWallKey);
    expect(document.body.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(document.body.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(EVENT_REG_WALL_LOADED),
    );
    expect(initReact).toHaveBeenCalledTimes(1);
    expect(window.regWall.render).toHaveBeenCalledTimes(1);
    expect(window.regWall.render).toHaveBeenCalledWith(mockRegWallKey);
  });

  it('will expose render method to window object which will render the desired reg wall correctly with the required props', async () => {
    const mockRegWallKey =
      registerWallVariants.REGISTER_WALL_VARIANT_ASTERISK_LABELS;
    const mockRegWallWrapperElement = {
      dataset: { regSourceSection: 'some-reg-source-section' },
    };
    document.getElementById.mockReturnValueOnce(mockRegWallWrapperElement);
    await import('../registerWall');
    window.regWall.render(mockRegWallKey);
    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith(
      ID_PIANO_REGISTER_WALL,
    );
    expect(createRoot).toHaveBeenCalledTimes(1);
    expect(createRoot).toHaveBeenCalledWith(mockRegWallWrapperElement);
    expect(mockCreateRootRender).toHaveBeenCalledTimes(1);
    expect(mockCreateRootRender).toHaveBeenCalledWith(
      <RegisterWallRenderer
        registerWallKey={mockRegWallKey}
        regSourceSection="some-reg-source-section"
      />,
    );
    expect(log).not.toHaveBeenCalled();
  });

  it('will expose render method which not attempt to render an invalid reg wall key but console log with warning instead', async () => {
    const mockRegWallKey = 'some-invalid-reg-wall-key';
    const mockRegWallWrapperElement = {
      dataset: { regSourceSection: 'some-reg-source-section' },
    };
    jest
      .spyOn(document, 'getElementById')
      .mockReturnValueOnce(mockRegWallWrapperElement);
    await import('../registerWall');
    window.regWall.render(mockRegWallKey);
    expect(mockCreateRootRender).not.toHaveBeenCalled();
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith('Warning: Invalid register wall key.');
  });

  it('will expose initPianoTemplateRegWall method which will render a custom template at the same register wall position', async () => {
    const mockClassListAdd = jest.fn();
    window.tp = {
      template: { show: jest.fn() },
    };
    document.getElementById.mockReturnValueOnce({
      classList: { add: mockClassListAdd },
    });
    await import('../registerWall');
    const mockTemplateId = 'some-template-id';
    window.regWall.initPianoTemplateRegWall(mockTemplateId);
    expect(document.body.dispatchEvent).toHaveBeenCalledTimes(1);
    expect(document.body.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(EVENT_REG_WALL_LOADED),
    );
    expect(document.getElementById).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toHaveBeenCalledWith('main');
    expect(mockClassListAdd).toHaveBeenCalledTimes(1);
    expect(mockClassListAdd).toHaveBeenCalledWith(
      CLASS_LIMITED_ACCESS_NON_PREMIUM,
    );
    expect(window.tp.template.show).toHaveBeenCalledTimes(1);
    expect(window.tp.template.show).toHaveBeenCalledWith({
      templateId: mockTemplateId,
      displayMode: 'inline',
      containerSelector: `#${ID_PIANO_REGISTER_WALL}`,
    });
    delete window.tp;
  });
});
