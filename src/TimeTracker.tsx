import React from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';


type Duration = {startTime: string, endTime: string};
type Durations = {
  durations: Duration[]
};

type Props = {
	sendDurationValue: (duration: Durations) => void
}

const initialValues = {
  durations: [
    {
      startTime: '',
      endTime: ''
    },
  ],
};

function TimeTracker(props: Props): JSX.Element {
  return (
    <React.Fragment>
      <p>TimeTracker</p>
      <Formik 
    		initialValues={initialValues}
    		onSubmit={(durationData) => {
        	props.sendDurationValue(durationData);
        }}
      >
      {({ values }) => (
        <Form>
          <FieldArray name="durations">
            {({ remove, push }) => (
              <React.Fragment>
              {values.durations.length > 0 &&
                values.durations.map((item, index) => (
                <React.Fragment key={`fragment.${index}`}>
                  <label key={`label.durations.${index}.startTime`} htmlFor={`durations.${index}.startTime`}>When did you start?</label>
                  <Field
                    key={`input.durations.${index}.startTime`} 
                    name={`durations.${index}.startTime`} 
                    placeholder="Your Start Time"
                  />
                  <label key={`label.durations.${index}.endTime`} htmlFor={`durations.${index}.endTime`} >When did you end?</label>
                  <Field
                    key={`input.durations.${index}.endTime`} 
                    name={`durations.${index}.endTime`} 
                    placeholder="Your End Time"
                  />
                  <button
                    type="button"
                    key={`button.${index}`}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </React.Fragment>
            ))}
                <button
                type="button"
                className="float-right"
                onClick={() => push({ startTime: '', endTime: ''})}
              >
                + Add
              </button>
              <button 
                type="submit"
              >
                Add your time
              </button>
          </React.Fragment>
          )}
          </FieldArray>
        </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default TimeTracker;
