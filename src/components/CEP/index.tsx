import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { zipCode } from '../../util/format.util';


interface Props {
  id?: string;
  name?: string;
  value: any;
  onChange: any;
  required?: boolean;
  disabled?: boolean;
  [x: string]: any;
}

interface State {
  zipcode?: string;
}

export default class ZipCodeInput extends React.Component<Props, State> {
  private rawValue = '';
  private masked: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.onChange = this.onChange.bind(this);
    this.getRawValue = this.getRawValue.bind(this);
    this.applyValidation = this.applyValidation.bind(this);
  }

  async componentDidMount() {
    const { 'value': zipcode, required } = this.props;
    this.getRawValue(zipcode);

    if (zipcode !== '') {
      await this.setState({ zipcode: zipCode(zipcode) });
    }

    if (required) {
      this.applyValidation();
    }
  }

  async componentWillReceiveProps(props: Props) {
    const { 'value': zipcode, required } = props;
    if (this.props.value === zipcode) {
      return;
    }

    this.getRawValue(zipcode);
    if (required) {
      this.applyValidation();
    }
    await this.setState({ zipcode });
  }

  async getRawValue(value?: string) {
    this.rawValue = (value || '').toString().trim().replace('-', '').replace(/_/g, '');
  }

  async applyValidation() {
    if (this.rawValue.length !== 8) {
      this.masked.inputElement.setCustomValidity('Por favor, digite um cep válido!');
    }
    else {
      this.masked.inputElement.setCustomValidity('');
    }
  }

  async onChange(event: { target: { value: any; }; }) {
    const { 'value': zipcode } = event.target;
    const { required } = this.props;

    this.getRawValue(zipcode);

    if (required) {
      this.applyValidation();
    }

    await this.setState({ zipcode });

    await this.props.onChange({
      target: {
        id: this.props.id,
        value: this.rawValue,
        name: this.props.name
      }
    });

  }

  render() {
    const { id, value, name, ...rest } = this.props;
    return (
      <MaskedInput
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
        id={id}
        name={name}
        ref={ref => this.masked = ref}
        guide={false}
        placeholder='Ex.: 14400-000'
        value={this.state.zipcode}
        {...rest}
        onChange={this.onChange}
      />
    );
  }
}