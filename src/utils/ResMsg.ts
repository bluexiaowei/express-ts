export default class ResMsg {
  success = true;
  message = "";
  code = "";
  data: undefined;
  constructor(success: boolean, params: any, code?: string) {
    this.success = success;

    if (this.success) {
      this.data = params;
    } else {
      this.message = params;
    }

    this.code = code || "";
  }
}
