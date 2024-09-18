import getSubsEVarsFromEventData from '../getSubsEVarsFromEventData';

describe('getSubsEVarsFromEventData()', () => {
  const mockSubEVars = {
    subscription_package: 'test-sub-package',
    subscription_length: 'test-sub-length',
    subscription_price: 'test-sub-price',
    marketing_opt_in: true,
    selling_page_variant: 'single-prop',
  };

  it('will return correct object of eVars based on inputted data', () => {
    const result = getSubsEVarsFromEventData(mockSubEVars);
    expect(result).toMatchInlineSnapshot(`
        {
          "eVar43": "test-sub-package",
          "eVar44": "test-sub-length",
          "eVar45": "test-sub-price",
          "eVar48": "Opt in",
        }
      `);
  });
});
