// Library
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui/dist/bundle';

// Internals
import schema from './simple/schema.json';
import uiSchema from './simple/ui-schema.json';
import formData from './simple/form-data.json';

const App = () => {
  return <MaterialJsonSchemaForm 
            schema={schema} 
            uiSchema={uiSchema} 
            formData={formData} 
            onSubmit={(submittedData) => console.log('form submitted', submittedData)}
          />;
};

export default App;
