import { Ng2IzitoastService } from 'ng2-izitoast';

export class Utilities {
  static displayToast(type: string, message?: string, position?: string) {
    const iziToast = new Ng2IzitoastService();

    switch (type) {
      case 'success':
        iziToast.success({
          title: 'Success',
          message:
            message === undefined
              ? 'Operation completed successfully'
              : message,
          position: position ? position : 'center',
          zindex: '99999',
        });
        break;

      case 'error':
        iziToast.error({
          title: 'Error',
          message:
            message === undefined
              ? 'Something went wrong. Please try again'
              : message,
          position: position ? position : 'center',
          zindex: '99999',
        });
        break;

      case 'warning':
        iziToast.warning({
          message:
            message === undefined ? 'You forgot important data' : message,
          position: position ? position : 'center',
          zindex: '99999',
        });
        break;

      case 'info':
        iziToast.info({
          title: 'Info',
          message: message === undefined ? '' : message,
          position: position ? position : 'center',
          zindex: '99999',
        });
        break;
    }
  }

  static decamelize(str: string | undefined) {
    return str
      ? str
          .replace(/([a-z\d])([A-Z])/g, '$1 ' + '$2')
          .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 ' + '$2')
          .replace(/(_)/g, ' ')
          .toLowerCase()
      : null;
  }
}
