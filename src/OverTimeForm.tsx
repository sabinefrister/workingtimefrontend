import React from 'react';
import { Formik, Field, Form } from 'formik';

type Props = {
	sendOverTimeValue: (overTime: string) => void
}

function OverTimeForm(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <Formik 
		initialValues={{
			overTime: "",
		}}
		onSubmit={(overTimeValue) => {
        	props.sendOverTimeValue(overTimeValue.overTime);
        }}
      >
  		<Form>
			<label htmlFor="overTime">Your Overtime from Yesterday</label>
			<Field id="overTime" name="overTime" placeholder="00:00" />
			<button type="submit">Submit</button>
        </Form>
      </Formik>
    </React.Fragment>
  );
}

export default OverTimeForm;
