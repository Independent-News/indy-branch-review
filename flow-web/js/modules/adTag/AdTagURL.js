export class AdTagURL extends URL {
  constructor(url) {
    super(url);
    const cust = super.searchParams.get('cust_params') || '';
    this._custParams = new URLSearchParams(cust || '');
  }

  get cust() {
    return this._custParams.toString();
  }

  set cust(cust) {
    this._custParams = new URLSearchParams(cust || '');
  }

  get custParams() {
    return this._custParams;
  }

  get search() {
    super.searchParams.set('cust_params', this._custParams.toString());
    return super.searchParams.toString();
  }

  set search(search) {
    super.search = search;
    const cust = super.searchParams.get('cust_params') || '';
    this._custParams = new URLSearchParams(cust || '');
  }

  toString() {
    super.searchParams.set('cust_params', this._custParams.toString());
    return super.toString();
  }
}
