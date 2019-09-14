
import { action, observable } from 'mobx';
import { assign } from '../../util';
import swal from 'sweetalert2';
import { setAuth } from '../../util/auth.util';
import { success, warning } from '../../components/notifications';


export default class LoginStore {
  @observable email = '';
  @observable senha = '';
  @observable loading = false;

  @action handleChange = (event: any, select?: any) => {
    const { id, value } = select || event.target;
    assign(this, id, value);
  }

  @action handleSubmit = async () => {

    const { email, senha } = this;

    try {
      if (email === 'tatiana@gmail.com' && senha === '123') {
        setAuth("12345678");
        success("Seja Bem Vindo!")
      } else {
        warning("Usuário ou Senha incorreta, tente novamente!");
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      swal({
        text: 'Ocorreu um erro não esperado.',
        type: 'error'
      });
      throw error;
    }
  }
}
const login = new LoginStore();
export { login };