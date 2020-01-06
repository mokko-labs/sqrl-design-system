import React from 'react'
import {
  Section,
  Container,
  Box,
  CustomInput,
  Button,
  PrimaryButton,
  Switch,
  InPlaceNotification,
  FlatLogo,
  Control,
  Label,
  Checkbox,
  Field as FormField,
  CustomSelect,
  Loader,
  StyledLine
} from '../lib'
import * as Yup from 'yup'
import { Field, Formik } from 'formik'
import MaskedInput from 'react-text-mask'

const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

let states = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District Of Columbia',
  FM: 'Federated States Of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming'
}

const RenderCheckbox = ({ label, ...rest }) => {
  return (
    <Control {...rest}>
      <Label className="checkbox">
        <Checkbox type="checkbox" {...rest.field} />
        <span style={{ marginLeft: 10 }}>{label}</span>
      </Label>
    </Control>
  )
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Name is required')
    .min(2, 'Name too short')
    .max(40, 'Name too big'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Surname too short')
    .max(40, 'Surname too long'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  phone: Yup.string()
    .required('Phone is required')
    .length(14),
  employer: Yup.string()
    .required()
    .min(4, 'Employer name too small')
    .max(50, 'Employer name too big'),
  state: Yup.string().required('State is required'),
  //  jobDesc: Yup.string().required('Job desciption is required'),
  //employeeCount: Yup.string().required('Number of Employees is required'),
  agreement: Yup.bool().oneOf([true], 'You must agree to T&C')
})

const SignupForm = () => (
  <div>
    <Formik
      initialValues={{
        agreement: false
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
      render={props => (
        <form
          className="form-signup grid-gap-md"
          name="signup"
          onSubmit={props.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="signup" />

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Field
              className={
                props.touched.firstName && props.errors.firstName
                  ? 'is-invalid'
                  : ''
              }
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.firstName}
              id="firstName"
              name="firstName"
              label="First Name"
              component={CustomInput}
            />

            <Field
              className={
                props.touched.lastName && props.errors.lastName
                  ? 'is-invalid'
                  : ''
              }
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.lastName}
              id="lastName"
              name="lastName"
              label="Last Name"
              component={CustomInput}
            />
          </div>

          <Field
            className={
              props.touched.email && props.errors.email ? 'is-invalid' : ''
            }
            type="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            id="email"
            name="email"
            label="Workplace Email"
            component={CustomInput}
          />

          <Field
            type="text"
            name="phone"
            render={({ field }) => (
              <FormField>
                <MaskedInput
                  className={
                    props.touched.phone && props.errors.phone
                      ? 'is-invalid'
                      : ''
                  }
                  {...field}
                  render={(ref, props) => (
                    <CustomInput {...field} {...props} innerRef={ref} />
                  )}
                  mask={phoneNumberMask}
                  guide={false}
                  id="phone"
                  label="Company Phone"
                  type="text"
                />
              </FormField>
            )}
          />

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Field
              className={
                props.touched.employer && props.errors.employer
                  ? 'is-invalid'
                  : ''
              }
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.employer}
              id="employer"
              name="employer"
              label="Employer"
              component={CustomInput}
            />

            <FormField>
              <CustomSelect
                label="State"
                name="state"
                value={props.values.state}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              >
                <option value={null}></option>
                {Object.keys(states).map(key => (
                  <option value={states[key]} label={states[key]} key={key} />
                ))}
              </CustomSelect>
            </FormField>
          </div>

          <Field
            component={RenderCheckbox}
            type="checkbox"
            name="agreement"
            id="agreement"
            label="Agreement text goes here"
          />

          <PrimaryButton type="submit" style={{ marginRight: 16 }}>
            Try 1 Month Free
          </PrimaryButton>

          <PrimaryButton type="button" onClick={() => props.resetForm()}>
            Reset Form
          </PrimaryButton>
        </form>
      )}
    />
  </div>
)

class DemoPage extends React.Component {
  notificationRef = React.createRef()
  state = {
    switchOn: false
  }

  switchChanged = checked => {
    this.setState({
      switchOn: checked
    })
  }

  _showNotification = (message, type) => {
    this.notificationRef.current.showNotification(message, type)
  }

  render() {
    return (
      <Section>
        <Container>
          <Box>
            <h1>Loader</h1>
            <StyledLine />
            <div>
              <Loader className="small" />
            </div>
          </Box>
          <Box>
            <h1>Hello</h1>

            <CustomInput label="Name" type="text" />

            <PrimaryButton style={{ marginRight: 16 }}>Hello</PrimaryButton>
            <PrimaryButton busy>Hello</PrimaryButton>

            <div className="buttons has-addons" style={{ marginTop: 24 }}>
              <Button>Personal</Button>
              <Button className="is-dark">Company</Button>
              <Button>Payment</Button>
            </div>

            <div>
              <Switch
                onChange={this.switchChanged}
                checked={this.state.switchOn}
              />
            </div>
          </Box>
          <FlatLogo />
        </Container>
        <Container>
          <InPlaceNotification ref={this.notificationRef} />
          <div style={{ display: 'flex', flexDirection: 'column', width: 400 }}>
            <Button
              className="is-rounded"
              onClick={() =>
                this._showNotification('This is a Notification', 'success')
              }
            >
              In-place Notification : Success
            </Button>
            <Button
              className="is-rounded"
              onClick={() =>
                this._showNotification('This is a Notification', 'error')
              }
            >
              In-place Notification : Error
            </Button>
            <Button
              className="is-rounded"
              onClick={() =>
                this._showNotification('This is a Notification', 'warn')
              }
            >
              In-place Notification : Warn
            </Button>
          </div>
        </Container>
        <Container>
          <h1>Form Demo with Formik</h1>
          <SignupForm />
        </Container>
      </Section>
    )
  }
}

export default DemoPage
