// Library
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui/dist/bundle';

// Internals
import schema from './simple/schema.json';
import uiSchema from './simple/ui-schema.json';
import givenFormData from './simple/form-data.json';

const theme = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

const App = () => {
  const [formData, setFormData] = React.useState(givenFormData);
  return <MaterialJsonSchemaForm 
            schema={schema} 
            uiSchema={uiSchema} 
            formData={formData} 
            theme={theme}
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={(submittedData) => console.log('form submitted', submittedData)}
          />;
};

export default App;
