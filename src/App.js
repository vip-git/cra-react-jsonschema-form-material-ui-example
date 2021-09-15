// Library
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui/dist/bundle';

// Internals
import schema from './simple/schema.json';
import uiSchema from './simple/ui-schema.json';
import givenFormData from './simple/form-data.json';

const App = () => {
  const [formData, setFormData] = React.useState(givenFormData);
  return <MaterialJsonSchemaForm 
            schema={schema} 
            uiSchema={uiSchema} 
            formData={formData} 
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={(submittedData) => console.log('form submitted', submittedData)}
          />;
};

export default App;
