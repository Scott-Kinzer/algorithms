const STATE = {
  fillfilled: 'fullfilled',
  rejected: 'rejected',
  pending: 'pending'
};

class MyPromise {
  thenCbs: any[];
  catchCbs: any[];
  private state: string = STATE.pending;
  private value: string;
  onSuccessBind = this.onSuccess.bind(this);
  onFailBind = this.onFail.bind(this);

  constructor(cb: (onSuccess: (value: any) => void, onFail: (value: any) => void) => void) {
    this.thenCbs = [];
    this.catchCbs = [];
    this.state = '';
    this.value = '';

    try {
      cb(this.onSuccess, this.onFail);
    } catch (e) {
      this.onFail(e);
    }
  }

  private runCallbacks() {
    if (this.state === STATE.fillfilled) {
      this.thenCbs.forEach((cb) => {
        cb(this.value);
      });

      this.thenCbs = [];
    }

    if (this.state === STATE.rejected) {
      this.catchCbs.forEach((cb) => {
        cb(this.value);
      });

      this.catchCbs = [];
    }
  }

  private onSuccess(value: any) {
    if (this.state !== STATE.pending) return;
    this.value = value;
    this.state = STATE.fillfilled;
    this.runCallbacks();
  }
  private onFail(value: any) {
    if (this.state !== STATE.pending) return;
    this.value = value;
    this.state = STATE.rejected;
    this.runCallbacks();
  }

  then(thenCb: any, catchCb: any) {
    if (thenCb !== null) this.thenCbs.push(thenCb);
    if (catchCb !== null) this.catchCbs.push(catchCb);

    this.runCallbacks();
  }

  catch(cb: any) {
    this.then(undefined, cb);
  }
}
