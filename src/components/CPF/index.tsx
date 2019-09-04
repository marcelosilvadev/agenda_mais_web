
import * as React from 'react';
import { SemanticWIDTHS, Form } from 'semantic-ui-react';
import MaskedInput from 'react-text-mask';
import { cpf } from '../../util/format.util';

interface Props {
  required?: boolean;
  width?: SemanticWIDTHS;
  value?: any;
  id: string;
  onChange: (event: any, subevent?: any) => void;
}
interface State {
  cpf?: string;
}

export default class CPFInput extends React.Component<Props, State> {

  rawValue = '';
  masked: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      cpf: ''
    };
    this.onChange = this.onChange.bind(this);
    this.getRawValue = this.getRawValue.bind(this);
    this.applyValidation = this.applyValidation.bind(this);
  }

  async componentDidMount() {
    const { value, required } = this.props;
    this.getRawValue(value);

    if (value !== '') {
      await this.setState({ cpf: cpf(value) });
    }

    if (required) {
      this.applyValidation();
    }
  }

  async componentWillReceiveProps(props: Props) {
    const { 'value': cpf, required } = props;
    if (this.props.value === cpf) {
      return;
    }

    this.getRawValue(cpf);
    if (required) {
      this.applyValidation();
    }
    await this.setState({ cpf });
  }

  async getRawValue(value?: string) {
    this.rawValue = (value || '').toString().trim().replace(/-/g, '').replace(/\./g, '').replace(/_/g, '');
  }

  static defaultProps = {
    width: 4,
    required: true,
    value: ''
  };

  async applyValidation() {
    if (this.rawValue.length !== 11) {
      this.masked.inputElement.setCustomValidity('Por favor, digite um cpf válido!');            
    }
    else {
      this.masked.inputElement.setCustomValidity('');
    }
  }

  async onChange(event: { target: { value: any; }; }) {
    const { 'value': cpf } = event.target;
    const { required } = this.props;

    this.getRawValue(cpf);    
    if (required) {
      this.applyValidation();
    }

    await this.setState({ cpf });

    await this.props.onChange({
      target: {
        id: this.props.id,
        value: this.rawValue
      }
    });

  }
  render() {
    const { required, width, id } = this.props;
    return (
      <>
        <Form.Field
          required={required}
          width={width}>
          <label>CPF:</label>
          <MaskedInput
            id={id}
            ref={ref => this.masked = ref}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ]}
            required={required}
            guide={true}
            placeholder='Ex.: 434.123.123-12'
            value={this.state.cpf}
            onChange={this.onChange}
          />
        </Form.Field>
      </>
    );
  }
}